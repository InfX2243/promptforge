export type LLM = "chatgpt" | "gemini";

export interface PromptExample {
  input: string;
  output: string;
}

export interface PromptVariant {
  name: string;
  instructions: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;

  categoryId: string;
  tags: string[];

  supportedLLMs: LLM[];

  instructions: string;
  requirements: string[];

  variants: PromptVariant[];

  example?: PromptExample;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
