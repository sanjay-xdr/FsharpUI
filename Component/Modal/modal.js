const open = document.getElementById("open");

const modalContainer = document.getElementById("modal_container");

const close = document.getElementById("close");

const modalToggler = () => {
  modalContainer.classList.toggle("hide");
};

close.addEventListener("click", modalToggler);

open.addEventListener("click", modalToggler);
