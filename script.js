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