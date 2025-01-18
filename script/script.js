


function getRecipes(){
    // return JSON.parse(localStorage.getItem('recipes'));
    return [
        {
            id: 1,
            title: "Recipe 1",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptatibus tenetur",
            image: "/images/cake1.jpg",
            category: "Dessert",
            temp: "30 min"
        },
        {
            id: 2,
            title: "Recipe 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptatibus tenetur",
            image: "/images/cake1.jpg",
            category: "Main Course",
            temp: "45 min"
        },
        {
            id: 3,
            title: "Recipe 3",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptatibus tenetur",
            image: "/images/cake3.jpg",
            category: "Dessert",
            temp: "15 min"
        },
        {
            id: 4,
            title: "Recipe 4",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptatibus tenetur",
            image: "/images/cake4.jpg",
            category: "Snacks",
            temp: "10 min"
        },
        {
            id: 5,
            title: "Recipe 5",
            description: "Gateau délicieux",
            image: "/images/cake4.jpg",
            category: "Main Course",
            temp: "60 min"
        }
    ] || [];
}

const recipesAll=getRecipes();



function setRecipes(recipes){
     localStorage.setItem('recipes',JSON.stringify(recipes));
}



function displayRecipes() {

    const recipes = recipesAll|| [];
    const container = document.getElementById('recipe-container');
    
    
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('category').value;
    const selectedTemp = document.getElementById('temps').value;

    
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery) || recipe.description.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
        const matchesTemp = selectedTemp === 'all' || recipe.temp === selectedTemp;

        return matchesSearch && matchesCategory && matchesTemp;
    });


    container.innerHTML = '';


    filteredRecipes.forEach(recipe => {
        const recipeHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 border my-2" id="recipe-${recipe.id}">
                <!-- Image Section -->
                <div class="p-0 rounded">
                    <img class="rounded p-0 img-fluid" src="${recipe.image}" height="300" alt="">
                </div>
                <!-- Title and Description -->
                <p class="m-0">${recipe.title}</p>
                <p class="p-0">${recipe.description}</p>
                <!-- Buttons -->
                <div>
                    <button class="px-2 py-2 rounded border-0" style="background-color: #27CD64; color: white;" onclick="updateRecipe(${recipe.id})">Mise a jour</button>
                    <button class="px-2 py-2 rounded border-0" style="background-color: #FD4747; color: white;" onclick="deleteRecipe(${recipe.id})" >Supprimer</button>
                    <button class="px-2 py-2 rounded border-0" style="background-color: #4768FD; color: white;"onclick="showRecipe(${recipe.id})">Plus details..</button>     
                </div>
            </div>
        `;
        container.innerHTML += recipeHTML;
    });

}



document.getElementById('search').addEventListener('input', displayRecipes);
document.getElementById('category').addEventListener('change', displayRecipes);
document.getElementById('temps').addEventListener('change', displayRecipes);


displayRecipes();


function deleteRecipe(id) {
    console.log(id);
    const recipes = recipesAll;
    const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id))
        recipes.splice(recipeIndex, 1);
        displayRecipes();
    }



function createRecipe(){
    location.assign('Ajouter_modifier.html');
}




function updateRecipe(id){
    localStorage.setItem('updateRecipeid',id);
    location.assign('update .html');

}

function showRecipe(id){

    localStorage.setItem('showRecipeid',id);
    location.assign('Detaillee.html');

}



