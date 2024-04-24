const Token = sessionStorage.getItem('token');
const userId = sessionStorage.getItem('userId');

if (Token !== null) {

  // barre du haut avec la mention mode édition
  const editModeBar = document.createElement("div");
  const editModeTextBar = document.createElement("p");
  editModeTextBar.textContent = "Mode édition";
  const iconElement = document.createElement("i");
  iconElement.style.color = "#fff";
  iconElement.classList.add("far", "fa-pen-to-square");
  editModeBar.appendChild(iconElement);
  editModeBar.appendChild(editModeTextBar);

  // Appliquer les styles à la barre d'édition
  editModeBar.style.display = "flex";
  editModeBar.style.justifyContent = "center";
  editModeBar.style.alignItems = "center";
  editModeBar.style.backgroundColor = "black";
  editModeBar.style.width = "100%";
  editModeBar.style.height = "59px";
  editModeTextBar.style.color = "#fff";
  const headerElement = document.querySelector("header");
  document.body.insertBefore(editModeBar, headerElement);

  // Changement boutton login en logout
  const btnlogout = Array.from(document.querySelectorAll('li')).find(li => {
    const text = li.textContent.trim();
    return text === "login" || text === "logout";
  });
  btnlogout.textContent = "logout";
  btnlogout.addEventListener("click", function () {
    sessionStorage.removeItem('token');
    location.reload();
  });

  // boutoun modifier pour modale
  const editButton = document.createElement("button");
  editButton.classList.add("editModalButton");
  editButton.setAttribute("type", "button");
  editButton.style.marginLeft = "30px";
  editButton.style.border = "none";
  editButton.style.background = "none";
  const editIcon = document.createElement("i");
  editIcon.style.color = "black";
  editIcon.style.marginRight = "10px"
  editIcon.classList.add("far", "fa-pen-to-square");
  editButton.textContent = "Modifier";
  editButton.insertBefore(editIcon, editButton.firstChild);
  const titleEditDiv = document.querySelector('#portfolio h2');  
  titleEditDiv.appendChild(editButton);

  // gestion de la modale
  const editModalButton = document.querySelector(".editModalButton");
  editModalButton.addEventListener("click", function () {
    openModales();
  })
}

