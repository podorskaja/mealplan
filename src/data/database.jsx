const recipes = [
        {
        id: 1,
        name: 'Oatmeal omlette with salmon & avocado',
        nutritional_value: {
            calories: 347,
            fat: '20g',
            carbs: '30g',
            protein: '8g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/v1588161203/omlette_jhq7l0.jpg",
        ingredients: [
            '1kg salmon',
        ],
        instructions: [],
    },
    {
        id: 2,
        name: 'Burgers',
        nutritional_value: {
            calories: 347,
            fat: '20g',
            carbs: '30g',
            protein: '8g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/v1587822473/burgers_ce6jz7.jpg",
        ingredients: [
            '1kg beef',
        ],
        instructions: [],
    },
    {
        id: 3,
        name: 'Chicken bowl',
        nutritional_value: {
            calories: 347,
            fat: '20g',
            carbs: '30g',
            protein: '8g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/w_auto/v1586110754/IMG_0587_copy_wkcbua.jpg",
        ingredients: [
            '1kg chicken',
        ],
        instructions: [],
    },
    {
        id: 4,
        name: 'Baked sweet potato',
        nutritional_value: {
            calories: 347,
            fat: '20g',
            carbs: '30g',
            protein: '8g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/w_auto/v1586002326/batat_lldph5.jpg",
        ingredients: [
            '600g Sweet potato',
            '2 tbs Smoked paprika',
            '2 tbs Olive oil',
        ],
        instructions: [],
    },
    {
        id: 5,
        name: 'Avocado toasts',
        nutritional_value: {
            calories: 347,
            fat: '20g',
            carbs: '30g',
            protein: '8g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/w_auto/v1585121445/avocadotoast_cy1l90.jpg",
        ingredients: [
            '2 Whole toast buns',
            '70g Avocado',
            '60g Smoked salmon',
            '30g Philadeplhia (Cucumber & Feta)'
        ],
        instructions: [],
    },
    {
        id: 6,
        name: 'Potato salad',
        nutritional_value: {
            calories: 286,
            fat: '14g',
            carbs: '39g',
            protein: '4g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/w_auto/v1585073447/salad_toaepd.jpg",
        ingredients: [
            '150g Potatoes',
            '50g Pickled cucumbers',
            '1/4 Red onion',
            '1tbs Olive oil',
            'Green salad',
        ],
        instructions: [],
    },
    {
        id: 7,
        name: 'Scrambled eggs',
        nutritional_value: {
            calories: 333,
            fat: '22g',
            carbs: '2g',
            protein: '28g',
        },

        url: "https://res.cloudinary.com/dvxu60gq8/image/upload/w_auto/v1585075020/F0E6ABEE-DE72-450A-8D02-17F60F26AF07_kmdjmo.jpg",
        ingredients: [
            '3 Eggs',
            '7g Butter',
            '50g Bacon',
            '50g Smoked salmon',
            'Green salad',
        ],
        instructions: [],
    }
]

export function getRecipes() {
    return recipes;
}

export function getRecipeById(id) {
    return recipes.find(r => r.id === parseInt(id));
}
