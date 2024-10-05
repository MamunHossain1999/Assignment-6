// console.log('how are you')

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};


const loadCategoriesImg = () => {
    fetch(" https://openapi.programming-hero.com/api/peddy/category/dog")
    .then((res) => res.json())
    .then((data) => displayCategoriesImg(data.data))
    .catch((error) => console.log(error));
};

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }
const displayCategoriesImg = (img) => {
    const imgContainer = document.getElementById("all-img")
    img.forEach((imag) => {
        console.log(imag);

    
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="flex px-3 py-3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src=${imag.image} alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">${imag.pet_name}</div>
                    <p class="text-gray-700 text-base">
                        ${imag.breed}
                    </p>
                    <p class="text-gray-700 text-base">
                        ${imag.date_of_birth}
                    </p>
                    <p class="text-gray-700 text-base">
                        ${imag.gender}
                    </p>
                    <p class="text-gray-700 text-base">
                        ${imag.price}
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                </div>
            </div>
        </div>
        `;
    
        imgContainer.append(card)
    });

};


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category")
    categories.forEach((item) => {
        console.log(item);


        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
    
        categoryContainer.append(button)
    });

};


loadCategoriesImg()
loadCategories()