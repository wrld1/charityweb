let animItems = document.querySelectorAll("._anim-items");
var nav = document.querySelector("nav");
var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    nav.classList.add("bg-primary", "shadow");
    nav.classList.remove("navbar-color");
  } else {
    nav.classList.remove("bg-primary", "shadow");
    nav.classList.add("navbar-color");
  }
});

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let yOffset = window.pageYOffset;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

function stopVideo() {
  videoPlayer.style.display = "none";
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}

var swiper = new Swiper(".mySwiper", {
  cssMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kir260302@gmail.com",
    Password: "330FA96A4B6F929201433AE8C38979684204",
    To: "wrld4282@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then((message) => alert("Повідомлення успішно відправлено"));
}
