const swiper1 = new Swiper('#swiper1', {
            navigation: {
                nextEl: '#customNextButton1',
                prevEl: '#customPrevButton1',
            },
            slidesPerView: 4, // Показывать 3 слайда одновременно
    spaceBetween: 30, // Расстояние между слайдами (в пикселях)
       breakpoints: {
        // when window width is >= 320px
        320: { // Для экранов от 320px
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: { // Для экранов от 768px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1010: { // Для экранов от 320px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1040: { // Для экранов от 320px
            slidesPerView: 3,
            spaceBetween: 30
        },
        1313: { // Для экранов от 1313px
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
        });

const swiper2 = new Swiper('#swiper2', {
            navigation: {
                nextEl: '#customNextButton2',
                prevEl: '#customPrevButton2',
            },
            slidesPerView: 4, // Показывать 3 слайда одновременно
    spaceBetween: 30, // Расстояние между слайдами (в пикселях)
       breakpoints: {
        // when window width is >= 320px
        320: { // Для экранов от 320px
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: { // Для экранов от 768px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1010: { // Для экранов от 320px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1040: { // Для экранов от 320px
            slidesPerView: 3,
            spaceBetween: 30
        },
        1313: { // Для экранов от 1313px
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
        });


const swiper3 = new Swiper('#swiper3', {
            navigation: {
                nextEl: '#customNextButton3',
                prevEl: '#customPrevButton3',
            },
            slidesPerView: 4, // Показывать 3 слайда одновременно
    spaceBetween: 30, // Расстояние между слайдами (в пикселях)
       breakpoints: {
        // when window width is >= 320px
        320: { // Для экранов от 320px
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: { // Для экранов от 768px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1010: { // Для экранов от 320px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1040: { // Для экранов от 320px
            slidesPerView: 3,
            spaceBetween: 30
        },
        1313: { // Для экранов от 1313px
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
        });




var swiper = new Swiper(".SwiperHotSell", {
    slidesPerView: 4, // Показывать 3 слайда одновременно
    spaceBetween: 30, // Расстояние между слайдами (в пикселях
  slidesPerGroup: 1,         // Скроллить по 1 слайду
    navigation: {
                nextEl: '#customNextButton',
                prevEl: '#customPrevButton',
            },
            breakpoints: {
        // when window width is >= 320px
        320: { // Для экранов от 320px
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: { // Для экранов от 768px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1010: { // Для экранов от 320px
            slidesPerView: 2,
            spaceBetween: 30
        },
        1040: { // Для экранов от 320px
            slidesPerView: 3,
            spaceBetween: 30
        },
        1313: { // Для экранов от 1313px
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
});

const swiper4 = new Swiper('#swiper4', {
    // Основные настройки
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,  // Скроллить по 1 слайду
    autoHeight: true, // Автоматическая высота (если контент разный)
    
    // Навигация
    navigation: {
        nextEl: '#customNextButton4',
        prevEl: '#customPrevButton4',
    },
    
    // Адаптация под разные экраны
    breakpoints: {
        320: {   // Мобильные (до 768px)
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {   // Планшеты (вертикальная ориентация)
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {   // Планшеты (горизонтальная ориентация)
            slidesPerView: 1,
            spaceBetween: 25
        },
        1275: {  // Ноутбуки
            slidesPerView: 2,
            spaceBetween: 30
        },
        1440: {  // Большие экраны
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

var swiper = new Swiper(".swiperLicenses", {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: false,
  loop: false, // Отключаем loop для точного позиционирования
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  // Критически важные параметры
  autoHeight: false,
  observer: true,
  observeParents: true,
  resizeObserver: true,
  on: {
    init: function() {
      this.update(); // Принудительное обновление после инициализации
    }
  }
});