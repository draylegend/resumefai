export type PromptTypes = 'description';

export type Langs = 'english' | 'deutsch' | 'russian' | 'french';

export const createPrompt = (
  type: PromptTypes,
  position: string,
  lang: Langs,
): Record<keyof PromptTypes, string>[keyof PromptTypes] =>
  ({
    description: `You're a professional ${position}. Provide example of a short introduction, max 300 characters. Use ${lang} language.`,
  })[type];
