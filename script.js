const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
  "Message Six",
];

const notifications = document.getElementById("notifdiv");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => createnotification());
const colors = ["blue", "green", "red"];

const color = "";
const createnotification = () => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.classList.add(color ? color : randomcolor());
  notifications.append(notification);
  notification.innerText = randommessage();
  setTimeout(() => {
    notification.remove();
  }, 2500);
};

const randommessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const randomcolor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
