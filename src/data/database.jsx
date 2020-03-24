const recipes = [
  {
    name: 'potato salad',
    nutritional_value: {
      calories: 333,
      fat: 111,
      carbs: 123,
      protein: 155,
    },

    url: "https://picsum.photos/375/260",
    ingredients: [
      '3 eggs',
      '7g butter',
      '50g bacon',
      '50g smoked salmon',
      'Green salad',
    ],
    instructions: [],
  },
  {
    name: 'scrambled eggs',
    nutritional_value: {
      calories: 4,
      fat: 6,
      carbs: 4,
      protein: 9,
    },

    url: "https://picsum.photos/375/260",
    ingredients: [
      '3 eggs',
      '7g butter',
      '50g bacon',
      '50g smoked salmon',
      'Green salad',
    ],
    instructions: [],
  }
]

export function getRecipes() {
  return recipes;
}

