import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DeviceController from './device-controller';

gsap.registerPlugin(ScrollTrigger);

class scrollAnimation {
  constructor() {
    let container = document.getElementById('container');
    let home = document.getElementById('home');
    let top = document.getElementById('top');
    let vertical = document.getElementById('vertical');
    let about = document.getElementById('vertical');
    let addactive = document.getElementsByClassName('addactive');
    let fadeIn = document.getElementsByClassName('fade-in');
    let scrollTarget = document.getElementsByClassName('scroll-target');
    let scaleImage = document.getElementsByClassName('scale-image');
    let parallax = document.getElementsByClassName('parallax');
    let zoom = document.getElementsByClassName('zoom');
    let ratio = 832 / 1280;
    let pastW = window.innerWidth;
    this.deviceController = new DeviceController();

    window.scrollTo(0, 0);

    window.addEventListener("resize", () => {
      if ((window.innerWidth < this.deviceController.getDevice('sm') && pastW > this.deviceController.getDevice('sm')) || window.innerWidth > this.deviceController.getDevice('sm')) {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger on resize
      }
      pastW = window.innerWidth;
    });

    function getAmount(order, type) {
      let amount = order*window.innerHeight*.5;
      if (type === 'end') {
        amount = order*window.innerHeight*.5;
      }
      // if (amount < window.innerHeight) {
      //   amount = window.innerHeight;
      // }
      return amount;
    }

    // if (home) {
    //   let max = scrollTarget.length + 3;
    //   gsap.fromTo(top, {
    //     //  y: `0px`,
    //     }, {
    //     scrollTrigger: {
    //       trigger: top,
    //       start: `top top`, 
    //       end: () => `top top-=${window.innerHeight*7}`, 
    //       pin: true,
    //       invalidateOnRefresh: true,
    //       onEnter: () => {
    //         console.log('enter')
    //       },
    //       onLeave: () => {
    //         console.log('leave')
    //       }
    //     }
    //   });
    //   for (let i = 0; i < scrollTarget.length; i++) {
    //     let elm = scrollTarget[i];
    //     let order = parseFloat(elm.getAttribute('data-order'));
    //     order = max - order;
    //     let markers = true;
    //     if (elm.getAttribute('id') === 'logo') {
    //       markers = true;
    //       let logo = document.getElementById('logo');
    //       gsap.fromTo(logo, {
    //         y: () => '0px',
    //         autoAlpha: 1
    //         }, {
    //         y: `${(window.innerHeight/-2) - (elm.clientHeight/2)}`,
    //         autoAlpha: 0,
    //         // duration: 1,
    //         // ease: "power1.inOut",
    //         scrollTrigger: {
    //           trigger: () => window.innerWidth < this.deviceController.getDevice('sm') ? about: vertical,
    //           start: () => `top top+=${(max-1)*window.innerHeight/2 + window.innerHeight*0}`, 
    //           end: () => `bottom top+=${(max-1)*window.innerHeight/2 + window.innerHeight*0}`, 
    //           invalidateOnRefresh: true,
    //           scrub: 1,
    //           onEnter: () => {
    //             container.classList.add('scroll')
    //             console.log('onenter')
    //           },
    //           onLeave: () => {
    //             console.log('onleave')
    //           },
    //           onEnterBack: () => {
    //             container.classList.remove('scroll')
    //           },
    //         }
    //       });
    //     } else {
    //       gsap.fromTo(elm, {
    //          y: () => window.innerHeight / window.innerWidth > ratio ? window.innerHeight : window.innerWidth,
    //         }, {
    //         y: '0px',
    //         scrollTrigger: {
    //           trigger: () => window.innerWidth < this.deviceController.getDevice('sm') ? about: vertical,
    //           start: () => `top top+=${getAmount(order, 'start')}`, 
    //           end: () => `bottom top+=${getAmount(order, 'end')}`, 
    //           invalidateOnRefresh: true,
    //           scrub: 1,
    //         }
    //       });
    //     }
    //   }
    // }

    for (let i = 0; i < fadeIn.length; i++) {
      let elm = fadeIn[i];
      let start = `top bottom-=${window.innerHeight/4}`;
            let delay = elm.getAttribute('data-delay') ? parseInt(elm.getAttribute('data-delay')) * .1 : 0;
      if (window.innerWidth < this.deviceController.getDevice('sm')) {
        delay = 0;
      }
      gsap.fromTo(elm, {
        alpha: 0,
        y: `20px`
      }
        ,{
        alpha: 1,
        y: `0px`,
        duration: 1,
        delay: delay,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
        }
      });
    }

    for (let i = 0; i < scaleImage.length; i++) {
      let elm = scaleImage[i];
      let start = `top bottom-=${window.innerHeight/4}`;
      let img = elm.getElementsByTagName('img')[0];
      gsap.fromTo(img, {
         opacity: 0,
         y: `24px`,
         scale: 1.05
        }, {
         opacity: 1,
         y: `0px`,
         scale: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
        }
      });
    }

    for (let i = 0; i < addactive.length; i++) {
      let elm = addactive[i];
      let start = `top bottom-=${window.innerHeight/4}`;
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            if (!elm.classList.contains('active') && elm.classList.contains('typewriter')) {
              elm.classList.add('typing');
              let text = elm.getAttribute('data-text');
              let target = elm.getElementsByClassName('typewriter-target')[0];
              let index = 0; 
              function typeWriter() {
                  let randomInterval = Math.floor(Math.random() * 10) + 50;
                  if (index < text.length) {
                    target.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, randomInterval);
                  } else {
                    elm.classList.remove('typing');
                  }
              }
              typeWriter(); 
            }
            elm.classList.add('active');
          }
        }
      });
    }

    for (let i = 0; i < zoom.length; i++) {
      let elm = zoom[i];
      gsap.fromTo(elm, {
        // y: 0,
        alpha: 0,
        scale: () => `.9`,
      }, {
        alpha: 1,
        scale: () => `1`,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `center center`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }

    for (let i = 0; i < parallax.length; i++) {
      let elm = parallax[i];
      let amountPc = elm.getAttribute('data-amountPc');
      let amountSp = elm.getAttribute('data-amountSp');
      let amount = '';
      let child = elm.getElementsByTagName('img')[0];

      if (window.innerWidth < this.deviceController.getDevice('sm')) {
        amount =  amountSp;
      } else {
        amount =  amountPc;
      }
      gsap.fromTo(child, {
        // y: 0,
        y: () => `0`,
      }, {
        y: () => `${amount}%`,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }
  }
}

export default scrollAnimation;