import type { Product } from "../data/menu";

export type Answers = {
  moment?: "pizza" | "lanche" | "leve";
  preference?: "cremoso" | "carne" | "tradicional" | "leve";
  size?: "individual" | "familia" | "custo";
};

const categoryMatch: Record<NonNullable<Answers["moment"]>, Product["category"][]> = {
  pizza: ["pizza"],
  lanche: ["burger", "beirute"],
  leve: ["caldo", "beirute", "pizza"],
};

export function recommend(products: Product[], answers: Answers) {
  const ranked = products
    .map((product) => {
      let score = 0;
      if (answers.moment && categoryMatch[answers.moment].includes(product.category)) score += 6;
      if (answers.preference && product.tags.includes(answers.preference)) score += 4;
      if (answers.size && product.tags.includes(answers.size)) score += 3;
      if (answers.size === "custo" && product.price <= 45.9) score += 2;
      return { product, score };
    })
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price);

  const selected: typeof ranked = [];
  for (const candidate of ranked) {
    const sameCategory = selected.filter(({ product }) => product.category === candidate.product.category).length;
    const categoryLimit = answers.moment === "pizza" ? 4 : 2;
    if (sameCategory < categoryLimit) selected.push(candidate);
    if (selected.length === 4) break;
  }

  if (selected.length < 4) {
    for (const candidate of ranked) {
      if (!selected.includes(candidate)) selected.push(candidate);
      if (selected.length === 4) break;
    }
  }

  return selected.map(({ product }, index) => ({
      ...product,
      reason: index === 0
        ? `Combina melhor com sua preferência por algo ${answers.preference ?? "saboroso"} e ${answers.size === "familia" ? "para dividir" : "na medida da sua fome"}.`
        : index === 1
          ? "Uma alternativa próxima do seu perfil, com outro equilíbrio de sabores."
          : index === 2
            ? "Uma escolha diferente para ampliar suas opções sem fugir do que você pediu."
            : "A opção de contraste: outro estilo e faixa de preço para você comparar.",
    }));
}
