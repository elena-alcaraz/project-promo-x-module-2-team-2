const colors = document.querySelector(".js-colors");
colors.addEventListener("change", changePalette);

function changeCardColors(paletteValue) {
  cardColor.classList.remove("palette1", "palette2", "palette3");

  if (paletteValue === "1") {
    cardColor.classList.add("palette1");
  } else if (paletteValue === "2") {
    cardColor.classList.add("palette2");
  } else {
    cardColor.classList.add("palette3");
  }
}

function changePalette(event) {
  const valueInput = event.target.value;
  changeCardColors(valueInput);
}
