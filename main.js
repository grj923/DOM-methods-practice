console.log("hello");

let main = document.createElement("main");
document.body.appendChild(main);
console.log(main);

let button = document.createElement("button");
button.style.height = "20px";
button.style.width = "60px";
button.style.background = "red";
// button.setAttribute("width", "200");
// button.setAttribute("height", "200");
document.body.appendChild(button);
console.log(button);

let img = document.createElement("img");
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Tired_20-year-old_cat.jpg";
img.setAttribute("height", "250");
img.setAttribute("width", "250");
img.className = "img";
main.appendChild(img);
console.log(img);

let anchorTag = document.createElement("a");
let LinkText = document.createTextNode("Click This Link!");
anchorTag.appendChild(LinkText);
anchorTag.title = "Click This Link!";
anchorTag.className = "link";
anchorTag.setAttribute(
  "href",
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Tired_20-year-old_cat.jpg"
);
main.appendChild(anchorTag);
console.log(anchorTag);

button.addEventListener("click", function () {
  console.log("button works");
  main.remove();
});
