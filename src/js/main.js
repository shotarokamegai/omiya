// import imagesLoaded from 'imagesloaded'
import Splitting from "splitting";
import "./modules/trigger-menu";
import "./modules/trigger-modal";
import DeviceController from "./modules/device-controller";
import Common from "./modules/Common";
// import "./modules/movie";
import initSwiper from "./modules/init-swiper";
import Home from "./modules/Home";
import InitLenis from "./modules/lenis";
import scrollAnimation from "./modules/scroll-animation";
import Swiper from "swiper";
import triggerModal from "./modules/trigger-modal";

class main {
  constructor() {
    // Splitting();
    // this.common = new Common();
    new scrollAnimation();
    // new triggerModal();
    // new Home();
    this.swiper = new initSwiper();
    this.deviceController = new DeviceController();
    this.root = document.getElementById('container');
    this.lenis = new InitLenis();
    this.lenis.init();
    this.init();
  }
  init() {
    this.swiper.init();
    setTimeout(() => {
      this.root.classList.add('loaded');
    }, 100)
  }
}


window.addEventListener('DOMContentLoaded', () => {
  new main();
});