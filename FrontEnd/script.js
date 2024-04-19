const presenceToken = sessionStorage.getItem('token');
console.log("le token de session est:" + presenceToken);
const userId = sessionStorage.getItem('userId');
console.log("l'id dans le session storage est " + userId);
if (presenceToken !== null) {
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
  btnlogout.textContent = "logout";
  btnlogout.addEventListener("click", function () {
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
  btnModifier.style.marginLeft = "30px";
  btnModifier.style.border = "none";
  btnModifier.style.background = "none";
  const iconModifier = document.createElement("i");
  iconModifier.style.color = "black";
  iconModifier.style.marginRight = "10px"
  iconModifier.classList.add("far", "fa-pen-to-square");
  btnModifier.textContent = "Modifier";
  const divTitreModifier = document.querySelector('#portfolio h2');
  btnModifier.insertBefore(iconModifier, btnModifier.firstChild);
  divTitreModifier.appendChild(btnModifier);

  // gestion de la modale
  btnModifierModale = document.querySelector(".btnModifierModale");
  btnModifierModale.addEventListener("click", function () {
    console.log(" je veux modifier ma gallerie");
    openModales();
  })
}
function openModales(){
  // Création de la modale

    //Création arrrière plan
    const ArrierePlanModale = document.createElement("aside");
    ArrierePlanModale.style.position = "fixed";
    ArrierePlanModale.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    ArrierePlanModale.style.width = "100%";
    ArrierePlanModale.style.height = "100%";
    ArrierePlanModale.style.top = "0px";
    ArrierePlanModale.style.left = "0px";
    ArrierePlanModale.style.display = "flex"
    ArrierePlanModale.style.alignItems = "center";
    ArrierePlanModale.style.justifyContent = "center";

    // Création de la modale
    const modale = document.createElement("div");
    modale.style.width = "630px";
    modale.style.height = "688px";
    modale.style.backgroundColor = "#FFFFFF";
    modale.style.display = "flex"
    modale.style.flexDirection = "column";
    modale.style.alignItems = "center";
    modale.style.position = "fixed";


    // Elément de la modale
    // titre modale
    const titreModale = document.createElement("h3");
    titreModale.style.fontSize = "26px";
    titreModale.style.fontWeight = "400";
    titreModale.textContent = "Galerie photo";
    titreModale.style.position = "absolute";
    titreModale.style.top = "60px";
    // container modale
    const containerImgModale = document.createElement("div");
    containerImgModale.classList.add("containerImgModale");
    containerImgModale.style.display = "grid";
    containerImgModale.style.rowGap = "30px"
    containerImgModale.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    containerImgModale.style.gridAutoRows = "102px";
    containerImgModale.style.borderBottom = "1px solid black";
    containerImgModale.style.width = "420px";
    containerImgModale.style.height = "430px";
    containerImgModale.style.position = "absolute";
    containerImgModale.style.top = "126px";
    // bouton d'ajout de projet
    const btnAjoutPhoto = document.createElement("button");
    btnAjoutPhoto.textContent = "Ajouter une photo";
    btnAjoutPhoto.style.width = "237px";
    btnAjoutPhoto.style.height = "36px";
    btnAjoutPhoto.style.backgroundColor = "#1D6154";
    btnAjoutPhoto.style.color = "#FFFFFF";
    btnAjoutPhoto.style.borderRadius = "60px";
    btnAjoutPhoto.style.position = "absolute";
    btnAjoutPhoto.style.top = "607px";
    btnAjoutPhoto.style.border = "none";


    const btnFermeture = document.createElement("button");
    btnFermeture.style.display = "flex";
    btnFermeture.style.position = "absolute";
    btnFermeture.style.left = "580px";
    btnFermeture.style.top = "26px";
    btnFermeture.style.border = "none";
    btnFermeture.style.background = "none";
    const iconFermeture = document.createElement("i");
    iconFermeture.classList.add("fas", "fa-xmark");
    iconFermeture.style.fontSize = "24px";

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
    btnFermeture.addEventListener("click", function () {
      const fermeture = document.querySelector("aside");
      fermeture.remove();
    });



    btnAjoutPhoto.addEventListener("click", function () {
      const fermeture = document.querySelector("aside");
      fermeture.remove();      
      genererModaleAjout();
    })
  
}
function genererModaleAjout() {
  //Création arrrière plan
  const ArrierePlanModaleAjout = document.createElement("aside");
  ArrierePlanModaleAjout.style.position = "fixed";
  ArrierePlanModaleAjout.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  ArrierePlanModaleAjout.style.width = "100%";
  ArrierePlanModaleAjout.style.height = "100%";
  ArrierePlanModaleAjout.style.top = "0px";
  ArrierePlanModaleAjout.style.left = "0px";
  ArrierePlanModaleAjout.style.display = "flex"
  ArrierePlanModaleAjout.style.alignItems = "center";
  ArrierePlanModaleAjout.style.justifyContent = "center";

  // Création de la modale
  const modaleAjout = document.createElement("div");
  modaleAjout.style.width = "630px";
  modaleAjout.style.height = "670px";
  modaleAjout.style.backgroundColor = "#FFFFFF";
  modaleAjout.style.display = "flex"
  modaleAjout.style.flexDirection = "column";
  modaleAjout.style.alignItems = "center";
  modaleAjout.style.position = "fixed";
  document.body.appendChild(ArrierePlanModaleAjout);
  ArrierePlanModaleAjout.appendChild(modaleAjout);

  const btnFermetureModaleAjout = document.createElement("button");
  btnFermetureModaleAjout.style.background = "none";
  btnFermetureModaleAjout.style.border = "none";
  btnFermetureModaleAjout.style.position = "absolute";
  btnFermetureModaleAjout.style.top = "26px";
  btnFermetureModaleAjout.style.left = "580px";
  const iconFermetureModaleAjout = document.createElement("i");
  iconFermetureModaleAjout.classList.add("fas", "fa-xmark");
  iconFermetureModaleAjout.style.fontSize = "24px";
  btnFermetureModaleAjout.appendChild(iconFermetureModaleAjout);
  modaleAjout.appendChild(btnFermetureModaleAjout);

  const titreModaleAjout = document.createElement("h3");
  titreModaleAjout.textContent = "Ajout photo";
  titreModaleAjout.style.fontSize = "26px"; 
  titreModaleAjout.style.fontWeight = "400";
  titreModaleAjout.style.position = "absolute";
  titreModaleAjout.style.top = "60px";
  modaleAjout.appendChild(titreModaleAjout);

  const formModalAjout = document.createElement("form");
  formModalAjout.style.display = "flex";
  formModalAjout.style.flexDirection = "column";
  formModalAjout.style.alignItems = "flex-start";
  formModalAjout.style.width = "420px";
  formModalAjout.style.position = "relative";
  modaleAjout.appendChild(formModalAjout);

  const inputPhoto = document.createElement("input");
  inputPhoto.id = "inputPhoto";
  inputPhoto.setAttribute("type", "file");
  inputPhoto.style.display = "none";
  const labelInputPhoto = document.createElement("label");
  labelInputPhoto.setAttribute("for", "inputPhoto"); // Utilisez setAttribute pour définir l'attribut "for"

  labelInputPhoto.style.display = "flex";
  labelInputPhoto.style.flexDirection = "column";
  labelInputPhoto.style.alignItems = "center";
  labelInputPhoto.style.position = "absolute";
  labelInputPhoto.style.top = "221px";
  labelInputPhoto.style.left = "0";
  labelInputPhoto.style.right = "0";
  labelInputPhoto.style.marginLeft = "auto";
  labelInputPhoto.style.marginRight = "auto";
  labelInputPhoto.style.zIndex = "1";
  const iconInputPhoto = document.createElement("i");
  iconInputPhoto.classList.add("far", "fa-image");
  iconInputPhoto.style.fontSize = "76px";
  iconInputPhoto.style.position = "absolute";    
  iconInputPhoto.style.top = "139px";
  iconInputPhoto.style.zIndex = "1";
  iconInputPhoto.style.color = "#B9C5CC";
  modaleAjout.appendChild(iconInputPhoto);
  const btnInputPhoto = document.createElement("p");
  btnInputPhoto.innerText = "+ Ajouter Photo";
  btnInputPhoto.style.display = "flex";
  btnInputPhoto.style.alignItems = "center";
  btnInputPhoto.style.justifyContent = "center";
  btnInputPhoto.style.backgroundColor = "#B9C5CC";
  btnInputPhoto.style.borderRadius = "50px";
  btnInputPhoto.style.width = "173px";
  btnInputPhoto.style.height = "36px";
  btnInputPhoto.style.zIndex = "1";
  btnInputPhoto.style.border = "none";

  labelInputPhoto.appendChild(btnInputPhoto);
  const infoPhoto = document.createElement("p");
  infoPhoto.innerText = "jpg, png : 4mo max";
  infoPhoto.style.zIndex = "1";
  infoPhoto.style.position = "absolute";
  infoPhoto.style.top = "264px";
  modaleAjout.appendChild(infoPhoto);

  const divInputPhoto = document.createElement("div");
  divInputPhoto.style.height = "169px";
  divInputPhoto.style.width = "420px";
  divInputPhoto.style.display = "flex";
  divInputPhoto.style.justifyContent = "center";
  divInputPhoto.style.position = "absolute";
  divInputPhoto.style.top = "126px";
  divInputPhoto.style.backgroundColor = "#E8F1F6";
  divInputPhoto.style.zIndex = "0";
  /* divInputPhoto.style.position = "relative";
  divInputPhoto.style.top = "126px";
  divInputPhoto.style.left = "105px"; */


  inputPhoto.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = "100%";
        imgElement.style.maxHeight = "100%";
        divInputPhoto.innerHTML = "";
        divInputPhoto.style.zIndex = "1000";
        divInputPhoto.appendChild(imgElement);

      };
      reader.readAsDataURL(this.files[0]);
    }
  });


  modaleAjout.appendChild(divInputPhoto);



  formModalAjout.appendChild(inputPhoto);
  formModalAjout.appendChild(labelInputPhoto);


  const labelInputTitre = document.createElement("label");
  labelInputTitre.for = "inputTitre";
  labelInputTitre.innerText = "Titre";
  labelInputTitre.style.position = "absolute";
  labelInputTitre.style.top = "325px";
  formModalAjout.appendChild(labelInputTitre);

  const inputTitre = document.createElement("input");
  inputTitre.setAttribute("type", "text");
  inputTitre.id = "inputTitre";
  inputTitre.style.width = "420px";
  inputTitre.style.position = "absolute";
  inputTitre.style.top = "351px";
  inputTitre.style.height = "51px";
  inputTitre.style.boxSizing = "border-box";
  inputTitre.style.boxShadow = "0px 4px 14px 1.4px rgba(0, 0, 0, 0.09)";
  inputTitre.style.border = "none";
  /* inputTitre.style.position = "fixed";
  inputTitre.style.top = "1011px";
  inputTitre.style.left = "510px"; */
  formModalAjout.appendChild(inputTitre);



  const labelInputCategorie = document.createElement("label");
  labelInputCategorie.for = "inputCategorie";
  labelInputCategorie.innerText = "Catégorie";
  labelInputCategorie.style.position = "absolute";
  labelInputCategorie.style.top = "423px";
  formModalAjout.appendChild(labelInputCategorie);

  const inputCategorie = document.createElement("select");
  inputCategorie.id = "inputCategorie";
  inputCategorie.style.width = "420px";
  inputCategorie.style.position = "absolute";
  inputCategorie.style.top = "449px";
  inputCategorie.style.height = "51px";
  inputCategorie.style.boxShadow = "0px 4px 0px 1.4px rgba(0, 0, 0, 0.09)";
  inputCategorie.style.border = "none";
  /*inputCategorie.style.position = "fixed";
  inputCategorie.style.top = "1109px";
  inputCategorie.style.left = "510px"; */
  const inputCategorieSelect = document.createElement("option");
  inputCategorieSelect.value = "";
  inputCategorieSelect.innerText = "Selectionner une catégorie";
  inputCategorie.appendChild(inputCategorieSelect);
  const inputCategorie1 = document.createElement("option");
  inputCategorie1.value = "1";
  inputCategorie1.innerText = "Objets";
  inputCategorie.appendChild(inputCategorie1);
  const inputCategorie2 = document.createElement("option");
  inputCategorie2.value = "2";
  inputCategorie2.innerText = "Appartements";
  inputCategorie.appendChild(inputCategorie2);
  const inputCategorie3 = document.createElement("option");
  inputCategorie3.value = "3";
  inputCategorie3.innerText = "Hotels & Restaurants";
  inputCategorie.appendChild(inputCategorie3);
  formModalAjout.appendChild(inputCategorie);

  const btnSubmitPhoto = document.createElement("button");
  btnSubmitPhoto.type = "submit";
  btnSubmitPhoto.innerText = "Valider";
  btnSubmitPhoto.style.width = "237px";
  btnSubmitPhoto.style.borderRadius = "60px";
  btnSubmitPhoto.style.backgroundColor = "#A7A7A7";
  btnSubmitPhoto.style.height = "36px";
  btnSubmitPhoto.style.position = "absolute";
  btnSubmitPhoto.style.top = "579px";      
  btnSubmitPhoto.style.left = "0";
  btnSubmitPhoto.style.right = "0";
  btnSubmitPhoto.style.marginLeft = "auto";
  btnSubmitPhoto.style.marginRight = "auto";
  btnSubmitPhoto.style.border = "none";
  formModalAjout.appendChild(btnSubmitPhoto);


  async function uploadImage(formData) {
    const url = 'http://localhost:5678/api/works'; // Remplacez cela par l'URL de votre point d'API
    const options = {
      headers: {
        'Authorization': `Bearer ${presenceToken}`
      },
      method: 'POST',
      body: formData
    };
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json(); // Si vous attendez une réponse JSON
        
      })
      .then(data => {
        console.log("Réponse du serveur :", data);
        const reinitForm = document.querySelector("aside");
        reinitForm.remove();
        genererModaleAjout();
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi de la requête :", error);
      });
  }
  async function gestionFormulaire(event) {
    event.preventDefault();
    const inputPhotoValue = document.getElementById("inputPhoto");
    const inputTitreValue = document.getElementById("inputTitre").value;
    const inputCategorieValue = document.getElementById("inputCategorie").value;
    if (inputPhoto !== null && inputTitreValue !== "" && inputCategorieValue !== ""){
    console.log("inputPhotoValue =" + inputPhotoValue)
    const file = inputPhotoValue.files[0];
    console.log("file =" + file);
    const formData = new FormData();

    formData.append('image', inputPhoto.files[0]);
    formData.append('title', inputTitreValue);
    formData.append('category', inputCategorieValue);
    try {
      await uploadImage(formData);
    } catch (error) {
      console.error["erreur dans l'envoie upload"]
    }
  }else { 
    const erreurFormulaire = document.createElement("p");
    erreurFormulaire.innerText = "Erreur : tous les champs du formulaire doivent être remplis"
    erreurFormulaire.style.color = "red";
    erreurFormulaire.style.position = "absolute";
    erreurFormulaire.style.top = "559px";
    formModalAjout.insertBefore(erreurFormulaire, btnSubmitPhoto);
    console.log("tout les champs de formulaire doivent etre rempli");
  }
  }
  // Gestion de l'événement input pour les champs du formulaire
  inputPhoto.addEventListener("input", checkFormFields);
  inputTitre.addEventListener("input", checkFormFields);
  inputCategorie.addEventListener("input", checkFormFields);
  btnSubmitPhoto.addEventListener("click", gestionFormulaire);
  // Fonction pour vérifier si tous les champs du formulaire sont remplis
  function checkFormFields() {
    const inputPhotoValue = document.getElementById("inputPhoto").value;
    const inputTitreValue = document.getElementById("inputTitre").value;
    const inputCategorieValue = document.getElementById("inputCategorie").value;

    // Vérifier si tous les champs du formulaire sont remplis
    if (inputPhotoValue !== "" && inputTitreValue !== "" && inputCategorieValue !== "") {
      btnSubmitPhoto.style.backgroundColor = "#1D6154"; // Changer la couleur du bouton

    } else {
      btnSubmitPhoto.style.backgroundColor = "A7A7A7"; // Réinitialiser la couleur du bouton
    }


  }

  btnFermetureModaleAjout.addEventListener("click", function () {
    const fermeture = document.querySelector("aside");
    fermeture.remove();
  })
  const Arrowback = document.createElement("i");
  Arrowback.classList.add("fas", "fa-arrow-left");
  Arrowback.style.position = "absolute";
  Arrowback.style.top = "26px";
  Arrowback.style.left = "26px";
  Arrowback.style.fontSize = "21px";
  modaleAjout.appendChild(Arrowback);
  Arrowback.addEventListener("click", function () {
    const retour = document.querySelector("aside");
    retour.remove();
    openModales();
  })
}
function genererContennuModale(data) {
  console.log("les data de ma modale sont:" + data);
  for (let i = 0; i < data.length; i++) {
    const article = data[i];

    const sectionContenuModale = document.querySelector(".containerImgModale");
    // Création du conteneur pour l'image et le bouton
    const container = document.createElement("div");
    container.classList.add("imageContainer");


    // Création de l'élément image
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.style.height = "100%";
    imageElement.classList.add("imageClass");

    // Création du bouton
    const btnIconPoubelle = document.createElement("button");
    btnIconPoubelle.classList.add("iconButton");
    btnIconPoubelle.getAttribute("dataImageId");
    btnIconPoubelle.dataImageId = article.id;
    btnIconPoubelle.style.backgroundColor = "black";
    btnIconPoubelle.style.borderRadius = "2px";
    btnIconPoubelle.style.border = "none";
    btnIconPoubelle.style.height = "17px";
    btnIconPoubelle.style.width = "17px";
    btnIconPoubelle.style.display = "flex";
    btnIconPoubelle.style.justifyContent = "center";
    btnIconPoubelle.style.alignItems = "center";


    const iconPoubelle = document.createElement("i");
    iconPoubelle.style.color = "#FFFFFF"
    iconPoubelle.style.fontSize = "10px"
    iconPoubelle.classList.add("fas", "fa-trash-can");

    btnIconPoubelle.style.position = "relative";
    btnIconPoubelle.style.top = "-100px";
    btnIconPoubelle.style.left = "54px";
    btnIconPoubelle.appendChild(iconPoubelle);

    // Ajout de l'image et du bouton au conteneur
    container.appendChild(imageElement);
    container.appendChild(btnIconPoubelle);
    // Ajout du conteneur au sectionContenuModale
    sectionContenuModale.appendChild(container);

    btnIconPoubelle.addEventListener("click", function () {
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
          } else if (response.status === 500) {
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
    )
  }
}

// fonction de suppresion d'un element
function supprimerElementParId(btnIconPoubelle) {
  // Trouver l'index de l'élément avec l'ID donné
  fetchData()
    .then(data => {
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



const sectionBtn = document.querySelector(".bouton");
sectionBtn.style.display = "flex";
sectionBtn.style.justifyContent = "center";
sectionBtn.style.marginBottom = "50px";
sectionBtn.style.paddingTop = "20px";



const gallery = document.querySelector(".gallery");



//async function affichagePage(){
//const reponse = await fetch('http://localhost:5678/api/works');
//  contenu = await reponse.json();
//console.log(contenu);
// genererContennu();
// }
let contenu = [];
async function fetchData() {
  return await fetch('http://localhost:5678/api/works')
    .then(response => {
      if (response === 500) {
        throw new Error('unexpected error');
      }
      return response.json();
    })
    .then(data => {
      // Traite les données de réponse ici
      console.log(data);
      genererContenu(data);
      console.log("j'ai lieu deux fois");
      contenu = data;
      return data;
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
}
fetchData();
function genererContenu(data) {
  console.log("le tableau du contenu est =" + data);
  const sectionGalerie = document.querySelector(".gallery");
  sectionGalerie.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    console.log("le contenu de article dans la boucle for est :" + article)

    // Création d’une balise dédiée à une pièce automobile
    const elementGalerie = document.createElement("figure");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = article.title;
    console.log("titre de l'article" + i + titreElement.innerText);
    // On rattache la balise article a la section Fiches
    sectionGalerie.appendChild(elementGalerie);
    // On rattache l’image à pieceElement (la balise article)
    elementGalerie.appendChild(imageElement);
    elementGalerie.appendChild(titreElement);

  }
}

// Fonction pour créer les boutons des catégories
function createCategoryButtons(categoriesdata) {
  const btnTous = document.createElement("button");
  btnTous.classList.add("buttonStyle");
  btnTous.innerText = "tous";
  btnTous.style.border = "1px solid #1D6154";
  btnTous.style.width = "100px";
  btnTous.style.height = "37px";
  btnTous.style.borderRadius = "60px"
  btnTous.style.marginRight = "10px";
  btnTous.classList.add("active");
  btnTous.addEventListener("click", function(){
    gallery.innerHTML = '';
    genererContenu(contenu);
    const boutons = document.querySelectorAll(".buttonStyle");
    boutons.forEach(b => {
      b.classList.remove('active');
    });
    btnTous.classList.add("active");
  });
  sectionBtn.appendChild(btnTous);
  const existingCategories = new Set(); // Utilisez un ensemble pour éviter les doublons
  categoriesdata.forEach(element => {
      // Vérifiez si la catégorie existe déjà dans l'ensemble des catégories existantes
      if (!existingCategories.has(element.category.name)) {
          const button = document.createElement("button");
          button.textContent = element.category.name;
          button.style.minWidth = "100px";
          button.style.border = "1px solid #1D6154";
          button.style.padding = "10px";
          button.style.borderRadius = "60px"
          button.style.marginRight = "10px";         
          button.classList.add("buttonStyle");
          button.addEventListener("click", () => {
              const categorie = element.category.id;
              console.log(`Images de la catégorie ${element.category.name}`);
              const boutons = document.querySelectorAll(".buttonStyle");
              boutons.forEach(b => {
                b.classList.remove('active');
            });
              button.classList.add("active");
              trierElement(categorie, contenu);
          });
          sectionBtn.appendChild(button);

          // Ajoutez la catégorie à l'ensemble des catégories existantes
          existingCategories.add(element.category.name);
      }
  });
}

// Fonction pour initialiser l'application
async function init() {
  try {
      const categoriesData = await fetchData(); // Attendre la résolution du fetch
      categoriesData.forEach(obj => {
        console.log(obj);
      });
      createCategoryButtons(categoriesData); // Créer les boutons une fois les données récupérées
  } catch (error) {
      console.error("Erreur lors de la récupération des données des catégories :", error);
  }
}

// Appel de la fonction d'initialisation
init();

//
function trierElement(categorie, contenu) { // changer nom variable contenu + trier element 
  gallery.innerHTML = '';
  console.log("contenu est " + contenu);
  const contenuFiltre = contenu.filter(element => element.categoryId === categorie);
  console.log(categorie);
  console.log(contenuFiltre);
  console.log("hello");
  genererContenu(contenuFiltre);
};


const btnLogin = document.getElementById("login")
btnLogin.style.backgroundColor = "#FFFFFF";
btnLogin.style.border = "none";
btnLogin.addEventListener("click", function () {
  const pageConnexion = document.querySelector('main');
  pageConnexion.innerHTML = '';
  const htmlConnexion = '<div id="main-login"><h2>Log in</h2><form id="form-login"><div class="inputContainer"><label for="email">Email</label><input id="email" type="text"></div><div class="inputContainer"><label for="motDePasse">Mot de passe</label><input id="motDePasse" type="password"></div><div class="erreurMessage"></div><button type="submit" id="btnForm">Se connecter</button></form><a href="#">Mot de passe oublié</a></div>';
  pageConnexion.innerHTML = htmlConnexion;

  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.position = "absolute";
    footer.style.top = "964px";
    footer.style.width = "1140px";
  }

  const mainLogin = document.getElementById("main-login");
  if (mainLogin) {
    mainLogin.style.display = "flex";
    mainLogin.style.flexDirection = "column";
    mainLogin.style.alignItems = "center";
    mainLogin.style.position = "absolute";
    mainLogin.style.top = "242px";
    mainLogin.style.justifyContent = "center";
    mainLogin.style.width = "1140px";
  };

  const formLogin = document.getElementById("form-login");
  if (formLogin) {
    formLogin.style.display = "flex";
    formLogin.style.flexDirection = "column";
    formLogin.style.alignItems = "center";
    formLogin.style.marginTop = "37px";
  }

  const inputContainers = document.querySelectorAll(".inputContainer");
  if (inputContainers) {
    for (let i = 0; i < inputContainers.length; i++) {
      const inputContainer = inputContainers[i];
      inputContainer.style.display = "flex";
      inputContainer.style.flexDirection = "column";
      inputContainer.style.textAlign = "left";
    }
  }

  const inputEmail = document.getElementById("email");
  if (inputEmail) {
    inputEmail.style.width = "379px";
    inputEmail.style.boxSizing = "border-box";
    inputEmail.style.marginTop = "6px";
    inputEmail.style.marginBottom = "30px";
  }

  const inputMotDePasse = document.getElementById("motDePasse");
  if (inputMotDePasse) {
    inputMotDePasse.style.width = "379px";
    inputMotDePasse.style.boxSizing = "border-box";
    inputMotDePasse.style.marginTop = "6px";
  }

  const btnForm = document.getElementById("btnForm");
  if (btnForm) {
    btnForm.style.width = "179px";
    btnForm.style.marginTop = "37px";
    btnForm.style.height = "36px"
    btnForm.style.borderRadius = "60px";
    btnForm.style.backgroundColor = "#1D6154";
    btnForm.style.border = "none";
  }

  btnForm.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("hello");
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    console.log("La valeur de l'adresse e-mail est : " + emailValue);

    const mdPInput = document.getElementById("motDePasse");
    // Pour récupérer la valeur de l'input text
    const mdpValue = mdPInput.value;
    // Utilisez ensuite la variable emailValue comme bon vous semble
    console.log("La valeur du mot de passe est : " + mdpValue);

    if (emailValue !== null && mdpValue !== null) {
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
          } else if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Erreur de récupération des données : ' + response.status);
          }

          // Récupérer et renvoyer les données JSON de la réponse

        })
        .then(data => {
          const ident = data;
          const token = ident.token;
          const userId = ident.userId;
          console.log("userId est =" + userId);
          sessionStorage.setItem('userId', userId);
          console.log("le token est : " + token);
          sessionStorage.setItem('token', token);
          const tokenFromSessionStorage = sessionStorage.getItem('token');
          console.log("La valeur de 'token' dans sessionStorage est : " + tokenFromSessionStorage);
          // Utilisation des données de réponse
          window.location.reload();
        })
        .catch(error => {
          const ErreurMessageTexte = "<p>Erreur dans l'identifiant ou le mot de passe</p>";
          const ErreurMessage = document.querySelector(".erreurMessage");
          ErreurMessage.style.color = "red";
          ErreurMessage.style.margin = "10px";
          ErreurMessage.innerHTML = ErreurMessageTexte;
          // Gestion des erreurs
          console.error('Erreur lors de la requête :', error);
        });
    }
  })
})

