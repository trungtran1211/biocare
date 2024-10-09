// var swiper = new Swiper(".box4-swiper", {
//   slidesPerView: 1,
//   loop: true,
//   spaceBetween: 0,
//   breakpoints: {
//     1440: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//     },
//    navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
// });

// const dynu1 = window.matchMedia("(min-width: 1440px)");
// if (dynu1.matches) {
//   var swiper = new Swiper(".box4-swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 2,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 290,
//       depth: 300,
//       modifier: 1,
//       slideShadows: true,
//     },
//     loop: true,
//   });
// }
const box4 = window.matchMedia('(min-width: 1024px)')
if (box4.matches) {
  var swiper = new Swiper(".box4-swiper", {
    effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        
        coverflowEffect: {
          rotate: 0,
          stretch: 0, // Giảm giá trị để tránh méo slide
          depth: 265,
          modifier: 2,
          slideShadows: true,
        },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}

const box4mb = window.matchMedia('(max-width: 1024px)')
if (box4mb.matches) {
  var swiper = new Swiper(".box4-swiper", {
    speed: 1000,
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    spaceBetween: 40,
    autoplay: {
      delay: 1100,
      disableOnInteraction: false,
    },
    
  });
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbz_U58r18pFVXDgn0ccVLqsFAxr3w6_yLdjoGV62nWXlqvAerMUtrwid_14CGyIQzME/exec'

document.querySelectorAll("form").forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
});


const may = window.matchMedia('(min-width: 1440px)')
if (may.matches) {
  var swiper = new Swiper(".box6", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    loopedSlides: 3,
    autoplay: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -10,
      depth: 0,
      modifier: 3,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
}


const may2 = window.matchMedia('(max-width: 768px)')
if (may2.matches) {
  var swiper = new Swiper(".box6", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}


const animateList = [].slice.call(
  document.querySelectorAll(".__animate__animated")
);
animateList.map(function (animateEl) {
  new Waypoint({
    element: animateEl,
    offset: "bottom-in-view",
    handler: function (direction) {
      //https://stackoverflow.com/a/56914528/3929620
      animateEl.className = animateEl.className.replace(
        /__animate__/g,
        "animate__"
      );
      this.destroy();
    },
  });
});