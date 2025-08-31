import gsap from 'gsap';
import Scroll from '../utils/Scroll';

const triggerScroll = () => {
  const scrollTrigger = document.getElementsByClassName('scroll-trigger');

  for (let i = 0; i < scrollTrigger.length; i++) {
    scrollTrigger[i].addEventListener('click', initTriggerScroll());
  }

  function initTriggerScroll() {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    // top -= this.header.clientHeight;
    // this.menu.classList.remove('active');

    // for (let i = 0; i < this.menuTrigger.length; i++) {
    //   this.menuTrigger[i].classList.remove('active');
    // }

    Scroll.to(top, 2);
  }
}

window.addEventListener("DOMContentLoaded", triggerScroll, false);