import DeviceController from './device-controller';

class initSwiper {
  constructor() {
    this.deviceController = new DeviceController();
  }
  init() {
    this.swiperArry = [];
    let swiperContainer = document.getElementsByClassName('swiper-container');
    for (let i = 0; i < swiperContainer.length; i++) {
      let excute = false;
      let thisSwiper = swiperContainer[i];
      let slides = thisSwiper.getAttribute('data-slides') === 'auto' ? 'auto' : parseFloat(thisSwiper.getAttribute('data-slides'));
      let slidesPc = thisSwiper.getAttribute('data-slidesPc') === 'auto' ? 'auto' : parseFloat(thisSwiper.getAttribute('data-slidesPc'));
      let scrollbar = (thisSwiper.getAttribute('data-scrollbar') === 'true') ? {
        el: thisSwiper.parentElement.getElementsByClassName('swiper-scrollbar')[0],
      } : false;
      let scrollbarPc = (thisSwiper.getAttribute('data-scrollbarPc') === 'true') ? {
        el: thisSwiper.parentElement.getElementsByClassName('swiper-scrollbar')[0],
      } : {};
          let pagination = (thisSwiper.getAttribute('data-pagination') === 'true') ? {
      el: thisSwiper.parentElement.getElementsByClassName('swiper-pagination')[0],
    } : false;
    let paginationPc = (thisSwiper.getAttribute('data-paginationPc') === 'true') ? {
      el: thisSwiper.parentElement.getElementsByClassName('swiper-pagination')[0],
    } : false;
      let navigation = (thisSwiper.getAttribute('data-navigation') === 'true') ?
        {
          nextEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-next')[0],
          prevEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-prev')[0],
          clickable: true
        } : {};
      let navigationPc = (thisSwiper.getAttribute('data-navigationPc') === 'true') ?
        {
          nextEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-next')[0],
          prevEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-prev')[0],
          clickable: true
        } : {};
      let speed = parseInt(thisSwiper.getAttribute('data-speed'));
      let autoplay;
      let speedPc = speed;
      let speedSp = speed;

      if (thisSwiper.getAttribute('data-autoplay') === 'marquee') {
        autoplay = {
          delay: 0,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
          preventInteractionOnTransition: true,
        };
        speedPc = speed * (1 - .27291666666666664);
      } else if (thisSwiper.getAttribute('data-autoplay') === 'false') {
        autoplay = false;
      } else if (thisSwiper.getAttribute('data-autoplay') !== 'false' && thisSwiper.getAttribute('data-autoplay') !== 'marquee') {
        autoplay = {
          delay: parseInt(thisSwiper.getAttribute('data-autoplay')),
          pauseOnMouseEnter: true,
          // disableOnInteraction: false,
          preventInteractionOnTransition: true,
        };
      }
      if (window.innerWidth < this.deviceController.getDevice('sm') && thisSwiper.getAttribute('data-swiper') === 'true') {
        excute = true;
      } else if (window.innerWidth > this.deviceController.getDevice('sm') && thisSwiper.getAttribute('data-swiperPc') === 'true') {
        excute = true;
      }
      if (excute) {
        let swiper = new Swiper(thisSwiper, {
          speed: speedSp,
          initialSlide: parseInt(thisSwiper.getAttribute('data-initialslide')),
          autoplay: autoplay,
          loop: (thisSwiper.getAttribute('data-loop') === 'true') ? true : false,
          // loopAdditionalSlides: loopedSlides,
          centeredSlides: (thisSwiper.getAttribute('data-center') === 'true') ? true : false,
          slidesPerView: slides,
          spaceBetween: parseInt(thisSwiper.getAttribute('data-space')),
          slidesPerGroup: 1,
          scrollbar: scrollbarPc,
          pagination: pagination, 
          navigation: navigation,
          simulateTouch: false,
          breakpoints: {
            750: {
              speed: speedPc,
              slidesPerView: slidesPc,
              // loopAdditionalSlides: loopedSlides,
              centeredSlides:(thisSwiper.getAttribute('data-centerPc') === 'true') ? true : false,
              scrollbar: scrollbarPc,
              pagination: paginationPc,
              navigation: navigationPc,
              spaceBetween: parseInt(thisSwiper.getAttribute('data-spacePc'))
            }
          }
        });
        this.swiperInstance = swiper;
        this.swiperArry.push({
          swiper: this.swiperInstance,
          elm: thisSwiper
        });
      }
    }
  }
}

export default initSwiper