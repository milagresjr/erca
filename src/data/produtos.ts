export interface Produto {
  id: number
  nome: string
  categoria: 'Individual' | 'Coletiva'
  descricao: string
  especificacoes: string[]
  imagem: string
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Ração Operacional Individual para Náufragos',
    categoria: 'Individual',
    descricao: 'Kit de sobrevivência nutricional para situações de naufrágio, com alto teor energético e resistência à água salgada.',
    especificacoes: [
      'Peso: 500g',
      'Validade: 24 meses',
      'Calorias: 2.000 kcal',
      'Embalagem impermeável',
      'Pronto a consumir',
    ],
    imagem: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=400&q=80',
  },
  {
    id: 2,
    nome: 'Ração Operacional Individual para Horas',
    categoria: 'Individual',
    descricao: 'Refeição compacta para missões curtas de até 6 horas, leve e de fácil transporte.',
    especificacoes: [
      'Peso: 350g',
      'Validade: 24 meses',
      'Calorias: 1.200 kcal',
      'Fácil transporte',
      'Sem refrigeração',
    ],
    imagem: 'https://images.unsplash.com/photo-1537633552982-df1d3a5b512b?w=400&q=80',
  },
  {
    id: 3,
    nome: 'Ração Operacional Individual para 12 Horas',
    categoria: 'Individual',
    descricao: 'Suporte nutricional completo para operações de média duração, com refeição principal e snacks energéticos.',
    especificacoes: [
      'Peso: 700g',
      'Validade: 24 meses',
      'Calorias: 2.800 kcal',
      'Refeição principal + snacks',
      'Aquecimento químico opcional',
    ],
    imagem: 'https://images.unsplash.com/photo-1558704164-ab7ca0016c1f?w=400&q=80',
  },
  {
    id: 4,
    nome: 'Ração Operacional Individual para 24 Horas',
    categoria: 'Individual',
    descricao: 'Kit alimentar completo para operações prolongadas, com café da manhã, almoço, jantar e snacks.',
    especificacoes: [
      'Peso: 1.2kg',
      'Validade: 24 meses',
      'Calorias: 3.800 kcal',
      '3 refeições + snacks',
      'Suplementos vitamínicos',
    ],
    imagem: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  },
  {
    id: 5,
    nome: 'Ração Operacional Militar Coletiva',
    categoria: 'Coletiva',
    descricao: 'Solução alimentar para grupos militares em operação, balanceada e de preparo rápido.',
    especificacoes: [
      'Serve: 10 militares',
      'Validade: 24 meses',
      'Calorias: 1.200 kcal/pessoa',
      'Preparo em 15 min',
      'Embalagem grupal',
    ],
    imagem: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
  },
  {
    id: 6,
    nome: 'Ração Operacional Coletiva - Esquadra de Tipo',
    categoria: 'Coletiva',
    descricao: 'Ração projetada para equipas tácticas, com variedade de itens e nutrição equilibrada.',
    especificacoes: [
      'Serve: 5 militares',
      'Validade: 24 meses',
      'Calorias: 1.400 kcal/pessoa',
      'Variedade de itens',
      'Nutrição equilibrada',
    ],
    imagem: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
  },
  {
    id: 7,
    nome: 'Ração Operacional Coletiva - 12 Grupo de Combate',
    categoria: 'Coletiva',
    descricao: 'Kit completo para grupo de combate de 12 elementos, com refeições coordenadas e de alto rendimento.',
    especificacoes: [
      'Serve: 12 militares',
      'Validade: 24 meses',
      'Calorias: 1.300 kcal/pessoa',
      'Coordenado para grupo',
      'Alto rendimento',
    ],
    imagem: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=400&q=80',
  },
  {
    id: 8,
    nome: 'Ração Operacional Coletiva para Pelotão',
    categoria: 'Coletiva',
    descricao: 'Solução logística alimentar para pelotão completo, ideal para missões prolongadas e destacamentos.',
    especificacoes: [
      'Serve: 30 militares',
      'Validade: 24 meses',
      'Calorias: 1.200 kcal/pessoa',
      'Logística simplificada',
      'Missões prolongadas',
    ],
    imagem: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  },
]
