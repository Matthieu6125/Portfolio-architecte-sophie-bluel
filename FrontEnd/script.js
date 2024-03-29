const presenceToken = sessionStorage.getItem('token');
console.log("le token de session est:" + presenceToken);
if (presenceToken !== null){
  // barre du haut avec la mention mode édition
    const barreEdition = document.createElement("div");
    const textEdition = document.createElement("p");
    textEdition.textContent = "Mode édition";
    const iconElement = document.createElement("i");
    iconElement.style.color = "#fff";
    iconElement.classList.add("far", "fa-pen-to-square");
    barreEdition.appendChild(iconElement);
    barreEdition.appendChild(textEdition);
    // Appliquer les styles à la barre d'édition
    barreEdition.style.display = "flex";
    barreEdition.style.justifyContent = "center";
    barreEdition.style.alignItems = "center";
    barreEdition.style.backgroundColor = "black";
    barreEdition.style.width = "100%";
    barreEdition.style.height = "59px";
    textEdition.style.color = "#fff";
    const headerElement = document.querySelector("header");
    document.body.insertBefore(barreEdition, headerElement);

  // Changement boutton login en logout
    const btnlogout = document.getElementById("login");
    btnlogout.textContent= "logout";
    btnlogout.addEventListener("click", function(){
      console.log("je veux me déconnecter");
      sessionStorage.removeItem('token');
      const presenceToken = sessionStorage.getItem('token');
      console.log("le token de session est:" + presenceToken);
      location.reload();
    })

  // boutoun modifier pour modale
    const btnModifier = document.createElement("button");
    btnModifier.classList.add("btnModifierModale");
    btnModifier.setAttribute("type", "button");
    const iconModifier = document.createElement("i");
    iconModifier.style.color = "black";
    iconModifier.classList.add("far", "fa-pen-to-square");
    btnModifier.textContent = "Modifier";
    const divTitreModifier = document.querySelector('#portfolio h2');
    btnModifier.insertBefore(iconModifier, btnModifier.firstChild);
    divTitreModifier.appendChild(btnModifier);

  // gestion de la modale
    btnModifierModale= document.querySelector(".btnModifierModale");
    btnModifierModale.addEventListener("click", function () {
    console.log(" je veux modifier ma gallerie");
        // Création de la modale

          //Création arrrière plan
            const ArrierePlanModale = document.createElement("aside");
            ArrierePlanModale.style.position= "fixed";
            ArrierePlanModale.style.backgroundColor= "rgba(0, 0, 0, 0.3)";
            ArrierePlanModale.style.width= "100%";
            ArrierePlanModale.style.height= "100%";
            ArrierePlanModale.style.top= "0px";
            ArrierePlanModale.style.left= "0px";
            ArrierePlanModale.style.display = "flex"
            ArrierePlanModale.style.alignItems= "center";
            ArrierePlanModale.style.justifyContent= "center";

          // Création de la modale
            const modale = document.createElement("div");
            modale.style.width = "630px";
            modale.style.height= "688px";
            modale.style.backgroundColor= "#FFFFFF";
            modale.style.display = "flex"
            modale.style.flexDirection= "column";
            modale.style.alignItems= "center";
            modale.style.justifyContent= "space-around";
          
          // Elément de la modale
              // titre modale
            const titreModale = document.createElement("h3");
            titreModale.textContent = "Galerie photo";
              // container modale
            const containerImgModale = document.createElement("div");
            containerImgModale.classList.add("containerImgModale");
            containerImgModale.style.display="grid";
            containerImgModale.style.rowGap = "30px"
            containerImgModale.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
            containerImgModale.style.gridAutoRows = "102px";
            containerImgModale.style.borderBottom = "1px solid black";
            containerImgModale.style.width = "420px";
            containerImgModale.style.height = "430px";
              // bouton d'ajout de projet
            const btnAjoutPhoto = document.createElement("button");
            btnAjoutPhoto.textContent= "Ajouter une photo";
            btnAjoutPhoto.style.width = "237px";
            btnAjoutPhoto.style.height = "36px";
            btnAjoutPhoto.style.backgroundColor= "#1D6154";
            btnAjoutPhoto.style.color= "#FFFFFF";
            btnAjoutPhoto.style.borderRadius= "60px";

          
            const btnFermeture = document.createElement("button");
            const iconFermeture = document.createElement("i");
            iconFermeture.classList.add("fas", "fa-xmark");
            btnFermeture.appendChild(iconFermeture);

              // Contenu de la modale
              fetchData()
              .then(data => {
                // Les données sont disponibles ici en dehors de la fonction fetch
                console.log("Données récupérées :", data);
                // Vous pouvez appeler d'autres fonctions avec les données ici
                // autreFonction(data);
                genererContennuModale(data);

              });    
              modale.appendChild(btnFermeture);    
              ArrierePlanModale.appendChild(modale);
              modale.appendChild(titreModale);
              modale.appendChild(containerImgModale);
              modale.appendChild(btnAjoutPhoto);
              document.body.appendChild(ArrierePlanModale);
              btnFermeture.addEventListener("click", function(){
                const fermeture = document.querySelector("aside");
                fermeture.remove();
              });



              btnAjoutPhoto.addEventListener("click", function(){
                const fermeture = document.querySelector("aside");
                fermeture.remove();
                
          //Création arrrière plan
            const ArrierePlanModaleAjout = document.createElement("aside");
            ArrierePlanModaleAjout.style.position= "fixed";
            ArrierePlanModaleAjout.style.backgroundColor= "rgba(0, 0, 0, 0.3)";
            ArrierePlanModaleAjout.style.width= "100%";
            ArrierePlanModaleAjout.style.height= "100%";
            ArrierePlanModaleAjout.style.top= "0px";
            ArrierePlanModaleAjout.style.left= "0px";
            ArrierePlanModaleAjout.style.display = "flex"
            ArrierePlanModaleAjout.style.alignItems= "center";
            ArrierePlanModaleAjout.style.justifyContent= "center";

          // Création de la modale
            const modaleAjout = document.createElement("div");
            modaleAjout.style.width = "630px";
            modaleAjout.style.height= "688px";
            modaleAjout.style.backgroundColor= "#FFFFFF";
            modaleAjout.style.display = "flex"
            modaleAjout.style.flexDirection= "column";
            modaleAjout.style.alignItems= "center";
            modaleAjout.style.justifyContent= "space-around";
            document.body.appendChild(ArrierePlanModaleAjout);
            ArrierePlanModaleAjout.appendChild(modaleAjout);

            const btnFermetureModaleAjout = document.createElement("button");
            const iconFermetureModaleAjout = document.createElement("i");
            iconFermetureModaleAjout.classList.add("fas", "fa-xmark");
            btnFermetureModaleAjout.appendChild(iconFermetureModaleAjout);
            modaleAjout.appendChild(btnFermetureModaleAjout);
            
            const titreModaleAjout = document.createElement("h3");
            titreModaleAjout.textContent = "Ajout photo";
            modaleAjout.appendChild(titreModaleAjout);

            const inputPhoto = document.createElement("input");
            inputPhoto.getAttribute("type", "file");
            inputPhoto.style.height = "169px";
            inputPhoto.style.width ="420px";

            modaleAjout.appendChild(inputPhoto);
                 
            
            const labelInputTitre = document.createElement("label");
            labelInputTitre.for = "inputTitre";
            labelInputTitre.innerText = "Titre"; 
            modaleAjout.appendChild(labelInputTitre);

            const inputTitre = document.createElement("input");
            inputTitre.getAttribute("type", "text");
            inputTitre.id = "inputTitre";
            modaleAjout.appendChild(inputTitre);


            
            const labelInputCategorie = document.createElement("label");
            labelInputCategorie.for = "inputCategorie";
            labelInputCategorie.innerText = "Catégorie"; 
            modaleAjout.appendChild(labelInputCategorie); 

            const inputCategorie = document.createElement("input");
            inputCategorie.getAttribute("type", "number");
            inputCategorie.for = "inputCategorie";
            modaleAjout.appendChild(inputCategorie);



            btnFermetureModaleAjout.addEventListener("click", function(){
              const fermeture = document.querySelector("aside");
                fermeture.remove();
            })


              })
})
}

