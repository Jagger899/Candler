const menuBtn = document.querySelector('.header__button-menu');
const menuMobile = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('header__nav--open')
})

const swiperFeedback = new Swiper('.feedback__slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperCertificates = new Swiper('.certificates__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween:20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
    },
    609: {
      slidesPerView: 3,
    },

    // 608: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // 768: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 50,
    // },
  },
});

const accordeon = document.querySelector('.accordeon');
console.log(accordeon);
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');
console.log(accordeonTitles);

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

    if (currentText.classList.contains('accordeon__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentText.style.maxHeight = null;
    }
  })
})