import Lenis from 'lenis'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class InitLenis {
  constructor() {
  }
  init() {
    let lerp = .07;

    if (window.innerWidth < 750) {
      lerp = 1;
    }

    const easeInOutCubic = (x) => {
      return x < 0.5
        ? 4 * x * x * x
        : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    this.lenisInstance = new Lenis({
      lerp: lerp,
      smooth: true,
      direction: "vertical"
    })
    const scrollTrigger = document.getElementsByClassName('scroll-trigger');
    const menuTrigger = document.getElementsByClassName('menu-trigger');
    const menu = document.getElementById('menu');
    const header = document.getElementById('header');

    for (let i = 0; i < scrollTrigger.length; i++) {
      let target = document.getElementById(scrollTrigger[i].getAttribute('data-target'));
      scrollTrigger[i].addEventListener('click', () => {
        menu.classList.remove('active');
        for (let i = 0; i < menuTrigger.length; i++) {
          menuTrigger[i].classList.remove('active');
        }
        this.lenisInstance.scrollTo(target, {
          duration: 1,
          easing: easeInOutCubic,
          offset: -1*header.clientHeight
        })
      })
    }
    this.lenisInstance.on('scroll', (e) => {
      ScrollTrigger.update();
    })
    gsap.ticker.add((time)=>{
      this.lenisInstance.raf(time * 1000)
    })

  }
}

export default InitLenis