function openModales(){
  // Création de la modale galerie

    //Création arrrière plan galerie
    const modalBackground = document.createElement("aside");
    modalBackground.style.position = "fixed";
    modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    modalBackground.style.width = "100%";
    modalBackground.style.height = "100%";
    modalBackground.style.top = "0px";
    modalBackground.style.left = "0px";
    modalBackground.style.display = "flex"
    modalBackground.style.alignItems = "center";
    modalBackground.style.justifyContent = "center";

    // Création de la modale galerie
    const modalGalery = document.createElement("div");
    modalGalery.style.width = "630px";
    modalGalery.style.height = "688px";
    modalGalery.style.backgroundColor = "#FFFFFF";
    modalGalery.style.display = "flex"
    modalGalery.style.flexDirection = "column";
    modalGalery.style.alignItems = "center";
    modalGalery.style.position = "fixed";


    // Elément de la modale galerie

    // titre modale galerie
    const modalTitle = document.createElement("h3");
    modalTitle.style.fontSize = "26px";
    modalTitle.style.fontWeight = "400";
    modalTitle.textContent = "Galerie photo";
    modalTitle.style.position = "absolute";
    modalTitle.style.top = "60px";

    // container modale galerie
    const modalImageContainer = document.createElement("div");
    modalImageContainer.classList.add("containerImgModale");
    modalImageContainer.style.display = "grid";
    modalImageContainer.style.rowGap = "30px"
    modalImageContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    modalImageContainer.style.gridAutoRows = "102px";
    modalImageContainer.style.borderBottom = "1px solid black";
    modalImageContainer.style.width = "420px";
    modalImageContainer.style.height = "430px";
    modalImageContainer.style.position = "absolute";
    modalImageContainer.style.top = "126px";

    // bouton d'ajout de projet 
    const addPhotoButton = document.createElement("button");
    addPhotoButton.textContent = "Ajouter une photo";
    addPhotoButton.style.width = "237px";
    addPhotoButton.style.height = "36px";
    addPhotoButton.style.backgroundColor = "#1D6154";
    addPhotoButton.style.color = "#FFFFFF";
    addPhotoButton.style.borderRadius = "60px";
    addPhotoButton.style.position = "absolute";
    addPhotoButton.style.top = "607px";
    addPhotoButton.style.border = "none";

    //bouton de fermeture de la modale galerie
    const closeButtonModalGallery = document.createElement("button");
    closeButtonModalGallery.style.display = "flex";
    closeButtonModalGallery.style.position = "absolute";
    closeButtonModalGallery.style.left = "580px";
    closeButtonModalGallery.style.top = "26px";
    closeButtonModalGallery.style.border = "none";
    closeButtonModalGallery.style.background = "none";
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-xmark");
    closeIcon.style.fontSize = "24px";

    closeButtonModalGallery.appendChild(closeIcon);    
    modalGalery.appendChild(closeButtonModalGallery);
    modalBackground.appendChild(modalGalery);
    modalGalery.appendChild(modalTitle);
    modalGalery.appendChild(modalImageContainer);
    modalGalery.appendChild(addPhotoButton);
    document.body.appendChild(modalBackground);

    closeButtonModalGallery.addEventListener("click", function () {
      const close = document.querySelector("aside");
      close.remove();
    });

    addPhotoButton.addEventListener("click", function () {
      const close = document.querySelector("aside");
      close.remove();      
      genererModaleAjout();
    })

    genererContennuModale(contenu);
  
}
function genererModaleAjout() {
  //Création arrrière plan
  const addModalBackground = document.createElement("aside");
  addModalBackground.style.position = "fixed";
  addModalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  addModalBackground.style.width = "100%";
  addModalBackground.style.height = "100%";
  addModalBackground.style.top = "0px";
  addModalBackground.style.left = "0px";
  addModalBackground.style.display = "flex"
  addModalBackground.style.alignItems = "center";
  addModalBackground.style.justifyContent = "center";

  // Création de la modale
  const addModal = document.createElement("div");
  addModal.style.width = "630px";
  addModal.style.height = "670px";
  addModal.style.backgroundColor = "#FFFFFF";
  addModal.style.display = "flex"
  addModal.style.flexDirection = "column";
  addModal.style.alignItems = "center";
  addModal.style.position = "fixed";
  document.body.appendChild(addModalBackground);
  addModalBackground.appendChild(addModal);

  const closeAddModalButton = document.createElement("button");
  closeAddModalButton.style.background = "none";
  closeAddModalButton.style.border = "none";
  closeAddModalButton.style.position = "absolute";
  closeAddModalButton.style.top = "26px";
  closeAddModalButton.style.left = "580px";
  const iconFermetureModaleAjout = document.createElement("i");
  iconFermetureModaleAjout.classList.add("fas", "fa-xmark");
  iconFermetureModaleAjout.style.fontSize = "24px";
  closeAddModalButton.appendChild(iconFermetureModaleAjout);
  addModal.appendChild(closeAddModalButton);

  const titleAddModal = document.createElement("h3");
  titleAddModal.textContent = "Ajout photo";
  titleAddModal.style.fontSize = "26px"; 
  titleAddModal.style.fontWeight = "400";
  titleAddModal.style.position = "absolute";
  titleAddModal.style.top = "60px";
  addModal.appendChild(titleAddModal);

  const addModalForm = document.createElement("form");
  addModalForm.style.display = "flex";
  addModalForm.style.flexDirection = "column";
  addModalForm.style.alignItems = "flex-start";
  addModalForm.style.width = "420px";
  addModalForm.style.position = "relative";
  addModal.appendChild(addModalForm);

  const photoInput = document.createElement("input");
  photoInput.id = "inputPhoto";
  photoInput.setAttribute("type", "file");
  photoInput.style.display = "none";
  addModalForm.appendChild(photoInput);

  const photoInpuLabel = document.createElement("label");
  photoInpuLabel.setAttribute("for", "inputPhoto"); 
  photoInpuLabel.style.display = "flex";
  photoInpuLabel.style.flexDirection = "column";
  photoInpuLabel.style.alignItems = "center";
  photoInpuLabel.style.position = "absolute";
  photoInpuLabel.style.top = "221px";
  photoInpuLabel.style.left = "0";
  photoInpuLabel.style.right = "0";
  photoInpuLabel.style.marginLeft = "auto";
  photoInpuLabel.style.marginRight = "auto";
  photoInpuLabel.style.zIndex = "1";
  addModalForm.appendChild(photoInpuLabel);

  const photoInputIcon = document.createElement("i");
  photoInputIcon.classList.add("far", "fa-image");
  photoInputIcon.style.fontSize = "76px";
  photoInputIcon.style.position = "absolute";    
  photoInputIcon.style.top = "139px";
  photoInputIcon.style.zIndex = "1";
  photoInputIcon.style.color = "#B9C5CC";
  addModal.appendChild(photoInputIcon);
  
  const photoInputButton = document.createElement("p");
  photoInputButton.innerText = "+ Ajouter Photo";
  photoInputButton.style.display = "flex";
  photoInputButton.style.alignItems = "center";
  photoInputButton.style.justifyContent = "center";
  photoInputButton.style.backgroundColor = "#B9C5CC";
  photoInputButton.style.borderRadius = "50px";
  photoInputButton.style.width = "173px";
  photoInputButton.style.height = "36px";
  photoInputButton.style.zIndex = "1";
  photoInputButton.style.border = "none";
  photoInpuLabel.appendChild(photoInputButton);  

  const photoInfo = document.createElement("p");
  photoInfo.innerText = "jpg, png : 4mo max";
  photoInfo.style.zIndex = "1";
  photoInfo.style.position = "absolute";
  photoInfo.style.top = "264px";
  addModal.appendChild(photoInfo);

  const photoInputDiv = document.createElement("div");
  photoInputDiv.style.height = "169px";
  photoInputDiv.style.width = "420px";
  photoInputDiv.style.display = "flex";
  photoInputDiv.style.justifyContent = "center";
  photoInputDiv.style.position = "absolute";
  photoInputDiv.style.top = "126px";
  photoInputDiv.style.backgroundColor = "#E8F1F6";
  photoInputDiv.style.zIndex = "0";
  addModal.appendChild(photoInputDiv);
  

  photoInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = "100%";
        imgElement.style.maxHeight = "100%";
        photoInputDiv.innerHTML = "";
        photoInputDiv.style.zIndex = "1000";
        photoInputDiv.appendChild(imgElement);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });

  const titleInputLabel = document.createElement("label");
  titleInputLabel.for = "inputTitre";
  titleInputLabel.innerText = "Titre";
  titleInputLabel.style.position = "absolute";
  titleInputLabel.style.top = "325px";
  addModalForm.appendChild(titleInputLabel);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.id = "inputTitre";
  titleInput.style.width = "420px";
  titleInput.style.position = "absolute";
  titleInput.style.top = "351px";
  titleInput.style.height = "51px";
  titleInput.style.boxSizing = "border-box";
  titleInput.style.boxShadow = "0px 4px 14px 0px rgba(0, 0, 0, 0.09)";
  titleInput.style.border = "none";
  addModalForm.appendChild(titleInput);

  const categoryInputLabel = document.createElement("label");
  categoryInputLabel.for = "inputCategorie";
  categoryInputLabel.innerText = "Catégorie";
  categoryInputLabel.style.position = "absolute";
  categoryInputLabel.style.top = "423px";
  addModalForm.appendChild(categoryInputLabel);

  const categoryInput = document.createElement("select");
  categoryInput.id = "inputCategorie";
  categoryInput.style.width = "420px";
  categoryInput.style.position = "absolute";
  categoryInput.style.top = "449px";
  categoryInput.style.height = "51px";
  categoryInput.style.boxShadow = "0px 4px 14px 0px rgba(0, 0, 0, 0.09)";
  categoryInput.style.border = "none";

  const categoryInputSelect = document.createElement("option");
  categoryInputSelect.value = "";
  categoryInputSelect.innerText = "Selectionner une catégorie";
  categoryInput.appendChild(categoryInputSelect);

  const categoryInput1 = document.createElement("option");
  categoryInput1.value = "1";
  categoryInput1.innerText = "Objets";
  categoryInput.appendChild(categoryInput1);

  const categoryInput2 = document.createElement("option");
  categoryInput2.value = "2";
  categoryInput2.innerText = "Appartements";
  categoryInput.appendChild(categoryInput2);

  const categoryInput3 = document.createElement("option");
  categoryInput3.value = "3";
  categoryInput3.innerText = "Hotels & Restaurants";
  categoryInput.appendChild(categoryInput3);
  addModalForm.appendChild(categoryInput);

  const photoSubmitButton = document.createElement("button");
  photoSubmitButton.type = "submit";
  photoSubmitButton.innerText = "Valider";
  photoSubmitButton.style.width = "237px";
  photoSubmitButton.style.borderRadius = "60px";
  photoSubmitButton.style.backgroundColor = "#A7A7A7";
  photoSubmitButton.style.height = "36px";
  photoSubmitButton.style.position = "absolute";
  photoSubmitButton.style.top = "579px";      
  photoSubmitButton.style.left = "0";
  photoSubmitButton.style.right = "0";
  photoSubmitButton.style.marginLeft = "auto";
  photoSubmitButton.style.marginRight = "auto";
  photoSubmitButton.style.border = "none";
  photoSubmitButton.style.color = "#FFFFFF";
  addModalForm.appendChild(photoSubmitButton);

  const Arrowback = document.createElement("i");
  Arrowback.classList.add("fas", "fa-arrow-left");
  Arrowback.style.position = "absolute";
  Arrowback.style.top = "26px";
  Arrowback.style.left = "26px";
  Arrowback.style.fontSize = "21px";
  addModal.appendChild(Arrowback);

  
  // Gestion de l'événement input pour les champs du formulaire
  photoInput.addEventListener("input", checkFormFields);
  titleInput.addEventListener("input", checkFormFields);
  categoryInput.addEventListener("input", checkFormFields);

  // gestion de l'événement submit
  photoSubmitButton.addEventListener("click", gestionFormulaire);

  // gestion de fermeture de la modale Ajout
  closeAddModalButton.addEventListener("click", function () {
    const fermeture = document.querySelector("aside");
    fermeture.remove();
  })
  
  // gestion de retour à la modale Galerie
  Arrowback.addEventListener("click", function () {
    const retour = document.querySelector("aside");
    retour.remove();
    openModales();
  })

  async function uploadImage(formData) {
    const url = 'http://localhost:5678/api/works'; // Remplacez cela par l'URL de votre point d'API
    const options = {
      headers: {
        'Authorization': `Bearer ${Token}`
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
        const reinitForm = document.querySelector("aside");
        reinitForm.remove();
        genererModaleAjout();
        fetchData();
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi de la requête :", error);
      });
  }
  async function gestionFormulaire(event) {
    event.preventDefault();
    const photoInputValue = document.getElementById("inputPhoto");
    const titleInputValue = document.getElementById("inputTitre").value;
    const categoryInputValue = document.getElementById("inputCategorie").value;
    if (photoInputValue !== null && titleInputValue !== "" && categoryInputValue !== ""){
      const formData = new FormData();
      formData.append('image', photoInput.files[0]);
      formData.append('title', titleInputValue);
      formData.append('category', categoryInputValue);
      try {
        await uploadImage(formData);
      } catch (error) {
        console.error["erreur dans l'envoie upload"]
      }
    }else { 
      const formError = document.createElement("p");
      formError.innerText = "Erreur : tous les champs du formulaire doivent être remplis"
      formError.style.color = "red";
      formError.style.position = "absolute";
      formError.style.top = "559px";
      addModalForm.insertBefore(formError, photoSubmitButton);
    }
  }
  
  // Fonction pour vérifier si tous les champs du formulaire sont remplis
  function checkFormFields() {
    const photoInputValue = document.getElementById("inputPhoto").value;
    const titleInputValue = document.getElementById("inputTitre").value;
    const categoryInputValue = document.getElementById("inputCategorie").value;

    // Vérifier si tous les champs du formulaire sont remplis
    if (photoInputValue !== "" && titleInputValue !== "" && categoryInputValue !== "") {
      photoSubmitButton.style.backgroundColor = "#1D6154";
    } else {
      photoSubmitButton.style.backgroundColor = "A7A7A7"; 
    }
  }
}
function genererContennuModale(contenu) {
  const resetModalContent = document.querySelector(".containerImgModale");
      resetModalContent.innerHTML = '';
  for (let i = 0; i < contenu.length; i++) {
    const article = contenu[i];
    const moadalContentSection = document.querySelector(".containerImgModale");

    // Création du conteneur pour l'image et le bouton
    const container = document.createElement("div");
    container.classList.add("imageContainer");

    // Création de l'élément image
    const elementImage = document.createElement("img");
    elementImage.src = article.imageUrl;
    elementImage.style.height = "100%";
    elementImage.classList.add("imageClass");

    // Création du bouton
    const trashIconButton = document.createElement("button");
    trashIconButton.classList.add("iconButton");
    trashIconButton.getAttribute("dataImageId");
    trashIconButton.dataImageId = article.id;
    trashIconButton.style.backgroundColor = "black";
    trashIconButton.style.borderRadius = "2px";
    trashIconButton.style.border = "none";
    trashIconButton.style.height = "17px";
    trashIconButton.style.width = "17px";
    trashIconButton.style.display = "flex";
    trashIconButton.style.justifyContent = "center";
    trashIconButton.style.alignItems = "center";
    trashIconButton.style.position = "relative";
    trashIconButton.style.top = "-100px";
    trashIconButton.style.left = "54px";
    
    const trashIcon = document.createElement("i");
    trashIcon.style.color = "#FFFFFF"
    trashIcon.style.fontSize = "10px"
    trashIcon.classList.add("fas", "fa-trash-can");
    trashIconButton.appendChild(trashIcon);
    
    // Ajout de l'image et du bouton au conteneur
    container.appendChild(elementImage);
    container.appendChild(trashIconButton);

    // Ajout du conteneur au sectionContenuModale
    moadalContentSection.appendChild(container);

    trashIconButton.addEventListener("click", function () {
      
      // Suppresion de l'élément dans l'api
      const id = this.dataImageId;
      const url = `http://localhost:5678/api/works/${id}`;
      const data = url;

      // Configuration de la requête
      const requestOptions = {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
      };

      // Envoi de la requête
      fetch(url, requestOptions)
        .then(response => {
          if (response.ok) {
            fetchData()
            .then (data => {
              genererContennuModale(data);
            });
          } else if (response.status === 401) {
            throw new Error('Vous n\'êtes pas autorisé à accéder à ces données.');
          } else if (response.status === 500) {
            throw new Error('Unexpected Behaviour');
          } else {
            throw new Error('Erreur de récupération des données : ' + response.status);
          }
        })
        .catch(error => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête :', error);
        });
    }
    )
  }
}


