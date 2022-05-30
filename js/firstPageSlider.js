let elements = document.querySelectorAll(".slideImg");

let counter = 1;
console.log(elements);

function slider() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("fade-in");
    elements[i].style.display = "none";
    elements[i].classList.add("fade-out");
  }
  if (counter > elements.length - 1) {
    counter = 0;
  }

  elements[counter].classList.add("fade-in");
  elements[counter].classList.remove("fade-out");
  elements[counter].style.display = "block";

  counter++;
}

setInterval("slider();", 4000);
//
// setTimeout("slider()", 1500);
