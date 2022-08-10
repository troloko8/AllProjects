
const slider = document.querySelector(".slider");
const slides = slider.children;

const mainInfo = document.querySelector(".main-info");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

function removeActives() {
  for (let x = 0; x < slides.length; x++) {
    if (slides[x].classList.contains("active")) {
      slides[x].classList.remove("active");
    }
  }
}

const moveSlider = (childSlider, target, index) => {

  for (let i = 0; i < childSlider.length; i++) {
    if (childSlider[i].classList.contains("active")) {
      index = i;
    }
  }

  if (target == arrowLeft) {
    removeActives();
    if (index == 0) {
      childSlider[childSlider.length - 1].classList.add("active");
    } else {
      childSlider[index - 1].classList.add("active");
    }
  }

  if (target == arrowRight) {
    removeActives();
    if (index == 1) {
      childSlider[0].classList.add("active");
    } else {
      childSlider[index + 1].classList.add("active");
    }
  }
};

mainInfo.addEventListener("click", (e) => {
  let target = e.target.closest(".arrow");
  let index;
  moveSlider(slides, target, index);
  // let index;

  // for (let i = 0; i < slides.length; i++) {
  //   if (slides[i].classList.contains("active")) {
  //     index = i;
  //   }
  // }

  // if (target == arrowLeft) {
  //   removeActives();
  //   if (index == 0) {
  //     slides[slides.length - 1].classList.add("active");
  //   } else {
  //     slides[index - 1].classList.add("active");
  //   }
  // }
  // if (target == arrowRight) {
  //   removeActives();
  //   if (index == 1) {
  //     slides[0].classList.add("active");
  //   } else {
  //     slides[index + 1].classList.add("active");
  //   }
  // }
});



// const courses = document.querySelector(".courses");
// const coursesChild = courses.children;

// courses.addEventListener("click", (e) => {
//   let item = e.target.closest(".courses__item");

//   for (let i = 0; i < coursesChild.length; i++) {
//     if (coursesChild[i] !== item && !item.classList.contains("act")) {
//       coursesChild[i].classList.add("hidden");
//     }
//     if (item.classList.contains("act")) {
//       coursesChild[i].classList.remove("hidden");
//     }
//   }

//   if (item.classList.contains("act")) {
//     item.classList.remove("act");
//   } else {
//     item.classList.add("act");
//   }

// });

function sliderMove(target) {
  let index;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      index = i;
    }
  }

  if (target == "right") {
    removeActives();
    if (index == 0) {
      slides[slides.length - 1].classList.add("active");
    } else {
      slides[index - 1].classList.add("active");
    }
  }
  if (target == "left") {
    removeActives();
    if (index == 2) {
      slides[0].classList.add("active");
    } else {
      slides[index + 1].classList.add("active");
    }
  }
}

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

function actContacts(index, number, className, elem) {
  if (window.pageYOffset >= index && !elem[number].children[0].classList.contains(className)) {
    elem[number].children[0].classList.add(className);
  }
  if (window.pageYOffset <= index && elem[number].children[0].classList.contains(className)) {
    elem[number].children[0].classList.remove(className);
  }
}

function actPartners(index, number, className, elem) {
  if (window.pageYOffset >= index && !elem[number].classList.contains(className)) {
    elem[number].classList.add(className);
  }
  if (window.pageYOffset <= index && elem[number].classList.contains(className)) {
    elem[number].classList.remove(className);
  }
}