const buttonSection = document.querySelector(".bouton");
buttonSection.style.display = "flex";
buttonSection.style.justifyContent = "center";
buttonSection.style.marginBottom = "50px";
buttonSection.style.paddingTop = "20px";

const gallery = document.querySelector(".gallery");

let contenu = [];

async function fetchData() {
  return await fetch('http://localhost:5678/api/works')
    .then(response => {
      if (response.status === 500) {
        throw new Error('unexpected error');
      }
      return response.json();
    })
    .then(data => {
      // Traite les données de réponse ici
      genererContenu(data);
      contenu = data;
      return contenu;
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
}

fetchData();

function genererContenu(data) {
  const galerySection = document.querySelector(".gallery");
  galerySection.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const article = data[i];

    // Création d’une balise dédiée à une pièce automobile
    const galeryElement = document.createElement("figure");
    // Création des balises 
    const elementImage = document.createElement("img");
    elementImage.src = article.imageUrl;

    const ElementTitle = document.createElement("figcaption");
    ElementTitle.innerText = article.title;

    galerySection.appendChild(galeryElement);
    galeryElement.appendChild(elementImage);
    galeryElement.appendChild(ElementTitle);
  }
}

// Fonction pour créer les boutons des catégories
function createCategoryButtons(categoriesdata) {
  if (Token){buttonSection.style.display = "none"} 
  else {
    const tousButton = document.createElement("button");
    tousButton.classList.add("buttonStyle");
    tousButton.innerText = "Tous";
    tousButton.style.border = "1px solid #1D6154";
    tousButton.style.width = "100px";
    tousButton.style.height = "37px";
    tousButton.style.borderRadius = "60px"
    tousButton.style.marginRight = "10px";
    tousButton.classList.add("active");
    tousButton.addEventListener("click", function(){
      gallery.innerHTML = '';
      genererContenu(contenu);
      const boutons = document.querySelectorAll(".buttonStyle");
      boutons.forEach(b => {
        b.classList.remove('active');
      });
      tousButton.classList.add("active");
    });
    buttonSection.appendChild(tousButton);
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
                const category = element.category.id;
                const boutons = document.querySelectorAll(".buttonStyle");
                boutons.forEach(b => {
                  b.classList.remove('active');
                });
                button.classList.add("active");
                trierElement(category, contenu);
            });
            buttonSection.appendChild(button);

            // Ajoutez la catégorie à l'ensemble des catégories existantes
            existingCategories.add(element.category.name);
        }
    });
  }
}

