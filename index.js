// console.log('how are you')

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category")
    categories.forEach((item) => {
        console.log(item);


        const button = document.createElement('button');
        button.classList = "btn";
        button.innerHTML = `
           <div class="w-[250px] lg:w-[130px] flex gap-2  ">
                 <p class="text-2xl items-center ">${item.category}</p>
            <img class="w-[25px] items-center" src=${item.category_icon}>
           </div>
            
        `
    
        categoryContainer.append(button)
    });

};


const loadCategoriesImg = () => {
    fetch(" https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayCategoriesImg(data.pets))
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
         <div class="flex px-3 py-3  ">
             <div class="max-w-sm rounded overflow-hidden shadow-lg">
                 <img class="w-full w-[400px] h-[400px] rounded-lg" src=${imag.image} alt="Sunset in the mountains">
                 <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2">${imag.pet_name}</div>
                     <p class="text-gray-700 text-base flex gap-2">
                        <img src="./images/name.png" alt=""> ${imag.breed}
                     </p>
                     <p class="text-gray-700 text-base flex gap-2">
                       <img src="./images/date.png" alt="">  ${imag.date_of_birth}
                     </p>
                     <p class="text-gray-700 text-base flex gap-2">
                       <img src="./images/gender.png" alt="">  ${imag.gender}
                     </p>
                     <p class="text-gray-700 text-base flex gap-2"><img src="./images/dollar.png" alt="">
                         ${imag.price}
                     </p>
                 </div>
                 <div class="px-6 py-4 items-center flex">
                     <button class="border rounded-lg px-4 py-2 text-lg font-semibold text-gray-700 mr-2"><img class="w-[20px]" src="./images/thumb-up.png" alt=""></button>
                     <button class="border  rounded-lg px-3 py-1 text-lg font-semibold text-[#0E7A81] mr-2">Adopt</button>
                     <button class="border  rounded-lg px-3 py-1 text-lg font-semibold text-[#0E7A81]">Details</button>
                 </div>
             </div>
         </div>
        `;
    
        imgContainer.append(card)
    });

};




loadCategoriesImg()
loadCategories()