const form= document.querySelector('.js_form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const mobilePreview = document.querySelector('.js__preview_mobile');
const emailPreview = document.querySelector('.js__preview_email');
const linkedinPreview = document.querySelector('.js__preview_linkedin');
const githubPreview = document.querySelector('.js__preview_github');
const colors = document.querySelector('.js-colors');
const cardColor = document.querySelector('.js-cardp');

const data = {
    palette: 1,
    name: 'Nombre Apellido',
    job: 'Front-end developer',
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

function formChange (event) {
    event.preventDefault();
    const input = event.target.id;
    const valueInput = event.target.value;
    console.log(input);

    if (input === 'name') {
        namePreview.innerHTML = valueInput;
    } else if (input === 'work') {
        jobPreview.innerHTML = valueInput;
    } else if (input === 'mobile') {
        mobilePreview.innerHTML = valueInput;
    } else if (input === 'email') {
        emailPreview.href = valueInput;
    } else if (input === 'linkedin') {
        linkedinPreview.href = valueInput;
    } else if (input === 'github') {
        githubPreview.href = valueInput;
    }

}
//hacer otra función con la paleta. Dar value a todas los input de las paletas (1, 2, 3). Aplicar anidación en css. Seleccionar los elementos del cardpreview, añadir la clase que tiene los colores 
form.addEventListener('input', formChange);

