const btnTous = document.createElement("button");
btnTous.innerText = "tous";
const btnObjects = document.createElement("button");
btnObjects.innerText = "objects";
const btnAppart= document.createElement("button");
btnAppart.innerText = "Appartements";
const btnHotelRestau= document.createElement("button");
btnHotelRestau.innerText = "Hotels  et restaurants";

const sectionBtn = document.querySelector(".bouton");
sectionBtn.appendChild(btnTous);
sectionBtn.appendChild(btnObjects);
sectionBtn.appendChild(btnAppart);
sectionBtn.appendChild(btnHotelRestau);


const gallery = document.querySelector(".gallery");



//async function affichagePage(){
//const reponse = await fetch('http://localhost:5678/api/works');
  //  contenu = await reponse.json();
    //console.log(contenu);
   // genererContennu();
 // }

  fetch('http://localhost:5678/api/works')
  .then(response => {
    if (response=== 500) {
      throw new Error('unexpected error');
    }
    return response.json();
  })
  .then(data => {
    // Traite les données de réponse ici
    contenu = data;
    console.log(data);
    genererContenu(contenu);
    return contenu;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

  function genererContenu(contenu){
    for (let i = 0 ; i < contenu.length; i++){
          const article = contenu[i];
      
          const sectionGalerie = document.querySelector(".gallery");
          // Création d’une balise dédiée à une pièce automobile
          const elementGalerie = document.createElement("figure");
          // Création des balises 
          const imageElement = document.createElement("img");
          imageElement.src = article.imageUrl;
          const titreElement = document.createElement("figcaption");
          titreElement.innerText = article.title;
          
          // On rattache la balise article a la section Fiches
          sectionGalerie.appendChild(elementGalerie);
          // On rattache l’image à pieceElement (la balise article)
          elementGalerie.appendChild(imageElement);
          elementGalerie.appendChild(titreElement);
  
    }
  }
  


  btnTous.addEventListener("click", function () {
    gallery.innerHTML = '';
    genererContenu(contenu);
   
  })
  
  btnObjects.addEventListener("click", function() {
    const categorie= 1;
    trierElement(categorie, contenu);
  })
  btnHotelRestau.addEventListener("click", function() {
    const categorie= 3;
    trierElement(categorie, contenu);
  })
  btnAppart.addEventListener("click", function() {
    const categorie= 2;
    trierElement(categorie, contenu);
  })

  function trierElement(categorie, contenu) {
    gallery.innerHTML = '';
    contenuFiltre = contenu.filter(element => element.categoryId === categorie);
    console.log(categorie);
    console.log(contenuFiltre);
    console.log("hello");
      genererContenu(contenuFiltre);
  }


  const btnLogin = document.getElementById("login")
btnLogin.addEventListener("click", function(){
      const pageConnexion= document.querySelector('main');
      pageConnexion.innerHTML= '';
      const htmlConnexion= '<div id="main-login"><h2>Log in</h2><form id="form-login"><div class="inputContainer"><label for="email">Email</label><input id="email" type="text"></div><div class="inputContainer"><label for="motDePasse">Mot de passe</label><input id="motDePasse" type="text"></div><button type="submit" id="btnForm">Se connecter</button></form><a href="#">Mot de passe oublié</a></div>';
      pageConnexion.innerHTML= htmlConnexion;
      
      const footer = document.querySelector("footer");
      if (footer){
        footer.style.position = "absolute";
        footer.style.top = "964px";
        footer.style.width = "1140px";
      }
      
      const mainLogin = document.getElementById("main-login");
      if (mainLogin){
        mainLogin.style.display = "flex";
        mainLogin.style.flexDirection = "column";
        mainLogin.style.alignItems = "center";
        mainLogin.style.position = "absolute";
        mainLogin.style.top = "242px";
        mainLogin.style.justifyContent = "center";
        mainLogin.style.width = "1140px";
      };

      const formLogin =document.getElementById("form-login");
      if (formLogin) {
        formLogin.style.display = "flex";
        formLogin.style.flexDirection = "column";
        formLogin.style.alignItems = "center";
        formLogin.style.marginTop = "37px";
      }

      const inputContainers= document.querySelectorAll(".inputContainer");
      if (inputContainers) {for (let i = 0; i < inputContainers.length; i++){
        const inputContainer = inputContainers[i];
        inputContainer.style.display = "flex";
        inputContainer.style.flexDirection = "column";
        inputContainer.style.textAlign = "left";
      }
      }

      const inputEmail = document.getElementById("email");
      if (inputEmail){
        inputEmail.style.width = "379px";
        inputEmail.style.boxSizing = "border-box";
        inputEmail.style.marginTop = "6px";
        inputEmail.style.marginBottom = "30px";
      }
      
      const inputMotDePasse = document.getElementById("motDePasse");
      if (inputMotDePasse){
        inputMotDePasse.style.width = "379px";
        inputMotDePasse.style.boxSizing = "border-box";
        inputMotDePasse.style.marginTop = "6px";
      }

      const btnForm = document.getElementById("btnForm");
      if (btnForm){
        btnForm.style.width = "179px";
        btnForm.style.marginTop = "37px";
        btnForm.style.height = "36px"
        btnForm.style.borderRadius = "60px";
        btnForm.style.backgroundColor = "#1D6154";
        btnForm.style.border = "none";
      }

      btnForm.addEventListener("click", function (event){
        event.preventDefault();
        console.log("hello");
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;
        console.log("La valeur de l'adresse e-mail est : " + emailValue);

        const MdPInput= document.getElementById("motDePasse");

        // Pour récupérer la valeur de l'input text
        const mdpValue = MdPInput.value;
        // Utilisez ensuite la variable emailValue comme bon vous semble
        console.log("La valeur du mot de passe est : " + mdpValue);

        if (emailValue !== null && mdpValue !== null){
                        // URL de destination
              const url = 'http://localhost:5678/api/users/login';

              // Données à envoyer dans le corps de la requête (sous forme de chaîne JSON)
              const data = {
                email: emailValue,
                password: mdpValue
              };

              // Configuration de la requête
              const requestOptions = {
                method: 'POST', // Méthode POST
                headers: {
                  'Content-Type': 'application/json' // Type de contenu : JSON
                },
                body: JSON.stringify(data) // Corps de la requête : données converties en JSON
              };

              // Envoi de la requête
              fetch(url, requestOptions)
                .then(response => {
                  // Gestion de la réponse HTTP
                  if (!response.ok) {
                    throw new Error('Erreur HTTP : ' + response.status);
                  }
                  // Récupérer et renvoyer les données JSON de la réponse
                  return response.json();
                })
                .then(data => {
                  const ident= data;
                  const token = ident.token;
                  console.log("le token est : " + token);
                  sessionStorage.setItem('token', token);
                  const tokenFromSessionStorage = sessionStorage.getItem('token');
                  console.log("La valeur de 'token' dans sessionStorage est : " + tokenFromSessionStorage);
                  // Utilisation des données de réponse
                  window.location.reload();
                })
                .catch(error => {
                  
                  // Gestion des erreurs
                  console.error('Erreur lors de la requête :', error);
                });
        }
      })
})

