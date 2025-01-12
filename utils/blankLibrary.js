const blankError = "background-color: #5566ff42; padding: 5px; border-radius: 5px";

/**
 * Create HTML element
 * @typedef {Object} ElementProperties
 * @property {string} type tag element
 * @property {object} attributes element attributes
 * @property {node} parent element parent
 * @property {string} content element text content
 * @returns {node} created element
 */
function createElement({ type, attributes, parent, content = "" }) {
  let el = document.createElement(type);
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  if (parent) {
    parent.appendChild(el);
  }
  el.innerHTML = content;

  return el;
}

/**
 * Create Popup
 * @param {string} element selector
 * @returns
 */
function createPopUp({ button, menu, overlay }) {
  const buttonElement = document.querySelector(button);
  const menuElement = document.querySelector(menu);
  const overlayElement = overlay ? document.querySelector(overlay) : null;

  if (!buttonElement || !menuElement) {
    console.error("PopUp: Button or menu selector is invalid.");
    return;
  }

  function toggleMenu() {
    buttonElement.classList.toggle("active");
    menuElement.classList.toggle("open");
  }

  function closeMenu() {
    buttonElement.classList.remove("active");
    menuElement.classList.remove("open");
  }

  function handleClickOutside(event) {
    if (!buttonElement.contains(event.target) && !menuElement.contains(event.target) && menuElement.classList.contains("open")) {
      closeMenu();
    }
  }

  // Ajout des listeners
  buttonElement.addEventListener("click", toggleMenu);

  if (overlayElement) {
    overlayElement.addEventListener("click", closeMenu);
  }

  document.addEventListener("click", handleClickOutside);

  // Retourne une API pour cette instance si nécessaire
  return {
    toggle: toggleMenu,
    close: closeMenu,
  };
}
