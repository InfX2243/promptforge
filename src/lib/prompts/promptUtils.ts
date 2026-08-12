import { prompts } from "../../data/prompts/prompts";
import type { Prompt, PromptVariant } from "../../types/prompt";

import { categories } from "../../data/prompts/categories";

export function getPromptById(promptId: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.id === promptId);
}

export function getPromptsByCategory(categoryId: string): Prompt[] {
  return prompts.filter((prompt) => prompt.categoryId === categoryId);
}

export function extractPlaceholders(text: string): string[] {
  const matches = text.match(/{{\s*([^{}]+?)\s*}}/g);

  if (!matches) {
    return [];
  }

  return Array.from(
    new Set(matches.map((match) => match.replace(/{{|}}/g, "").trim())),
  );
}

export function hasUnfilledPlaceholders(text: string): boolean {
  return extractPlaceholders(text).length > 0;
}

export function getPromptVariant(
  prompt: Prompt,
  variantName: string,
): PromptVariant | undefined {
  return prompt.variants.find((variant) => variant.name === variantName);
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getSearchRank(prompt: Prompt, normalizedQuery: string): number {
  if (!normalizedQuery) {
    return Infinity;
  }

  const title = normalize(prompt.title);

  // 1. Exact title
  if (title === normalizedQuery) {
    return 0;
  }

  // 2. Title contains
  if (title.includes(normalizedQuery)) {
    return 1;
  }

  // 3. Tag
  const hasMatchingTag = prompt.tags.some((tag) =>
    normalize(tag).includes(normalizedQuery),
  );

  if (hasMatchingTag) {
    return 2;
  }

  // 4. Category
  const category = categories.find((item) => item.id === prompt.categoryId);

  if (category && normalize(category.name).includes(normalizedQuery)) {
    return 3;
  }

  // 5. Description
  if (normalize(prompt.description).includes(normalizedQuery)) {
    return 4;
  }

  return Infinity;
}

export function searchPrompts(prompts: Prompt[], query: string): Prompt[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  return prompts
    .map((prompt, index) => ({
      prompt,
      index,
      rank: getSearchRank(prompt, normalizedQuery),
    }))
    .filter((item) => item.rank !== Infinity)
    .sort((a, b) => {
      if (a.rank !== b.rank) {
        return a.rank - b.rank;
      }

      // Preserve original dataset order
      // for equally-ranked results.
      return a.index - b.index;
    })
    .map((item) => item.prompt);
}
