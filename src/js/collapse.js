'use strict';

const collapsableHeader = document.querySelectorAll('.js_collapsable-header');
const parentCollapse = document.querySelectorAll('.form__box');

const handleCollapsable = (event) => {
  shareErrorContainer.innerHTML = "";
  const clickedHeader = event.currentTarget;
  const clickedParent = clickedHeader.parentNode;

  for (const parent of parentCollapse) {
    if (parent === clickedParent) {
      parent.classList.remove('collapsable--close');
    } else {
      parent.classList.add('collapsable--close');
    }
  }


};

for (const header of collapsableHeader) {
  header.addEventListener('click', handleCollapsable);

}