const form = document.querySelector('.js_form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const mobilePreview = document.querySelector('.js__preview_mobile');
const emailPreview = document.querySelector('.js__preview_mail');
const linkedinPreview = document.querySelector('.js__preview_linkedin');
const githubPreview = document.querySelector('.js__preview_github');
const cardColor = document.querySelector('.js-cardp');

//variables para el share
const createBtn = document.querySelector('.js_create_button');
const shareLinkContainer = document.querySelector('.js_shareLinkContainer');
const shareLink = document.querySelector('.js_shareLink');
const shareToX = document.querySelector('.js_share_to_X')
const shareErrorContainer = document.querySelector('.js_shareErrorContainer');

function handleClickCreate(event) {
    event.preventDefault();

    fetch('https://dev.adalab.es/api/card/',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dataResponse => {
            console.log(dataResponse);

            if (dataResponse.success) {
                createBtn.classList.remove('share_createcard-button');
                createBtn.classList.add('share_createcard-buttonclicked');
                shareLinkContainer.classList.remove('hidden');
                shareLink.href = dataResponse.cardURL;
                shareLink.innerHTML = dataResponse.cardURL;
                shareToX.href += dataResponse.cardURL;
            } else {
                shareErrorContainer.classList.remove('hidden');
                shareErrorContainer.innerHTML = dataResponse.error;
            }
        })
};

createBtn.addEventListener('click', handleClickCreate);

const data = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
};


function formChange(event) {
  event.preventDefault();
  const inputId = event.target.id;
  const input = getPaletteDataKeyFromInputId(inputId);
  const valueInput = event.target.value;
  console.log(input);

  data[input] = valueInput;
  console.log(data);

  if (input === "name") {
    namePreview.innerHTML = valueInput;
  } else if (input === "job") {
    jobPreview.innerHTML = valueInput;
  } else if (input === "phone") {
    mobilePreview.href = valueInput;
    console.log("telefono");
  } else if (input === "email") {
    emailPreview.href = valueInput;
  } else if (input === "linkedin") {
    linkedinPreview.href = valueInput;
  } else if (input === "github") {
    githubPreview.href = valueInput;
  } else if (input === "photo") {
    const fre = new FileReader();
    const myFile = event.target.files[0];
    fre.addEventListener("load", () => {
      data["photo"] = fre.result;
      localStorage.setItem("data", JSON.stringify(data));
    });
    fre.readAsDataURL(myFile);
  }

  localStorage.setItem("data", JSON.stringify(data));
}

const getPaletteDataKeyFromInputId = (inputId) => {
  if (inputId.includes("palette")) {
    return "palette";
  }

  return inputId;
};

//hacer otra función con la paleta. Dar value a todas los input de las paletas (1, 2, 3). Aplicar anidación en css. Seleccionar los elementos del cardpreview, añadir la clase que tiene los colores 
form.addEventListener('input', formChange);


const loadDataFromStorage = () => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    updateDataFromStorage(dataFromLocalStorage);
    loadPaletteFromData();
    loadCardPreviewFromData();
    loadFillFromData();
  }
};

function updateDataFromStorage(dataFromLocalStorage) {
  data.palette = dataFromLocalStorage.palette;
  data.name = dataFromLocalStorage.name;
  data.job = dataFromLocalStorage.job;
  data.phone = dataFromLocalStorage.phone;
  data.email = dataFromLocalStorage.email;
  data.linkedin = dataFromLocalStorage.linkedin;
  data.github = dataFromLocalStorage.github;
  data.photo = dataFromLocalStorage.photo;
}

function loadPaletteFromData() {
  const radioPaletteGreen = document.querySelector("#palette_green");
  const radioPaletteRed = document.querySelector("#palette_red");
  const radioPaletteBlue = document.querySelector("#palette_blue");
  if (data.palette === "1") {
    radioPaletteGreen.checked = true;
  } else if (data.palette === "2") {
    radioPaletteRed.checked = true;
  } else if (data.palette === "3") {
    radioPaletteBlue.checked = true;
  }
  changeCardColors(data.palette);
}

function loadCardPreviewFromData() {
  namePreview.innerHTML = data.name;
  jobPreview.innerHTML = data.job;
  mobilePreview.href = data.phone;
  emailPreview.href = data.email;
  linkedinPreview.href = data.linkedin;
  githubPreview.href = data.github;
  if (data.photo.length > 0) {
    profileImage.src = data.photo;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
}

function loadFillFromData() {
  const inputName = document.querySelector("#name");
  inputName.value = data.name;
  const inputJob = document.querySelector("#job");
  inputJob.value = data.job;
  const inputEmail = document.querySelector("#email");
  inputEmail.value = data.email;
  const inputPhone = document.querySelector("#phone");
  inputPhone.value = data.phone;
  const inputLinkedin = document.querySelector("#linkedin");
  inputLinkedin.value = data.linkedin;
  const inputGithub = document.querySelector("#github");
  inputGithub.value = data.github;
}

loadDataFromStorage();