// Fonction pour initialiser la création des boutons
async function init() {
  try {
      const categoryData = await fetchData(); // Attendre la résolution du fetch
      createCategoryButtons(categoryData); // Créer les boutons une fois les données récupérées
  } catch (error) {
      console.error("Erreur lors de la récupération des données des catégories :", error);
  }
}

// Appel de la fonction d'initialisation
init();


function trierElement(category, contenu) { 
  gallery.innerHTML = '';
  const filterContent = contenu.filter(element => element.categoryId === category);
  genererContenu(filterContent);
};

const btnProjet = Array.from(document.querySelectorAll('li')).find(li => li.textContent.trim() === "projets");
btnProjet.addEventListener("click", function() {
  location.reload();
});

const loginButton = Array.from(document.querySelectorAll('li')).find(li => {
  const text = li.textContent.trim();
  return text === "login" || text === "logout";
});

loginButton.addEventListener("click", function () {
  loginButton.style.fontWeight = "600";
  const login = document.querySelector('main');
  login.innerHTML = '';
  const htmlLogin = '<div id="main-login"><h2>Log in</h2><form id="form-login"><div class="inputContainer"><label for="email">Email</label><input id="email" type="text"></div><div class="inputContainer"><label for="motDePasse">Mot de passe</label><input id="motDePasse" type="password"></div><div class="erreurMessage"></div><button type="submit" id="btnForm">Se connecter</button></form><a href="#" class="passwordForget">Mot de passe oublié</a></div>';
  login.innerHTML = htmlLogin;

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

  const passwordInput = document.getElementById("motDePasse");
  if (passwordInput) {
    passwordInput.style.width = "379px";
    passwordInput.style.boxSizing = "border-box";
    passwordInput.style.marginTop = "6px";
  }

  const passwordForget = document.querySelector(".passwordForget");
  if (passwordForget) {
    passwordForget.style.color = "black";
    passwordForget.style.marginTop = "30px";
    passwordForget.style.fontSize = "14px";
    passwordForget.style.fontWeight = "500";
  }

  const submitFormButton = document.getElementById("btnForm");
  if (submitFormButton) {
    submitFormButton.style.width = "179px";
    submitFormButton.style.marginTop = "37px";
    submitFormButton.style.height = "36px"
    submitFormButton.style.borderRadius = "60px";
    submitFormButton.style.backgroundColor = "#1D6154";
    submitFormButton.style.border = "none";
    submitFormButton.style.color = "#FFFFFF";
  }

  submitFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById("motDePasse");
    const passwordValue = passwordInput.value;
    if (emailValue !== null && passwordValue !== null) {
      const url = 'http://localhost:5678/api/users/login';
      const data = {
        email: emailValue,
        password: passwordValue
      };

      // Configuration de la requête
      const requestOptions = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
      };

      // Envoi de la requête
      fetch(url, requestOptions)
        .then(response => {
          // Gestion de la réponse HTTP

          if (response.status === 404) {
            throw new Error('Les données demandées n\'ont pas été trouvées.');
          } else if (response.status === 401) {
            throw new Error('Vous n\'êtes pas autorisé à accéder à ces données.');
          } else if (response.ok) {
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
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('token', token);
          window.location.reload();
        })
        .catch(error => {
          const messageTextError = "<p>Erreur dans l'identifiant ou le mot de passe</p>";
          const messageError = document.querySelector(".erreurMessage");
          messageError.style.color = "red";
          messageError.style.margin = "10px";
          messageError.innerHTML = messageTextError;
          // Gestion des erreurs
          console.error('Erreur lors de la requête :', error);
        });
    }
  })
})

