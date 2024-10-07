// console.log('how are you')
const allImagesContainer = document.getElementById("all-img");
const categoryLoader = document.getElementById("loader_for_category_image");

const loadCategories = () => {
  document.getElementById("loader").style.display = "none";
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadImg = async (category) => {
  allImagesContainer.style.display = "none";
  categoryLoader.style.display = "block";

  setTimeout(async () => {
    try {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${category}`
      );
      const data = await response.json();
      displayCategoriesImg(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      allImagesContainer.style.display = "grid";
      categoryLoader.style.display = "none";
    }
  }, 2000);
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");

 
  categoryContainer.innerHTML = "";

  categories.forEach((item) => {
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

const short_item = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data?.pets?.sort((a, b) =>b.price  - a.price );
        displayCategoriesImg(sortedData);
      })
      .catch((error) => console.log(error));
  };
  


const loadCategoriesImg = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayCategoriesImg(data.pets))
    .catch((error) => console.log(error));
};

const showDetails = async (id) => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pet/${id}`
    );
    const data = await response.json();

    if (data.petData) {
      const petDetails = data.petData;

     
      document.getElementById("modal").innerHTML = `
          <div>
          <img class="w-full h-[200px] rounded-xl " src="${
              petDetails.image
            }" alt="${petDetails.pet_name}">
            <h3 class="font-bold text-xl mb-2">Pet Name: ${
              petDetails.pet_name ?? "Not available"
            }</h3>
            <p>Breed: ${petDetails.breed ?? "Not available"}</p>
            <p>Birth: ${petDetails.date_of_birth ?? "Not available"}</p>
            <p>Gender: ${petDetails.gender ?? "Not available"}</p>
            <p>Price: ${petDetails.price ?? "Not available"}$</p>
            
          </div>
        `;

      // Show the modal
      document.getElementById("my_modal_4").showModal();
    } else {
      console.log("No pet details available");
    }
  } catch (error) {
    console.error("Error fetching pet details: ", error);
  }
};

let likedPets = [];

const likePet = (image) => {
  likedPets.push(image); 
  displayLikedPets();
};

const displayLikedPets = () => {
  const likeContainer = document.getElementById("likeContainer"); 
  likeContainer.innerHTML = "";

  likedPets.forEach((image) => {
    const imgElement = document.createElement("div");
    imgElement.innerHTML = `
        <img class="w-full h-[120px] object-cover rounded-lg" src="${image}" alt="Liked Pet">
      `;
    likeContainer.appendChild(imgElement);
  });
};

const adoptPet = () => {

  const adoptModal = document.getElementById("adopt_modal");
  const countdownElement = document.getElementById("countdown");
  let countdownValue = 3; 

  adoptModal.showModal(); 
  
  countdownElement.textContent = countdownValue;

  const countdownInterval = setInterval(() => {
    countdownValue--; 
    countdownElement.textContent = countdownValue;

    if (countdownValue === 0) {
      clearInterval(countdownInterval); 
      adoptModal.close(); 
    }
  }, 1000); 
};

const displayCategoriesImg = (img) => {
  allImagesContainer.innerHTML = "";

  if (img.length == 0) {
    allImagesContainer.innerHTML = `
      <div class="min-h-[500px] w-full flex justify-center items-center m-auto flex flex-col text-center lg:mx-52">
        <img class="w-11/12 mx-auto text-center" src="./images/error.webp" alt="">
        <p class="w-full font-bold text-2xl">Not Information Available</p>
        <p class="text-gray-500">The requested content or information related to specific topic is currently unavailable. Please try again later or contact support if the issue persists.</p>
      </div>`;
    return;
  }

  img.forEach((imag) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="flex border rounded-lg justify-center">
        <div class="max-w-sm overflow-hidden shadow-lg">
          <img class="w-[500px] h-[250px] py-2 rounded-xl" src=${
            imag.image
          } alt="${imag.pet_name ?? "Not available"}">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${
              imag.pet_name ?? "Not available"
            }</div>
            <p class="text-gray-700 text-base flex gap-2">
              <img src="./images/name.png" alt="">Breed: ${
                imag.breed ?? "Not available"
              }
            </p>
            <p class="text-gray-700 text-base flex gap-2">
              <img src="./images/date.png" alt="">Birth: ${
                imag.date_of_birth ?? "Not available"
              }
            </p>
            <p class="text-gray-700 text-base flex gap-2">
              <img src="./images/gender.png" alt="">Gender: ${
                imag.gender ?? "Not available"
              }
            </p>
            <p class="text-gray-700 text-base flex gap-2">
              <img src="./images/dollar.png" alt="">Price: ${
                imag.price ?? "Not available"
              }$
            </p>
          </div>
          <div class=" py-4 items-center justify-center flex">
            <button class=" border rounded-lg p-3 py-3 text-lg font-semibold text-[#0E7A81] mr-2" onclick="likePet('${ imag.image }')">
             
           
              <img class="w-[20px] h-[19px] " src="./images/thumb-up.png" alt="">
            </button>
             <button class="border rounded-lg px-3 py-1 text-lg font-semibold text-[#0E7A81] mr-2" onclick="adoptPet()">Adopt</button>
            <button onclick="showDetails(${ imag.petId})"
            
              class="border rounded-lg px-3 py-1 text-lg font-semibold text-[#0E7A81]">Details</button>
          </div>
        </div>
      </div>
    `;
    allImagesContainer.append(card);
  });
};

const buttonLoader = () => {
  document.getElementById("loader").style.display = "block";
  setTimeout(() => {
    loadCategories();
  }, 2000);
};

loadCategoriesImg();
buttonLoader();
