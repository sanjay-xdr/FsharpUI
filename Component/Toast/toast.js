const button = document.getElementById("button");
const toasts = document.getElementById("toast");

button.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add("toast-default");
  notif.innerText = "Added to Cart";
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};