function genererContennuModale(data){
  console.log("les data de ma modale sont:" + data);
    for (let i = 0 ; i < data.length; i++){
          const article = data[i];
      
          const sectionContenuModale = document.querySelector(".containerImgModale");
                    // Création du conteneur pour l'image et le bouton
          const container = document.createElement("div");
          container.classList.add("imageContainer");
          

          // Création de l'élément image
          const imageElement = document.createElement("img");
          imageElement.src = article.imageUrl;
          imageElement.style.height ="100%";
          imageElement.classList.add("imageClass");

          // Création du bouton
          const btnIconPoubelle = document.createElement("button");
          btnIconPoubelle.classList.add("iconButton");
          btnIconPoubelle.getAttribute("dataImageId");
          btnIconPoubelle.dataImageId = article.id;

          const iconPoubelle = document.createElement("i");
          iconPoubelle.classList.add("fas", "fa-trash-can");

          btnIconPoubelle.style.position = "relative";
          btnIconPoubelle.style.top = "-95px";
          btnIconPoubelle.style.left = "45px";
          btnIconPoubelle.appendChild(iconPoubelle);

          // Ajout de l'image et du bouton au conteneur
          container.appendChild(imageElement);
          container.appendChild(btnIconPoubelle);
          // Ajout du conteneur au sectionContenuModale
          sectionContenuModale.appendChild(container);  
          
          btnIconPoubelle.addEventListener("click", function (){
            console.log("l'id du bouton clicker est : " + btnIconPoubelle.dataImageId);
                // suppresion de l'élément sur la page 
                // Fonction pour supprimer un élément par son ID et regenerer les élements sans rechargement
                supprimerElementParId(btnIconPoubelle);

                // Suppresion de l'élément dans l'api
            const id = this.dataImageId;
            const url = `http://localhost:5678/api/works/${id}`;
            console.log(url);
            const data = url;

            // Configuration de la requête
            const requestOptions = {
              method: 'DELETE', // Méthode DELETE
              headers: {
                'Content-Type': 'application/json', // Type de contenu : JSON
                'Authorization': `Bearer ${presenceToken}`
              },
            };

            // Envoi de la requête
            fetch(url, requestOptions)
              .then(response => {
                // Gestion de la réponse HTTP
                
                  if (response.status === 200) {
                    throw new Error('Item Deleted');
                  } else if (response.status === 401) {
                    throw new Error('Vous n\'êtes pas autorisé à accéder à ces données.');
                  } else if (response.status === 500){
                    throw new Error('Unexpected Behaviour');
                  } else {
                    throw new Error('Erreur de récupération des données : ' + response.status);
                  }
                
                // Récupérer et renvoyer les données JSON de la réponse
                
              })
              .then(data => {
              })
              .catch(error => {
                // Gestion des erreurs
                console.error('Erreur lors de la requête :', error);
              });
      }
    )} 
}

