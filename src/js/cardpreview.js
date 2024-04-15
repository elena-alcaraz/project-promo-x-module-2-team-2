
const btnReset = document.querySelector(".js_reset");


function resetForm(event)  {
    event.preventDefault();
    form.reset();
    namePreview.innerHTML = "Nombre Apellido";
    jobPreview.innerHTML = "Front-end developer";
    cardColor.classList.remove('palette2', 'palette3');
    cardColor.classList.add('palette1');
};

btnReset.addEventListener("click", resetForm);

/*btnReset.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("estoy cancelando");
    form.reset();
}) */


// btnReset.addEventListener("click", nombre de la funcion)

