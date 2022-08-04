//Hmaburger menu---------------------------------------------------------------

const menu = document.querySelector(".smartphone-menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
// Comprueba si la clase indicada ("show-menu") existe en el atributo de clase del elemento.
  if (menu.classList.contains("show-smartphone-menu")) 
    {
        menu.classList.remove("show-smartphone-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } 
  else 
    {
        menu.classList.add("show-smartphone-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

  //---------------------------------------------------------------------------

// Rellenar las fichas de Recent Projects --------------------------


   async function getData() {
    let url = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`]
     try {
         let res = await fetch(url);
         return await res.json();
     } catch (error) {
         console.log(error);
     }
 }
 async function fillCards() {
     let info = await getData();
     let dataCard = "";
     info.forEach((item) => {
         let cardInfo = `<div class="project-target-container">
                          <div class="project-target">
                                <img
                                    src="https://res.cloudinary.com/dflnp8bry/image/upload/v1659600360/IronLab1/Fondos/Colorful%20shape%20${item.id}.jpg"
                                    alt="imagen"
                                    class="project-img"
                                />
                              <div class="single-target">
                                  <h5  class="title-target">${item.title} ${item.title}</h5>
                                  <p class="body-target">${item.body}</p>
                                  <a href="projects.html" class="link">Learn more</a>
                              </div>
                              </div>
                         </div>`;
         return dataCard += cardInfo;
     })
     let container = document.querySelector(".project-target-container");
     container.innerHTML = dataCard;
 }

 fillCards()


