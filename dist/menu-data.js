/* Menu transcribed from the supplied PDF. Prices in Moroccan dirhams. */
const MENU_DATA = [
  {
    "id": "category-0",
    "name": "Petits Déjeuners",
    "title": "PETITS DÉJEUNERS",
    "arabic": "وجبات الإفطار",
    "icon": "breakfast",
    "image": "assets/categories/0.webp",
    "items": [
      {
        "id": "p0-0",
        "name": "Classique",
        "price": 25,
        "description": "Pain, Huile d'olive, confiture, Miel, Beurre, Fromage, Boisson chaude"
      },
      {
        "id": "p0-1",
        "name": "Rapide Msemen",
        "price": 25,
        "description": "Msemen, Boisson chaude + Jus d'orange"
      }
    ]
  },
  {
    "id": "category-1",
    "name": "Baldi",
    "title": "BALDI",
    "arabic": "الفطور البلدي",
    "icon": "tea",
    "image": "assets/categories/1.webp",
    "items": [
      {
        "id": "p1-0",
        "name": "Omelette au choix + Pain",
        "price": 35,
        "description": "Olives, Fromage, Huile d'olive + Boisson au choix"
      },
      {
        "id": "p1-1",
        "name": "Omelette Khlii",
        "price": 45,
        "description": "Pain, Huile d'olive, Amlou, Thé"
      }
    ]
  },
  {
    "id": "category-2",
    "name": "Entrées Froides",
    "title": "ENTRÉES FROIDES",
    "arabic": "المقبلات الباردة",
    "icon": "salad",
    "image": "assets/food/salade-nicoise.webp",
    "items": [
      {
        "id": "p2-0",
        "name": "Salade Marocaine",
        "price": 20,
        "description": ""
      },
      {
        "id": "p2-1",
        "name": "Salade Mexicaine",
        "price": 30,
        "description": ""
      },
      {
        "id": "p2-2",
        "name": "Salade Niçoise",
        "price": 30,
        "description": ""
      },
      {
        "id": "p2-3",
        "name": "Salade Riche",
        "price": 35,
        "description": ""
      },
      {
        "id": "p2-4",
        "name": "Salade Lalla Mama",
        "price": 40,
        "description": ""
      },
      {
        "id": "p2-5",
        "name": "Salade Avocat Fara",
        "price": 35,
        "description": ""
      }
    ]
  },
  {
    "id": "category-3",
    "name": "Entrées Chaudes",
    "title": "ENTRÉES CHAUDES",
    "arabic": "المقبلات الساخنة",
    "icon": "soup",
    "image": "assets/categories/3.webp",
    "items": [
      {
        "id": "p3-0",
        "name": "Soupe Harira",
        "price": 15,
        "description": ""
      },
      {
        "id": "p3-1",
        "name": "Soupe Blanche",
        "price": 20,
        "description": ""
      },
      {
        "id": "p3-2",
        "name": "Soupe Végétarienne",
        "price": 20,
        "description": ""
      },
      {
        "id": "p3-3",
        "name": "Crème de Légumes",
        "price": 20,
        "description": ""
      }
    ]
  },
  {
    "id": "category-4",
    "name": "Plats Principaux",
    "title": "NOS PLATS PRINCIPAUX & SPÉCIALITÉS",
    "arabic": "الأطباق الرئيسية",
    "icon": "dish",
    "image": "assets/categories/4.webp",
    "items": [
      {
        "id": "p4-0",
        "name": "Poulet Farci (1/4)",
        "price": 40,
        "description": ""
      },
      {
        "id": "p4-1",
        "name": "Escalope de Poulet",
        "price": 55,
        "description": ""
      },
      {
        "id": "p4-2",
        "name": "Émincé de Poulet",
        "price": 55,
        "description": ""
      },
      {
        "id": "p4-3",
        "name": "Émincé de Bœuf",
        "price": 70,
        "description": ""
      },
      {
        "id": "p4-4",
        "name": "Pastilla au Poulet",
        "price": 60,
        "description": ""
      },
      {
        "id": "p4-5",
        "name": "Pastilla Fruit de Mer",
        "price": 80,
        "description": ""
      },
      {
        "id": "p4-6",
        "name": "Coquelet Farci",
        "price": 70,
        "description": ""
      },
      {
        "id": "p4-7",
        "name": "Rfissa",
        "price": 70,
        "description": ""
      },
      {
        "id": "p4-8",
        "name": "Seffa Medfouna",
        "price": 70,
        "description": ""
      },
      {
        "id": "p4-9",
        "name": "Couscous de Légumes",
        "price": 40,
        "description": ""
      },
      {
        "id": "p4-10",
        "name": "Couscous de Poulet",
        "price": 45,
        "description": ""
      },
      {
        "id": "p4-11",
        "name": "Couscous de Bœuf",
        "price": 60,
        "description": ""
      },
      {
        "id": "p4-12",
        "name": "Couscous Royal",
        "price": 65,
        "description": ""
      }
    ]
  },
  {
    "id": "category-5",
    "name": "Tajines",
    "title": "NOS TAJINES TRADITIONNELS",
    "arabic": "الطواجن المغربية",
    "icon": "tagine",
    "image": "assets/categories/5.webp",
    "items": [
      {
        "id": "p5-0",
        "name": "Tajine Viande Hachée",
        "price": 40,
        "description": ""
      },
      {
        "id": "p5-1",
        "name": "Tajine de Bœuf",
        "price": 60,
        "description": ""
      },
      {
        "id": "p5-2",
        "name": "Tajine Poulet Citron",
        "price": 55,
        "description": ""
      },
      {
        "id": "p5-3",
        "name": "Tajine Poulet Oignons & Raisins",
        "price": 55,
        "description": ""
      }
    ]
  },
  {
    "id": "category-6",
    "name": "Michoui",
    "title": "MICHOUI SUR COMMANDE",
    "arabic": "المشوي بالطلب",
    "icon": "meat",
    "image": "assets/categories/6.webp",
    "items": [
      {
        "id": "p6-0",
        "name": "Michoui (1 Kg)",
        "price": 300,
        "description": ""
      },
      {
        "id": "p6-1",
        "name": "Michoui (1/2 Kg)",
        "price": 150,
        "description": ""
      },
      {
        "id": "p6-2",
        "name": "Michoui (1/4 Kg)",
        "price": 70,
        "description": ""
      }
    ]
  },
  {
    "id": "category-7",
    "name": "Grillades",
    "title": "GRILLADES",
    "arabic": "المشاوي",
    "icon": "grill",
    "image": "assets/categories/7.webp",
    "items": [
      {
        "id": "p7-0",
        "name": "Brochettes de Kefta",
        "price": 65,
        "description": ""
      },
      {
        "id": "p7-1",
        "name": "Brochette de Dinde",
        "price": 50,
        "description": ""
      },
      {
        "id": "p7-2",
        "name": "Brochette Mixte",
        "price": 75,
        "description": ""
      },
      {
        "id": "p7-3",
        "name": "Grillade Demi Poulet",
        "price": 65,
        "description": ""
      }
    ]
  },
  {
    "id": "category-8",
    "name": "Sandwichs",
    "title": "NOS SANDWICHS",
    "arabic": "السندوتشات",
    "icon": "sandwich",
    "image": "assets/categories/8.webp",
    "items": [
      {
        "id": "p8-0",
        "name": "Sandwich Escalope",
        "price": 30,
        "description": ""
      },
      {
        "id": "p8-1",
        "name": "Sandwich Poulet",
        "price": 30,
        "description": ""
      },
      {
        "id": "p8-2",
        "name": "Sandwich Viande Hachée",
        "price": 30,
        "description": ""
      },
      {
        "id": "p8-3",
        "name": "Sandwich Saucisse",
        "price": 35,
        "description": ""
      },
      {
        "id": "p8-4",
        "name": "Sandwich Mixte",
        "price": 35,
        "description": ""
      },
      {
        "id": "p8-5",
        "name": "Sandwich Thon",
        "price": 15,
        "description": ""
      },
      {
        "id": "p8-6",
        "name": "Sandwich Fruit de Mer",
        "price": 35,
        "description": ""
      }
    ]
  },
  {
    "id": "category-9",
    "name": "Tacos / Wraps",
    "title": "TACOS / WRAPS",
    "arabic": "طاكوس / وراب",
    "icon": "wrap",
    "image": "assets/categories/9.webp",
    "items": [
      {
        "id": "p9-0",
        "name": "Tacos Thon",
        "price": 30,
        "description": ""
      },
      {
        "id": "p9-1",
        "name": "Tacos Poulet",
        "price": 35,
        "description": ""
      },
      {
        "id": "p9-2",
        "name": "Tacos Viande Hachée",
        "price": 40,
        "description": ""
      },
      {
        "id": "p9-3",
        "name": "Tacos Fruit de Mer",
        "price": 45,
        "description": ""
      },
      {
        "id": "p9-4",
        "name": "Tacos Mixte",
        "price": 40,
        "description": ""
      },
      {
        "id": "p9-5",
        "name": "Tacos Escalope",
        "price": 40,
        "description": ""
      }
    ]
  },
  {
    "id": "category-10",
    "name": "Desserts",
    "title": "DESSERTS",
    "arabic": "الحلويات",
    "icon": "dessert",
    "image": "assets/categories/10.webp",
    "items": [
      {
        "id": "p10-0",
        "name": "Tarte aux Pommes",
        "price": 40,
        "description": ""
      },
      {
        "id": "p10-1",
        "name": "Clafoutis",
        "price": 35,
        "description": ""
      },
      {
        "id": "p10-2",
        "name": "Salade de Fruits",
        "price": 20,
        "description": ""
      },
      {
        "id": "p10-3",
        "name": "Crème Brûlée",
        "price": 40,
        "description": ""
      },
      {
        "id": "p10-4",
        "name": "Crème Caramel",
        "price": 15,
        "description": ""
      },
      {
        "id": "p10-5",
        "name": "Mousse au Chocolat",
        "price": 30,
        "description": ""
      },
      {
        "id": "p10-6",
        "name": "Glaces Sorbet",
        "price": 20,
        "description": ""
      },
      {
        "id": "p10-7",
        "name": "Gâteaux Marocains",
        "price": 30,
        "description": ""
      },
      {
        "id": "p10-8",
        "name": "Pastilla Y'Akout",
        "price": 35,
        "description": ""
      }
    ]
  },
  {
    "id": "category-11",
    "name": "Boissons",
    "title": "BOISSONS",
    "arabic": "المشروبات",
    "icon": "drink",
    "image": "assets/categories/11.webp",
    "items": [
      {
        "id": "p11-0",
        "name": "Lait",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-1",
        "name": "Café",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-2",
        "name": "Café Crème",
        "price": 15,
        "description": ""
      },
      {
        "id": "p11-3",
        "name": "Chocolat Chaud",
        "price": 15,
        "description": ""
      },
      {
        "id": "p11-4",
        "name": "Thé Marocain",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-5",
        "name": "Soda",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-6",
        "name": "Eau Minérale 1L",
        "price": 12,
        "description": ""
      },
      {
        "id": "p11-7",
        "name": "Eau Minérale 1/2L",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-8",
        "name": "Oulmès 1/2L",
        "price": 10,
        "description": ""
      },
      {
        "id": "p11-9",
        "name": "Oulmès 1L",
        "price": 12,
        "description": ""
      }
    ]
  }
];
