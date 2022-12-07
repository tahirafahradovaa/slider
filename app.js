$(".carousel").carousel({
  interval: 2500,
});

const myInterval = setInterval(() => {
  fetch("https://source.unsplash.com/random/500x500").then((res) => {
    createImg(res.url);
  });
}, 3000);
let counter = 0;
const div = document.querySelector(".carousel-inner");
function createImg(url) {
  const cont = document.createElement("div");
  cont.classList.add("carousel-item");
  const newImg = document.createElement("img");
  newImg.classList.add("d-block", "w-100");
  newImg.setAttribute("src", url);

  const parent = document.querySelectorAll(".carousel-item");
  parent.forEach((element) => {
    console.log(element.classList[1]);
  });
  cont.appendChild(newImg);
  div.appendChild(cont);
  counter++;
  if (counter > 4) {
    parent[1].classList.add("active");
    div.removeChild(parent[0]);
  }
}
window.addEventListener("load", function () {
  fetch("https://source.unsplash.com/random/500x500").then((res) => {
    createImg(res.url);
  });
  createImg();
});
