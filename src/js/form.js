const form = document.querySelector('.js_form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const mobilePreview = document.querySelector('.js__preview_mobile');
const emailPreview = document.querySelector('.js__preview_mail');
const linkedinPreview = document.querySelector('.js__preview_linkedin');
const githubPreview = document.querySelector('.js__preview_github');
const colors = document.querySelector('.js-colors');
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

function changePalette(event) {
    const input = event.target.id;
    const valueInput = event.target.value;
    cardColor.classList.remove('palette1', 'palette2', 'palette3');


    if (valueInput === '1') {
        cardColor.classList.add('palette1');

    } else if (valueInput === '2') {
        cardColor.classList.add('palette2');

    } else {
        cardColor.classList.add('palette3');
    }

}

colors.addEventListener('change', changePalette);

function formChange(event) {
    event.preventDefault();
    const inputId = event.target.id;
    const input = getPaletteDataKeyFromInputId(inputId);
    const valueInput = event.target.value;
    console.log(input);

    data[input] = valueInput;
    console.log(data);

    if (input === 'name') {
        namePreview.innerHTML = valueInput;
    } else if (input === 'job') {
        jobPreview.innerHTML = valueInput;
    } else if (input === 'phone') {
        mobilePreview.href = valueInput;
        console.log("telefono");
    } else if (input === 'email') {
        emailPreview.href = valueInput;
    } else if (input === 'linkedin') {
        linkedinPreview.href = valueInput;
    } else if (input === 'github') {
        githubPreview.href = valueInput;
    }

}

const getPaletteDataKeyFromInputId = (inputId) => {
    if (inputId.includes('palette')) {
        return 'palette'
    }

    return inputId;
};

//hacer otra función con la paleta. Dar value a todas los input de las paletas (1, 2, 3). Aplicar anidación en css. Seleccionar los elementos del cardpreview, añadir la clase que tiene los colores 
form.addEventListener('input', formChange);