// fonction de suppresion d'un element
function supprimerElementParId(btnIconPoubelle) {
  // Trouver l'index de l'élément avec l'ID donné
  fetchData()
  .then ( data => {
    const index = data.findIndex(element => element.id === btnIconPoubelle.dataImageId);
  if (index !== -1) {
      // Supprimer l'élément du tableau en utilisant l'index
      data.splice(index, 1);
      console.log(`L'élément avec l'ID ${btnIconPoubelle.dataImageId} a été supprimé.`);
  } else {
      console.log(`Aucun élément avec l'ID ${btnIconPoubelle.dataImageId} n'a été trouvé.`);
  }
    // Les données sont disponibles ici en dehors de la fonction fetch
    console.log("la nouvelle valeur du tableau après suppression est  :", data);
    // Vous pouvez appeler d'autres fonctions avec les données ici
    // autreFonction(data);
    const reinitialisationContenuModale = document.querySelector(".containerImgModale");
    reinitialisationContenuModale.innerHTML = '';
    
    const reinitialisationContenu = document.querySelector(".gallery");
    reinitialisationContenu.innerHTML = '';
    genererContenu(data);
    genererContennuModale(data);
   }) 
  }


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
 let contenu = [];
 async function fetchData (){
  return await fetch('http://localhost:5678/api/works')
  .then(response => {
    if (response=== 500) {
      throw new Error('unexpected error');
    }
    return response.json();
  })
  .then(data => {
    // Traite les données de réponse ici
    console.log(data);
    genererContenu(data);
    console.log("j'ai lieu deux fois");
    return data
  })
  .catch(error => {
    console.error('Erreur :', error);
  });
 }
fetchData();
function genererContenu(data){
  console.log("le tableau du contenu est =" + data);
  const sectionGalerie = document.querySelector(".gallery");
          sectionGalerie.innerHTML= '';

    for (let i = 0 ; i < data.length; i++){
          const article = data[i];
          console.log("le contenu de article dans la boucle for est :" + article)
          
          // Création d’une balise dédiée à une pièce automobile
          const elementGalerie = document.createElement("figure");
          // Création des balises 
          const imageElement = document.createElement("img");
          imageElement.src = article.imageUrl;
          const titreElement = document.createElement("figcaption");
          titreElement.innerText = article.title;
          console.log("titre de l'article"+ i + titreElement.innerText);
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
      const htmlConnexion= '<div id="main-login"><h2>Log in</h2><form id="form-login"><div class="erreurMessage"></div><div class="inputContainer"><label for="email">Email</label><input id="email" type="text"></div><div class="inputContainer"><label for="motDePasse">Mot de passe</label><input id="motDePasse" type="text"></div><button type="submit" id="btnForm">Se connecter</button></form><a href="#">Mot de passe oublié</a></div>';
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
                  
                    if (response.status === 404) {
                      throw new Error('Les données demandées n\'ont pas été trouvées.');
                    } else if (response.status === 401) {
                      throw new Error('Vous n\'êtes pas autorisé à accéder à ces données.');
                    } else if (response.status === 200){
                      return response.json();
                    } else {
                      throw new Error('Erreur de récupération des données : ' + response.status);
                    }
                  
                  // Récupérer et renvoyer les données JSON de la réponse
                  
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
                  const ErreurMessageTexte = "<p>Erreur dans l'identifiant ou le mot de passe</p>";
                  const ErreurMessage = document.querySelector(".erreurMessage")
                  ErreurMessage.innerHTML = ErreurMessageTexte;
                  // Gestion des erreurs
                  console.error('Erreur lors de la requête :', error);
                });
        }
      })
})

