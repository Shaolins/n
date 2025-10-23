"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "@/lib/firebase"; // Supondo que você tenha um arquivo de configuração do firebase

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

export function ImageUploader() {
  // --- Estados do Componente ---

  // Guarda o arquivo selecionado pelo usuário (objeto File). É nulo se nada foi selecionado.
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Guarda a URL local temporária da imagem para pré-visualização.
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Controla se o processo de upload está em andamento.
  const [isUploading, setIsUploading] = useState(false);

  // Guarda a mensagem de status para o usuário.
  const [statusMessage, setStatusMessage] = useState("Selecione uma imagem para começar.");
  
  const { toast } = useToast();

  // --- Funções ---

  /**
   * Chamada quando o usuário seleciona um arquivo no input.
   * @param event - O evento do input de arquivo.
   */
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // 1. Pega o primeiro arquivo da lista (mesmo que o input só aceite um).
    const file = event.target.files?.[0];

    // 2. Se um arquivo foi selecionado:
    if (file) {
      // 3. Armazena o objeto `File` no estado.
      setSelectedFile(file);
      setStatusMessage(`Arquivo selecionado: ${file.name}`);

      // 4. Cria uma URL local para o arquivo.
      // `URL.createObjectURL(file)` gera uma URL temporária que o navegador entende.
      // Ex: "blob:http://localhost:3000/a1b2c3d4-e5f6..."
      // Esta URL aponta para o arquivo que está na memória do navegador.
      // É a chave para a pré-visualização instantânea!
      const localUrl = URL.createObjectURL(file);
      setPreviewUrl(localUrl);
    } else {
      // 5. Se nenhum arquivo foi selecionado (ex: o usuário cancelou), limpa os estados.
      setSelectedFile(null);
      setPreviewUrl(null);
      setStatusMessage("Nenhum arquivo selecionado.");
    }
  };

  /**
   * Chamada quando o usuário clica no botão "Enviar Imagem".
   */
  const handleUpload = async () => {
    // 1. Garante que há um arquivo selecionado antes de continuar.
    if (!selectedFile) {
      toast({
        variant: "destructive",
        title: "Nenhum arquivo selecionado",
        description: "Por favor, escolha um arquivo antes de enviar.",
      });
      return;
    }

    // 2. Inicia o estado de upload.
    setIsUploading(true);
    setStatusMessage("Enviando imagem...");

    // 3. Inicializa o Firebase Storage.
    const storage = getStorage(app);

    // 4. (EDITÁVEL) Renomeia o arquivo e define o diretório.
    // Pega a extensão do arquivo original (ex: ".jpg", ".png").
    const fileExtension = selectedFile.name.split('.').pop();
    // Cria um novo nome único usando um timestamp + número aleatório.
    const newFileName = `barbershop-upload-${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExtension}`;
    // (EDITÁVEL) Define o diretório no Firebase Storage.
    // Ex: "uploads/clientes/barbershop-upload-1678886400000.jpg"
    const storagePath = `uploads/clientes/${newFileName}`;
    
    // 5. Cria uma referência para o local onde a imagem será salva no Firebase.
    const storageRef = ref(storage, storagePath);

    try {
      // 6. Envia o arquivo para o Firebase Storage.
      // `uploadBytes` recebe a referência e o arquivo e faz o upload.
      await uploadBytes(storageRef, selectedFile);

      // 7. Sucesso! Atualiza a interface.
      setStatusMessage(`Upload concluído! Imagem salva em: ${storagePath}`);
      toast({
        title: "Upload bem-sucedido!",
        description: "Sua imagem foi enviada para o Firebase Storage.",
      });

    } catch (error) {
      // 8. Falha. Informa o usuário sobre o erro.
      console.error("Erro no upload:", error);
      setStatusMessage("Erro ao enviar a imagem. Tente novamente.");
       toast({
        variant: "destructive",
        title: "Erro no Upload",
        description: "Não foi possível enviar sua imagem. Verifique o console para mais detalhes.",
      });
    } finally {
      // 9. Finaliza o estado de upload, independentemente do resultado.
      setIsUploading(false);
    }
  };


  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Upload className="h-6 w-6"/> Uploader de Imagem</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pré-visualização da imagem */}
        <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Pré-visualização"
              width={400}
              height={225}
              className="object-contain"
            />
          ) : (
            <p className="text-muted-foreground">A pré-visualização aparecerá aqui</p>
          )}
        </div>

        <div className="space-y-2">
           <Input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={handleFileChange}
            disabled={isUploading}
          />
           <p className="text-sm text-muted-foreground">Selecione uma imagem (PNG, JPG, GIF).</p>
        </div>
       
        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className="w-full"
        >
          {isUploading ? "Enviando..." : "Enviar Imagem"}
        </Button>
        
        {/* Status e Barra de Progresso */}
        <div className="space-y-2">
            <p className="text-center text-sm font-medium">{statusMessage}</p>
            {isUploading && <Progress value={undefined} className="w-full" />}
        </div>

      </CardContent>
    </Card>
  );
}
