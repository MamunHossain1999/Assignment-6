// console.log('how are you')

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
    
};

const offSpineer = () => {
    document.getElementById('spinner').style.display ="none";
}
const showSpinner = () => {
    document.getElementById('spinner').style.display ="block";
      setTimeout(function () {
        offSpineer()
    }, 2000)
};

const loadImg = (category) => {
   console.log(category);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayCategoriesImg(data.data))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category");
    
    // Clear the container first if needed (optional, if you call this multiple times)
    categoryContainer.innerHTML = '';

    categories.forEach((item) => {
        console.log(item);
        const button = document.createElement("div");
        
        button.innerHTML = `
           <button onclick="loadImg('${item.category}')" class="w-[300px] flex gap-2 items-center justify-center border border-lime-400 rounded-lg py-5 px-12"> 
            <img class="w-[25px] items-center" src="${item.category_icon}" alt="${item.category}">
            <p class="text-2xl items-center font-extrabold">${item.category}</p>
           </button>
        `;
    
        categoryContainer.append(button);
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
    imgContainer.innerHTML= "";

    if(img.length == 0){
        imgContainer.innerHTML= `
            <div class="min-h-[500px] w-full m-auto flex flex-col text-center justify-center items-center">
                 <img class="w-11/12 mx-auto text-center" src="./images/error.webp" alt="">
                 <p class="w-full font-bold text-2xl">Not Information Available</p>
                 <p class="text-gray-500">The requested content or information related to specific topic is currently un available. Please try again later or contact supoort if the issue persists.</p>
            </div>
        `;
        return;
    }

    img.forEach((imag) => {
        // console.log(imag);

    
         const card = document.createElement('div');
         card.innerHTML = `

         
        
            <div class="flex  border rounded-lg justify-center">
             <div class="max-w-sm  overflow-hidden shadow-lg ">
                 <img class=" w-[500px] h-[250px]  py-2 rounded-xl" src=${imag.image} alt="Sunset in the mountains">
                 <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2">${imag.pet_name}</div>
                     <p class="text-gray-700 text-base flex gap-2">
                        <img src="./images/name.png" alt="">Breed: ${imag.breed}
                     </p>
                    
                     <p class="text-gray-700 text-base flex gap-2">
                       <img src="./images/date.png" alt="">Birth: ${imag.date_of_birth}
                     </p>
                
                     <p class="text-gray-700 text-base flex gap-2">
                       <img src="./images/gender.png" alt="">Gender: ${imag.gender}
                     </p>
                     <p class="text-gray-700 text-base flex gap-2"><img src="./images/dollar.png" alt="">
                        Price: ${imag.price}$
                     </p>
                 </div>
                 <div class="px-6 py-4 items-center flex">
                     <button class="border  rounded-lg px-4 py-2 text-lg font-semibold text-[#0E7A81] mr-2"><img class="w-[20px] h-[20px]" src="./images/thumb-up.png" alt=""></button>
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