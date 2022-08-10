// mainInfo.addEventListener("click", (e) => {
//   let target = e.target.closest(".arrow");
//   let index;

//   for (let i = 0; i < slides.length; i++) {
//     if (slides[i].classList.contains("active")) {
//       index = i;
//     }
//   }

//   if (target == arrowLeft) {
//     removeActives();
//     if (index == 0) {
//       slides[slides.length - 1].classList.add("active");
//     } else {
//       slides[index - 1].classList.add("active");
//     }
//   }
//   if (target == arrowRight) {
//     removeActives();
//     if (index == 2) {
//       slides[0].classList.add("active");
//     } else {
//       slides[index + 1].classList.add("active");
//     }
//   }

// });