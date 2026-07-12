export type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

export type MenuGroup = {
  id: string;
  label: string;
  icon: string;
  note?: string;
  items: MenuItem[];
};

export const menuGroups: MenuGroup[] = [
  {
    id: "hamburgueres",
    label: "Hambúrgueres",
    icon: "🍔",
    items: [
      { name: "X-Bacon Salada", price: 19.9 },
      { name: "X-Bacon", price: 22 },
      { name: "X-Calabresa", price: 18.9 },
      { name: "X-Egg", price: 22 },
      { name: "X-Burguer", price: 20 },
      { name: "X-Salada", price: 19.9 },
      { name: "X-Tudo no Prato", price: 27.9 },
      { name: "X-Tudo no Pão", price: 25.9 },
      { name: "X-Maionese", price: 18 },
    ],
  },
  {
    id: "gourmet",
    label: "Burgers gourmet",
    icon: "🥩",
    note: "Todos preparados com hambúrguer de 140g.",
    items: [
      { name: "X-Burguer Gourmet", description: "Hambúrguer de 140g.", price: 23.9 },
      { name: "X-Bacon Gourmet", description: "Hambúrguer de 140g.", price: 26.9 },
      { name: "X-Bacon Salada Gourmet", description: "Hambúrguer de 140g.", price: 28.9 },
      { name: "X-Calabresa Gourmet", description: "Hambúrguer de 140g.", price: 25.9 },
      { name: "X-Maionese Gourmet", description: "Hambúrguer de 140g.", price: 23.9 },
      { name: "X-Egg Gourmet", description: "Hambúrguer de 140g.", price: 25.9 },
      { name: "X-Tudo no Pão Gourmet", description: "Hambúrguer de 140g.", price: 35 },
      { name: "X-Tudo no Prato Gourmet", description: "Hambúrguer de 140g.", price: 37 },
      { name: "X-Salada Gourmet", description: "Hambúrguer de 140g.", price: 23.9 },
    ],
  },
  {
    id: "pizzas-salgadas",
    label: "Pizzas salgadas",
    icon: "🍕",
    note: "Pizza grande com 8 fatias e até 2 sabores.",
    items: [
      { name: "Atum", description: "Atum com cobertura de cebola.", price: 54 },
      { name: "Vista Alegre", description: "Calabresa, atum, cebola, mussarela e tomate.", price: 54 },
      { name: "À Moda do Pizzaiolo", description: "Calabresa, bacon, parmesão e Catupiry.", price: 54 },
      { name: "À Moda da Casa", description: "Presunto, bacon, ervilha e Catupiry.", price: 54 },
      { name: "Baiana", description: "Calabresa, parmesão, cebola, ovo e Catupiry.", price: 45.9 },
      { name: "Americana", description: "Presunto, mussarela e tomate.", price: 45.9 },
      { name: "Baiacatu", description: "Calabresa, Catupiry e parmesão.", price: 45.9 },
      { name: "Brasileira", description: "Mussarela, atum, ervilha, palmito e cebola.", price: 54 },
      { name: "Aliche", description: "Aliche e parmesão ralado.", price: 54 },
      { name: "Bacon", description: "Mussarela, bacon e cebola.", price: 45.9 },
      { name: "Caipirão", description: "Frango, milho e Catupiry.", price: 54 },
      { name: "Bauru", description: "Presunto, mussarela e tomate.", price: 45.9 },
      { name: "Calabresa", description: "Calabresa coberta com mussarela.", price: 45.9 },
      { name: "Catupiry", description: "Catupiry, azeitonas e orégano.", price: 45.9 },
      { name: "Catupiry 2", description: "Champignon, cebola e parmesão ralado.", price: 54 },
      { name: "Frango", description: "Frango, tomate, cebola e mussarela.", price: 45.9 },
      { name: "Espanhola", description: "Escarola, mussarela e bacon.", price: 54 },
      { name: "Siciliana", description: "Champignon, cebola, bacon e mussarela.", price: 54 },
      { name: "Caipira", description: "Frango, milho e cebola.", price: 54 },
      { name: "Brócolis 1", description: "Brócolis, mussarela e bacon.", price: 54 },
      { name: "Toscana", description: "Calabresa, cebola e mussarela.", price: 45.9 },
      { name: "Especial", description: "Escarola, bacon, cebola e mussarela ou Catupiry.", price: 54 },
      { name: "Frango com Catupiry", description: "Frango, bacon e Catupiry.", price: 45.9 },
      { name: "2 Queijos", description: "Mussarela e Catupiry.", price: 45.9 },
      { name: "4 Queijos", description: "Mussarela, Catupiry, provolone e parmesão.", price: 54 },
      { name: "Camarão", description: "Camarão, cebola e Catupiry ou mussarela.", price: 75 },
      { name: "Pepperoni 1", description: "Mussarela, pepperoni, cebola e parmesão.", price: 54 },
      { name: "Portuguesa", description: "Presunto, ovo, palmito, ervilha, mussarela e cebola.", price: 54 },
      { name: "Caprese", description: "Mussarela de búfala, pasta de azeitona e manjericão.", price: 70 },
      { name: "Brócolis 2", description: "Brócolis, palmito, champignon e mussarela.", price: 54 },
      { name: "Pepperoni 2", description: "Mussarela, pepperoni, cebola e parmesão.", price: 54 },
      { name: "Mussarela", description: "Mussarela e tomates em rodelas.", price: 45.9 },
    ],
  },
  {
    id: "pizzas-doces",
    label: "Pizzas doces",
    icon: "🍫",
    note: "Pizza grande com 8 fatias e até 2 sabores.",
    items: [
      { name: "Romeu e Julieta", description: "Mussarela e goiabada.", price: 60 },
      { name: "Brigadeiro", description: "Chocolate e granulado.", price: 62 },
      { name: "Prestígio", description: "Chocolate e coco ralado.", price: 64 },
      { name: "Napolitano", description: "Chocolate, coco ralado e morango fatiado.", price: 67 },
      { name: "Banana", description: "Banana, açúcar e canela.", price: 50 },
    ],
  },
  {
    id: "beirutes",
    label: "Beirutes",
    icon: "🥙",
    items: [
      { name: "Beirute de Atum", description: "Mussarela, Catupiry, cebola, salada, ovo e maionese.", price: 35.9 },
      { name: "Beirute de Pernil", description: "Pernil ao molho da casa, mussarela, Catupiry, ovo, parmesão e salada.", price: 35.9 },
      { name: "Beirute de Contrafilé", description: "Queijo prato, presunto, ovo, Catupiry, bacon, salada e maionese.", price: 37.9 },
      { name: "Beirute de Frango", description: "Peito de peru, mussarela, ovo, salada e maionese.", price: 35.9 },
      { name: "Beirute Americano", description: "Presunto, queijo, ovo, salada e maionese.", price: 35.9 },
      { name: "Beirute Light", description: "Queijo branco, tomate seco, peito de peru, salada e maionese.", price: 35.9 },
      { name: "Beirute de Calabresa", description: "Presunto, queijo, bacon, ovo, salada e maionese.", price: 35.9 },
    ],
  },
  {
    id: "caldos",
    label: "Sopas e caldos",
    icon: "🥣",
    items: [{ name: "Cumbuca", description: "Porção individual.", price: 14.9 }],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: "🥤",
    items: [
      { name: "Guaraná 600ml", price: 9.9 },
      { name: "Pepsi 600ml", price: 9.9 },
      { name: "Sukita Laranja 600ml", price: 9.9 },
      { name: "Soda 600ml", price: 9.9 },
      { name: "Coca-Cola 2L", price: 18 },
      { name: "Pepsi lata", price: 7.9 },
      { name: "Sukita Laranja lata", price: 7.9 },
      { name: "Soda lata", price: 7.9 },
      { name: "Coca-Cola 600ml", price: 9.9 },
      { name: "Fanta Laranja 600ml", price: 9.9 },
      { name: "Sprite 600ml", price: 9.9 },
      { name: "Coca-Cola lata", price: 7.9 },
      { name: "Fanta Laranja lata", price: 7.9 },
      { name: "Sprite lata", price: 7.9 },
    ],
  },
];

export const totalMenuItems = menuGroups.reduce((total, group) => total + group.items.length, 0);