if (isMobile) {

  $(".main-info").swipe({
    swipeRight: function (event, direction) {
      sliderMove(direction);
    }
  });

  $(".main-info").swipe({
    swipeLeft: function (event, direction) {
      sliderMove(direction);
    }
  });

  // const contact = document.querySelector(".contact__list").children;
  const partners = document.querySelector(".partners__box").children;
  const moreInf = document.querySelector(".moreInformation").children[1].children;
  const video = document.querySelector(".moreInformation").children[2].children;

  const windowNow = document.documentElement.clientHeight;
  // const indexTel = contact[0].getBoundingClientRect().bottom - windowNow - 30;
  // const indexFb = contact[1].getBoundingClientRect().bottom - windowNow - 30;
  // const indexTw = contact[2].getBoundingClientRect().bottom - windowNow - 30;
  // const indexLi = contact[3].getBoundingClientRect().bottom - windowNow - 30;
  const indexEndor = partners[0].getBoundingClientRect().bottom - windowNow - 30;
  const indexBinance = partners[1].getBoundingClientRect().bottom - windowNow - 30;
  const indexNewsFirst = moreInf[0].getBoundingClientRect().bottom - windowNow - 30;
  const indexNewsSecond = moreInf[1].getBoundingClientRect().bottom - windowNow - 30;
  const indexNewsThird = moreInf[2].getBoundingClientRect().bottom - windowNow - 30;
  const indexNewsForth = moreInf[3].getBoundingClientRect().bottom - windowNow - 30;
  const indexVideoFirst = video[0].getBoundingClientRect().bottom - windowNow - 30;
  const indexVideoSecond = video[1].getBoundingClientRect().bottom - windowNow - 30;

  window.addEventListener("scroll", () => {
    // actContacts(indexTel, 0, "actContact", contact);
    // actContacts(indexFb, 1, "actContact", contact);
    // actContacts(indexTw, 2, "actContact", contact);
    // actContacts(indexLi, 3, "actContact", contact);
    actPartners(indexEndor, 0, "actPartner", partners);
    actPartners(indexBinance, 1, "actPartner", partners);
    actPartners(indexNewsFirst, 0, "actPartner", moreInf);
    actPartners(indexNewsSecond, 1, "actPartner", moreInf);
    actPartners(indexNewsThird, 2, "actPartner", moreInf);
    actPartners(indexNewsForth, 3, "actPartner", moreInf);
    actPartners(indexVideoFirst, 0, "actVideo", video);
    actPartners(indexVideoSecond, 1, "actVideo", video);
  });
}

//CHANGE URL ADRESS LINKS

const socials = [
  {
    name: "?96",
    tl: "https://t.me/troloko8",
    tw: "https://twitter.com/GasmerSofia",
    fb: "https://www.facebook.com/profile.php?id=100001136248977&ref=bookmarks",
  },
  {
    name: "?111",
    tl: "https://t.me/san_ankrath1",
    tw: "https://twitter.com/San_Ankrath",
    fb: "https://www.facebook.com/profile.php?id=100006981254879&ref=bookmarks",
  },
  {
    name: "?62",
    tl: "https://t.me/emikioto",
    tw: "https://twitter.com/AnastasiaCrypto",
    fb: "https://www.facebook.com/emikioto",
  },
  {
    name: "?110",
    tl: "https://t.me/fjord9",
    tw: "https://twitter.com/SofiaC_97",
    fb: "https://www.facebook.com/profile.php?id=100045226421355",
  },
  {
    name: "?102",
    tl: "https://t.me/alinkazlaya",
    tw: "https://twitter.com/Alina58454841",
    fb: "https://www.facebook.com/profile.php?id=100001136248977&ref=bookmarks",
  },
  {
    name: "?999",
    tl: "https://t.me/andre_juravlo",
    tw: "https://twitter.com/6YKYcHoiNHzk3dH?s=09",
    fb: "https://www.facebook.com/profile.php?id=100001136248977&ref=bookmarks",
  },
  {
    name: "?88",
    tl: "https://t.me/nikol_nastia",
    tw: "https://twitter.com/Anastas50071790",
    fb: "https://www.facebook.com/profile.php?id=100002062978619",
  },
  {
    name: "?109",
    tl: "https://t.me/AvetisovaTanya",
    tw: "https://twitter.com/tanya_chichkan",
    fb: "https://www.facebook.com/profile.php?id=100017282561871",
  },
];

const urlText = window.location.search;
let fb = document.querySelector("#fb");
let tl = document.querySelector("#tl");
let tw = document.querySelector("#tw");
let li = document.querySelector("#li");

window.onload = function () {
  for (let i = 0; i < socials.length; i++) {
    if (urlText == socials[i].name) {
      fb.href = socials[i].fb;
      tl.href = socials[i].tl;
      tw.href = socials[i].tw;
      li.href = socials[i].li;
    }
  }
};

// $(".form__button").on("click", function (e) {
//   e.preventDefault();
//   var ths = $(this).closest(".form__tag");

//   $.ajax({
//     type: "POST",
//     url: "php/mail.php",
//     data: ths.serialize()
//   }).done(function () {
//     alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
//     setTimeout(function () {
//       ths.trigger("reset");
//     }, 1000);
//   });
//   return false;
// });



$(document).ready(function () {
  const popupClose = document.querySelector(".popup__close");
  const popup = document.querySelector(".popup");

  //   //E-mail Ajax Send
  $(".form__tag").submit(function () { //Change
    var th = $(this);

    $.ajax({
      type: "POST",
      url: "php/mail.php",//Change
      data: th.serialize()
    }).done(function () {
      popup.classList.add("active_popup");
      // alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


  popupClose.addEventListener("click", () => {
    popup.classList.remove("active_popup");
  });
});

