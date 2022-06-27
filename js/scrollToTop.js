// const offset = 100;
// const scrollUp = document.querySelector(".scroll-up");
// const scrollUpSvgPath = document.querySelector(".scroll-up_svg-path");
// const pathLength = scrollUpSvgPath.getTotalLength();

// scrollUpSvgPath.style.strokeDashArray = `${pathLength} ${pathLength}`;
// scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

// const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// //updatedashoffset
// const updateDashoffset = () => {
//   const height = document.documentElement.scrollHeight - window.innerHeight;
//   const dashoffset = pathLength - (getTop() * pathLength) / height;

//   scrollUpSvgPath.style.strokeDashoffset = dashoffset;
// };

// //onScroll

// window.addEventListener("scroll", () => {
//   updateDashoffset();
//   if (getTop() > offset) {
//     scrollUp.classList.add("scroll-up--active");
//   } else {
//     scrollUp.classList.remove("scroll-up--active");
//   }
// });

// //click
// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// We select the element we want to target
// We select the element we want to target
var target = document.querySelector(".container-main");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let observer = new IntersectionObserver(callback);

observer.observe(target);
