const form= document.querySelector('.js_form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const mobilePreview = document.querySelector('.js__preview_mobile');
const emailPreview = document.querySelector('.js__preview_email');
const linkedinPreview = document.querySelector('.js__preview_linkedin');
const githubPreview = document.querySelector('.js__preview_github');


form.addEventListener('input', (event) => {
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

    
  
});