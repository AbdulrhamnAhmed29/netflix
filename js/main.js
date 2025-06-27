
let apikey = "http://www.omdbapi.com/?i=tt3896198&apikey=b231e9b";
let fetchapi = "https://www.omdbapi.com/?s=Avengers&apikey=b231e9b";
let poster = document.getElementById("poster");
let parent = document.getElementById("parent");
let parent1 = document.getElementById("parent1");
let parent2 = document.getElementById("parent2");








// api 



// show api 



let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 2000,     
    disableOnInteraction: false // 
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function filmsApi() {
  fetch(fetchapi).then(res => res.json()).then(data => {

    if (data.Response === "True") {
      for (let i = 0; i < data.Search.length; i++) {

        parent.innerHTML += ` <div class="swiper-slide border div-image api-image shadow-cards">
              <div class=" p-2"  >
                <div class="card bg-black text-center  border scale-card   api-image" >
                  <img src="${data.Search[i].Poster}" class="api-image " width="100%"  id="poster">
                </div>
              </div>
            </div>
            
`
        parent1.innerHTML += ` <div class="swiper-slide border  api-image shadow-cards">
              <div class="p-2 " >
                <div class="card bg-black text-center scale-card border  api-image" >
                  <img src="${data.Search[i].Poster}" width="100%" class="api-image "  id="poster">
                </div>
              </div>
            </div>`
        parent2.innerHTML += ` <div class="swiper-slide border api-image shadow-cards">
              <div class="p-2 " >
                <div class="card bg-black text-center   border scale-card   api-image" >
                  <img src="${data.Search[i].Poster}" width="100%" class="api-image " id="poster">
                </div>
              </div>
            </div>`



      }
    } else {
      console.log("No movies found.");
    }



  })
}
filmsApi()





// valid-form
