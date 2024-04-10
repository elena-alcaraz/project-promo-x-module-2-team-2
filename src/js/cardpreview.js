const btnReset = document.querySelector(".js_reset");

btnReset.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("estoy cancelando");
    form.reset();
})




