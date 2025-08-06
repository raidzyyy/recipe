// script.js

// Pastikan skrip berjalan setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Data resep
    const recipes = [
        {
            food: 'salad',
            rarity: 'prismatic',
            ingredients: ['bone blossom 4x', 'tomato'],
            imageUrl: 'SaladIcon.png'
        },
        {
            food: 'ice cream',
            rarity: 'prismatic',
            ingredients: ['bone blossom 3x', 'Sugar Apple', 'Banana'],
            imageUrl: 'IceCreamIcon.png'
        },
        {
            food: 'pizza',
            rarity: 'prismatic',
            ingredients: ['bone blossom 3x', 'banana', 'beanstalk'],
            imageUrl: 'PizzaIcon.png'
        },
        {
            food: 'pie',
            rarity: 'prismatic',
            ingredients: ['bone blossom 2x', '1 coconut'],
            imageUrl: 'PieIcon.png'
        },
        {
            food: 'burger',
            rarity: 'prismatic',
            ingredients: ['bone blossom 3x', 'tomato', 'corn'],
            imageUrl: 'BurgerIcon.png'
        },
        {
            food: 'wafle',
            rarity: 'prismatic',
            ingredients: ['sugar apple', 'coconut', 'bone blossom 3x', 'pepper'],
            imageUrl: 'WaffleIcon.png'
        },
        {
            food: 'sushi',
            rarity: 'divine',
            ingredients: ['bamboo', 'corn', 'bone blossom 3x'],
            imageUrl: 'SushiIcon.png'
        },
        {
            food: 'hotdog',
            rarity: 'prismatic',
            ingredients: ['bone blossom 4x', 'corn'],
            imageUrl: 'HotDogIcon.png'
        },
        {
            food: 'cake',
            rarity: 'prismatic',
            ingredients: ['banana', 'bone blossom 4x'],
            imageUrl: 'CakeIcon.png'
        },
        {
            food: 'sandwich',
            rarity: 'prismatic',
            ingredients: ['Grand Tomato', 'Sugar glaze', 'bone blossom 3x'],
            imageUrl: 'SandwichIcon.png'
        },
        {
            food: 'donut',
            rarity: 'prismatic',
            ingredients: ['sugar glaze', 'bone blossom 4x'],
            imageUrl: 'DonutIcon.png'
        }
    ];

    // Objek untuk menyimpan URL gambar bahan makanan
    const ingredientImages = {
        'banana': 'BananaPic.png',
        'bone blossom': 'BoneBlossomCrop.png',
        'sugar apple': 'SugarAppleIcon.png',
        'beanstalk': 'BeanstalkIcon.png',
        'corn': 'CornCropsPic.png',
        'tomato': 'Tomato.png',
        'pepper': 'PepperCropsPic.png',
        'coconut': 'Coconutfruiticon.png',
        'bamboo': 'Bamboofruiticon.png',
        'pumpkin': 'Pumpkin_produce.png',
        'grand tomato': 'GrandTomatoProduce.png',
        'sugar glaze': 'SugarglazeProduce.png'
    };

    const recipeContainer = document.getElementById('recipe-container');

    // Helper function to capitalize the first letter of a string
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function createRecipeCard(recipe) {
        let rarityBadgeClass = '';
        let rarityIcon = '';
        if (recipe.rarity === 'divine') {
            rarityBadgeClass = 'rarity-badge-divine';
            rarityIcon = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1 text-white">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.074 4.153a.625.625 0 01.372.315l4.314.639c1.167.173 1.637 1.543.746 2.378l-3.148 3.064a.625.625 0 01-.182.502l.85 4.31a.625.625 0 01-.902.661l-3.808-2a.625.625 0 01-.61 0l-3.808 2a.625.625 0 01-.902-.661l.85-4.31a.625.625 0 01-.182-.502l-3.148-3.064c-.89-.835-.42-2.205.746-2.378l4.314-.639a.625.625 0 01.372-.315l2.074-4.153z" clip-rule="evenodd" />
                </svg>
            `;
        } else {
            rarityBadgeClass = 'rarity-badge-prismatic';
            rarityIcon = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1 text-white">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.993 3.957-4.031 4.58-5.927.379-1.133.11-2.57-.445-3.535A4.483 4.483 0 0020 8.046V7.406a4.483 4.483 0 00-2.433-3.984L12.863.99a3.868 3.868 0 00-1.726 0L4.433 3.422A4.483 4.483 0 002 7.406v.64a4.483 4.483 0 00-.445 2.57c.623 1.896 2.636 3.934 4.58 5.927a19.58 19.58 0 002.684 2.282 16.975 16.975 0 001.143.742z" clip-rule="evenodd" />
                </svg>
            `;
        }

        const card = document.createElement('div');
        card.className = 'recipe-card bg-white rounded-2xl transition-all duration-300 overflow-hidden shadow-xl';

        card.innerHTML = `
            <div class="relative">
                <img src="${recipe.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/84cc16/FFFFFF?text=${capitalize(recipe.food)}'" alt="${recipe.food}" class="card-image rounded-t-2xl">
                <div class="absolute top-4 right-4 text-white text-sm font-bold rounded-full py-1 px-3 flex items-center shadow-lg ${rarityBadgeClass}">
                    ${rarityIcon} ${recipe.rarity.toUpperCase()}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-3xl font-extrabold text-lime-800 capitalize mb-2">${capitalize(recipe.food)}</h3>
                <h4 class="text-base font-semibold text-lime-700 mb-4">buah yang di butuhkan:</h4>
                <ul class="list-none text-gray-700 space-y-2">
                    ${recipe.ingredients.map(ingredient => {
                        let quantity = '1x';
                        let ingredientName = ingredient.trim();
                        let cleanIngredientName = '';

                        let match = ingredientName.match(/^(.*?)\s*(\d+)x?$/i);
                        if (match) {
                            ingredientName = match[1].trim();
                            quantity = `${match[2]}x`;
                        } else {
                            match = ingredientName.match(/^(\d+)\s*x?\s*(.+)/i);
                            if (match) {
                                quantity = `${match[1]}x`;
                                ingredientName = match[2].trim();
                            }
                        }
                        
                        cleanIngredientName = ingredientName.replace('giant pinecone', 'giant pinecone').replace('bone blossom', 'bone blossom').toLowerCase();
                        const ingredientImageUrl = ingredientImages[cleanIngredientName] || `https://placehold.co/40x40/dcfce7/000000?text=${cleanIngredientName.replace(/\s/g, '+')}`;
                        
                        return `
                            <li class="flex items-center text-sm p-2 rounded-lg ingredient-item">
                                <img src="${ingredientImageUrl}" alt="${ingredientName}" class="w-7 h-7 mr-3 rounded-md object-cover border border-lime-300">
                                <span class="font-medium text-gray-800">${quantity} ${ingredientName}</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        `;

        recipeContainer.appendChild(card);
    }

    recipes.forEach(recipe => createRecipeCard(recipe));

});
