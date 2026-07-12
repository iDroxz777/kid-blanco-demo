export type Product = {
  name: string;
  category: "pizza" | "burger" | "beirute" | "caldo";
  description: string;
  price: number;
  tags: string[];
  emoji: string;
};

export const products: Product[] = [
  { name: "Frango com Catupiry", category: "pizza", description: "Frango, bacon e Catupiry em uma pizza grande de 8 fatias.", price: 45.9, tags: ["cremoso", "carne", "familia", "custo"], emoji: "🍕" },
  { name: "4 Queijos", category: "pizza", description: "Mussarela, Catupiry, provolone e parmesão.", price: 54, tags: ["cremoso", "queijo", "familia"], emoji: "🧀" },
  { name: "À Moda do Pizzaiolo", category: "pizza", description: "Calabresa, bacon, parmesão e Catupiry.", price: 54, tags: ["carne", "cremoso", "intenso", "familia"], emoji: "🍕" },
  { name: "Caprese", category: "pizza", description: "Mussarela de búfala, pasta de azeitona e manjericão.", price: 70, tags: ["leve", "vegetariano", "premium", "familia"], emoji: "🌿" },
  { name: "Calabresa", category: "pizza", description: "Calabresa coberta com mussarela.", price: 45.9, tags: ["tradicional", "carne", "custo", "familia"], emoji: "🍕" },
  { name: "Baiana", category: "pizza", description: "Calabresa, parmesão, cebola, ovo e Catupiry.", price: 45.9, tags: ["carne", "cremoso", "intenso", "familia", "custo"], emoji: "🌶️" },
  { name: "Portuguesa", category: "pizza", description: "Presunto, ovo, palmito, ervilha, mussarela e cebola.", price: 54, tags: ["tradicional", "carne", "familia"], emoji: "🍕" },
  { name: "Brócolis 2", category: "pizza", description: "Brócolis, palmito, champignon e mussarela.", price: 54, tags: ["leve", "vegetariano", "familia"], emoji: "🥦" },
  { name: "Camarão", category: "pizza", description: "Camarão, cebola e Catupiry ou mussarela.", price: 75, tags: ["cremoso", "premium", "familia"], emoji: "🍤" },
  { name: "Mussarela", category: "pizza", description: "Mussarela e tomates em rodelas.", price: 45.9, tags: ["tradicional", "vegetariano", "familia", "custo"], emoji: "🧀" },
  { name: "X-Bacon Salada Gourmet", category: "burger", description: "Hambúrguer de 140g, bacon e salada.", price: 28.9, tags: ["carne", "intenso", "individual", "premium"], emoji: "🍔" },
  { name: "X-Salada Gourmet", category: "burger", description: "Hambúrguer de 140g com queijo e salada.", price: 23.9, tags: ["tradicional", "individual", "custo"], emoji: "🍔" },
  { name: "X-Egg Gourmet", category: "burger", description: "Hambúrguer de 140g com queijo e ovo.", price: 25.9, tags: ["tradicional", "carne", "individual"], emoji: "🍳" },
  { name: "X-Tudo no Prato", category: "burger", description: "O lanche mais reforçado, servido no prato.", price: 27.9, tags: ["carne", "intenso", "individual", "reforcado"], emoji: "🍳" },
  { name: "X-Calabresa", category: "burger", description: "Um clássico saboroso e com ótimo custo-benefício.", price: 18.9, tags: ["carne", "tradicional", "individual", "custo"], emoji: "🥪" },
  { name: "X-Maionese", category: "burger", description: "Lanche tradicional com maionese da casa.", price: 18, tags: ["cremoso", "tradicional", "individual", "custo"], emoji: "🍔" },
  { name: "Beirute de Pernil", category: "beirute", description: "Pernil ao molho da casa, mussarela, Catupiry e salada.", price: 35.9, tags: ["carne", "cremoso", "individual", "reforcado"], emoji: "🥙" },
  { name: "Beirute Light", category: "beirute", description: "Queijo branco, tomate seco, peito de peru e salada.", price: 35.9, tags: ["leve", "individual", "premium"], emoji: "🥙" },
  { name: "Beirute de Atum", category: "beirute", description: "Atum, mussarela, Catupiry, cebola, salada e ovo.", price: 35.9, tags: ["cremoso", "leve", "individual"], emoji: "🐟" },
  { name: "Beirute de Contrafilé", category: "beirute", description: "Contrafilé, queijo, presunto, ovo, Catupiry e bacon.", price: 37.9, tags: ["carne", "intenso", "individual", "premium", "reforcado"], emoji: "🥙" },
  { name: "Cumbuca de caldo", category: "caldo", description: "Uma opção quente, simples e acolhedora.", price: 14.9, tags: ["leve", "individual", "custo"], emoji: "🥣" },
];

export const featuredProducts = [
  { name: "Frango com Catupiry", category: "Pizza grande • 8 fatias", description: "Frango, bacon e Catupiry. Cremosa e feita para dividir.", price: "R$ 45,90", emoji: "🍕", art: "art-pizza", badge: "Mais pedida" },
  { name: "X-Bacon Salada", category: "Burger gourmet • 140g", description: "O equilíbrio certo entre bacon, carne e frescor.", price: "R$ 28,90", emoji: "🍔", art: "art-burger", badge: "Gourmet" },
  { name: "Beirute de Pernil", category: "Beirute especial", description: "Pernil ao molho da casa, queijo, Catupiry e salada.", price: "R$ 35,90", emoji: "🥙", art: "art-beirute", badge: "Da casa" },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
