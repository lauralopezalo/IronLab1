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

// Rellenar las fichas de Recent Projects --------------------------------

async function getData() {
  let url = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`]
  try 
  {
    let res = await fetch(url);
    return await res.json();
  } 
  catch (error) 
  {
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
                              alt="imagen de proyecto"
                              class="project-img"
                          />
                        <div class="single-target">
                            <h5>${item.title}</h5>
                            <p>${item.body}</p>
                            <a href="projects.html">Learn more</a>
                        </div>
                      </div>
                    </div>`;
      return dataCard += cardInfo;
    })
  let container = document.querySelector(".project-target-container");
  container.innerHTML = dataCard;
}

fillCards()

//---------------------------------------------------------------------------


// Rellenar el Proyecto --------------------------------

async function articleData() {
  let url1 = [`http://jsonplaceholder.typicode.com/posts/?_limit=1`]
  try 
  {
    let response = await fetch(url1);
    return await response.json();
  } 
  catch (error) 
  {
    console.log(error);
  }
 }


async function fillArticle() {
  let inf = await articleData();
  let article = "";
  inf.forEach((art) => {
    let articleInfo = `<div class="article-page">
                          <div class="title-section">
                            <h1>${art.title}</h1>
                          </div>
                          <div class="subtitle-date-section">
                            <div class="subtitle-section">
                                  <p>${art.title}</p>
                            </div>
                          </div>
                          <div class="front-img">
                            <img src="https://res.cloudinary.com/dflnp8bry/image/upload/v1659600360/IronLab1/Fondos/Colorful%20shape%20${item.id}.jpg" alt="Project image"/>
                          </div>
                          <div class="main-text">
                              <p>${art.body}</p>
                          </div>
                      </div>`;
      return article += articleInfo;
    })
  let articlePosted = document.querySelector(".article-page");
  articlePosted.innerHTML = article;
}

fillArticle()

//---------------------------------------------------------------------------




//Validación y envío de formulario---------------------------------


let url = ("https://jsonplaceholder.typicode.com/comments")
document.querySelector("#formulario").addEventListener("submit", Post);

function Post (data) {
	data.preventDefault();

	let name =  document.getElementById("name").value;
  if(name.length == 0) {
    alert('Escribe tu nombre');
    formulario.name.focus();
    return;
  }
	let mail = document.getElementById("mail").value;
  if (mail.length == 0) {
    alert('Escribe tu email');
    formulario.mail.focus();
    return;
  }
	let phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    alert('Escribe tu teléfono');
    formulario.phone.focus();
    return;
  }
	let message = document.getElementById("message").value;
  if (message.length == 0) {
    alert('Escribe el motivo de tu consulta');
    formulario.message.focus();
    return;
  }

	fetch(url, {
		method: "POST",
		headers: {
			Accept: "text/plain, application/json, */*", 
			"Content-type": "application/json", 
		},
		body: JSON.stringify({name: name, mail: mail, phone: phone, message: message}),
		})
	.then((response) => response.json())
	.then((datos) => console.log(datos))
	.then(() => {
		let message = "";
		message += `
		<div id="mes">
			<h6>El formulario se ha enviado correctamente. ¡Gracias!</h6>
		</div>
		`;
		document.getElementById("mes").innerHTML = message;
		console.log(document.getElementById("mes"));
	})
	.catch(() => {
		let message = "";
		message += `
		<div id="mes">
			<h6>Error al enviar el formulario</h6>
		</div>
		`;
		document.getElementById("mes").innerHTML = message;
	});

	document.getElementById("name").value = "";
	document.getElementById("mail").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("message").value = "";
}