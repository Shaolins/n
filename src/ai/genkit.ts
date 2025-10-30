import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {googleCloud} from '@genkit-ai/google-cloud';

export const ai = genkit({
  plugins: [
    googleCloud(),
    googleAI({
      // O Genkit tentará habilitar a API Vertex AI se não estiver habilitada.
      // Defina como 'ignore' para desativar.
      ensureApiEnablement: 'prompt',
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});
