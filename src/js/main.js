import * as THREE from 'three';
// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";

class main {
  constructor(webgl) {
    this.webgl = webgl;
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.container = document.getElementById('container');
    this.logo = document.getElementById('logo');
    this.cta = document.getElementById('cta');
    this.theme = document.getElementById('theme');
    this.ellipse = document.getElementById('ellipse');
    this.cur = document.getElementById('cur');
    this.top = document.getElementById('top');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.headerEllipse = document.getElementById('header-ellipse');
    this.speaker = document.getElementsByClassName('trigger-speaker');
    this.speakerOverlay = document.getElementById('speaker');
    this.speakerNameJa = document.getElementById('speaker-name-ja');
    this.speakerNameEn = document.getElementById('speaker-name-en');
    this.speakerText = document.getElementById('speaker-text');
    this.speakerDesc = document.getElementById('speaker-desc');
    this.speakerLink = document.getElementById('speaker-link');
    this.speakerCredit = document.getElementById('speaker-credit');
    this.speakerFace = document.getElementsByClassName('speaker-face')[0];
    this.keyvImg = document.getElementsByClassName('keyv-img');
    this.qa = document.getElementsByClassName('qa-faq');
    this.fixed = document.getElementsByClassName('fixed');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.ctaAbsolute = document.getElementById('ctaabsolute');
    this.scroller = document.body;
    this.sp = false;
    this.dir = 'enter';
    this.moving = false;
    this.initiated = false;
    this.index = 0;
    this.next = 1;
    this.lerpAmount = 0;
    // this.test = false;
    // let staticPath = 'sustainability-summit/'

    // Splitting();
    // this.checkBreakPoint();
    // this.animationScroll();

    gsap.registerPlugin(ScrollTrigger);

    // if (this.test) {
    //   staticPath = 'sustainability-summit/test/'
    // }
    // let path = '';

    // let disp = `/c/${staticPath}assets/img/top/disp.jpg`;
    // let white = `/c/${staticPath}assets/img/top/white.jpg`;
    // let img1 = `/c/${staticPath}assets/img/top/${path}kv1.jpg`;
    // let img2 = `/c/${staticPath}assets/img/top/${path}kv2.jpg`;
    // let img3 = `/c/${staticPath}assets/img/top/${path}kv3.jpg`;
    // let img4 = `/c/${staticPath}assets/img/top/${path}kv4.jpg`;
    // let img5 = `/c/${staticPath}assets/img/top/${path}kv5.jpg`;

    // if (this.sp) {
    //   this.cta.classList.add('active');
    //   this.scroller = this.container;
    // }

    // this.scene = new THREE.Scene();
    // this.renderer = new THREE.WebGLRenderer({
    //   antialias: false,
    // });

    // this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    // this.renderer.setSize(this.width, this.height);

    // this.loadManager = new THREE.LoadingManager();
    // this.loader = new THREE.TextureLoader(this.loadManager);

    // this.img1 = this.loader.load(img1);
    // this.img2 = this.loader.load(img2);
    // this.img3 = this.loader.load(img3);
    // this.img4 = this.loader.load(img4);
    // this.img5 = this.loader.load(img5);
    // this.disp = this.loader.load(disp);
    // this.white = this.loader.load(white);
    // this.textures= [this.img1, this.img2, this.img3, this.img4, this.img5];

    // this.aspect = 1080 / 1920;

    // this.loadManager.onLoad = () => {
    //   this.setting();
    //   this.init();
    //   this.lenis();
    //   setTimeout(() => {
    //     this.initiated = true;
    //   }, 1600);
    // };
    this.init();
    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (let i = 0; i < this.qa.length; i++) {
      this.qa[i].addEventListener('click', this.triggerQa.bind(this));
    }
    // for (let i = 0; i < this.scrollTrigger.length; i++) {
    //   this.scrollTrigger[i].addEventListener('click', this.toScroll.bind(this));
    // }
    window.onresize = () => {
      this.resizeEvent();
    }
  }

  checkBreakPoint() {
    if (window.innerWidth < 750) {
      this.sp = true;
    }
  }

  triggerQa(e) {
    let elm = e.currentTarget;
    let a = elm.getElementsByClassName('a')[0];
    let aInner = a.getElementsByClassName('a__inner')[0];

    if (elm.classList.contains('active')) {
      elm.classList.remove('active');
      a.setAttribute('style', `height: 0`);
    } else {
      elm.classList.add('active');
      a.setAttribute('style', `height: ${aInner.clientHeight}px`);
    }
  }
  
  triggerMenu(e) {
    if (this.menu.classList.contains('active')) {
      this.menu.classList.remove('active');
      this.logo.classList.remove('active');
      this.headerEllipse.classList.remove('open');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.remove('active');
      }
    } else {
      this.menu.classList.add('active');
      this.logo.classList.add('active');
      this.headerEllipse.classList.add('open');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.add('active');
      }
    }
  }

  toScroll(e) {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    if (elm.getAttribute('data-target') === 'theme' && window.innerWidth < 750) {
      this.dir = 'enter';
      this.scrollDown();
      top = 1;
    }

    this.headerEllipse.classList.remove('open');
    this.menuTrigger[0].classList.remove('active');
    this.menu.classList.remove('active');
    this.logo.classList.remove('active');

    Scroll.to(top, 2);
  }


  init() {
    this.resizeEvent();
    window.scrollTo(0, 0);
    document.body.classList.add('loaded');
  }

  topGif() {
    if (!document.body.classList.contains('original')) {
      document.body.classList.add('original');
    }
    for (let i = 0; i < this.keyvImg.length; i++) {
      this.keyvImg[i].classList.remove('active');
    }
    this.keyvImg[this.index].classList.add('active');
    this.tween = gsap.to(this.material.uniforms.uProgress, {
			value: 1.0,
			ease: [0.32, 0, 0.67, 0],
			duration: 1.4,
			onComplete: () => {
				this.index = this.index + 1;
				if (this.index > this.keyvImg.length - 1) {
					this.index = 0;
				}
				this.next = this.next + 1;
				if (this.next > this.keyvImg.length - 1) {
					this.next = 0;
				}
				this.material.uniforms.uCurrentImage.value = this.textures[this.index];
				this.material.uniforms.uNextImage.value = this.textures[this.next];
				this.material.uniforms.uProgress.value = 0.0;
			}
	  })
  }
  lerp(a, b, t) {
    if(b == a) return a;
    return a + t * (b - a);
  }
  lerpInterval() {
    this.lerpAmount = this.lerpAmount+0.05;
    let lerp = this.lerp(this.lerpAmount, 1, 0.1);

    if (this.dir === 'enter') {
      gsap.to(this.material.uniforms.uAnimation, {
        value: lerp,
        duration: 0.05,
        ease: "expo.in",
      });
      gsap.to('.topdisappear', {
        alpha: `${1 - lerp}`,
        ease: "power1.out",
      });
      gsap.to('.topdisappearfirst', {
        alpha: `${1 - lerp}`,
        ease: "power1.out",
      });
      if (this.lerpAmount > .99) {
        clearInterval(this.lerp_);
        this.moving = false;
        // console.log(this.theme.offsetTop)
        // window.scrollTo(this.theme.offsetTop+100, 0);
        this.header.classList.add('revert');
        this.cta.classList.add('active');
        for (let i = 0; i < this.fixed.length; i++) {
          this.fixed[i].classList.add('active');
        }
        this.ctaAbsolute.classList.add('disable');
        this.top.setAttribute('style', 'z-index: 0;');
        this.ellipse.classList.remove('pause');
        this.lerpAmount = 1;
      }
    } else if (this.dir === 'enterback') {
      this.top.setAttribute('style', 'z-index: 10;');
      gsap.to(this.material.uniforms.uAnimation, {
        value: `${1 - lerp}`,
        duration: 0.05,
        ease: "expo.in",
      });
      if (this.lerpAmount > .99) {
        clearInterval(this.lerp_);
        this.moving = false;
      } else {
        gsap.to('.topdisappear', {
          alpha: `${lerp}`,
          ease: "power1.out",
        });
        console.log(lerp)
        gsap.to('.topdisappearfirst', {
          alpha: `${lerp}`,
          ease: "power1.out",
        });
      }
    }
  }
  scrollDown() {
    if (!this.moving) {
      // console.log('scrolldown');
      let timeout = 1425;
      this.moving = true;
      clearInterval(this.lerp_);
      if (this.initiated) {
        this.ellipse.classList.add('pause');
        if (this.sp) {
          timeout = 925;
        }
      }
      setTimeout(() => {
        clearInterval(this.lerp_);
        this.dir = 'enter';
        this.lerpAmount = 0;
        this.lerp_ = setInterval(this.lerpInterval.bind(this), 10);
      }, timeout);
    }
  }
  scrollUp() {
    // console.log('scrollup');
    this.moving = true;
    clearInterval(this.lerp_);
    this.dir = 'enterback';
    this.lerpAmount = 0;
    this.header.classList.remove('revert');
    this.cta.classList.remove('active');
    for (let i = 0; i < this.fixed.length; i++) {
      this.fixed[i].classList.remove('active');
    }
    this.ctaAbsolute.classList.remove('disable');
    setTimeout(() => {
      this.lerp_ = setInterval(this.lerpInterval.bind(this), 10);
    }, 250);
  }
  animationScroll() {
    let show = document.getElementsByClassName('show');
    let bar = document.getElementsByClassName('center-bar');
    let dot = document.getElementsByClassName('center-dot');
    let splitShow = document.getElementsByClassName('splitshow');
    let disappear = document.getElementsByClassName('disappear');
    let scaleUp = document.getElementsByClassName('scaleup');
    let parallax = document.getElementsByClassName('parallax');
    let zoom = document.getElementsByClassName('zoom');
    let targetImg = document.getElementsByClassName('target-img');
    let splitting = document.getElementsByClassName('titleanim');
    let top = document.getElementById("top");
    let scheduleWrapper = document.getElementById("schedule-wrapper");
    let center = document.getElementById("center");
    let entry = document.getElementById('entry');

    gsap.to(center, {
      height: '99%',
      // ease: "power4.inOut",
      scrollTrigger: {
                    // eventsTarget: this.scroller,
            // content: '#main',
        trigger: scheduleWrapper,
        start: `top center`,
        end: `bottom top`,
        scrub: .5,
        invalidateOnRefresh: true,
      }
    });
    if (window.innerWidth > 750) {
      for (let i = 0; i < disappear.length; i++) {
        let elm = disappear[i];
        gsap.to(elm, {
          alpha: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: elm,
            start: `top top`,
            end: `bottom center`,
            scrub: 1,
          invalidateOnRefresh: true,
          }
        });
      }
    } else {
      const wrapper = document.querySelector(".parent-wrapper");
      const slides = gsap.utils.toArray(".slide");
      const firstTheme = gsap.utils.toArray(".first-section");
      const theme = gsap.utils.toArray(".theme");
          
      // コンテナの幅を取得
      const wrapperWidth = wrapper.offsetWidth;
          
      // 横スクロールアニメーションの設定
      gsap.to(slides, {
        xPercent: `${-100 * (slides.length - 1)}`, // -X軸方向に移動
        ease: "none", // アニメーションのイージング(noneは定速)
        // ease: "power4.inOut",
        scrollTrigger: {
                      // eventsTarget: this.scroller,
            // content: '#main',
          trigger: wrapper, // アニメーション開始のトリガー要素
          pin: true, // 要素を固定
          scrub: 1, // スクロール量に合わせてアニメーション
          start: `center center-=${wrapper.clientHeight/2}`, // アニメーションが始まる位置
          // start: "center center", // アニメーションが始まる位置
          end: `+=${wrapperWidth}`, // アニメーションが終わる位置
          anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
          invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
        },
      });
      gsap.to(theme, {
        alpha: `1`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: theme,
          start: `top bottom-=${window.innerHeight/2}`,
          end: `top bottom-=${window.innerHeight/1.5}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
          }
        }
      });
      gsap.to(firstTheme, {
        y: `-40%`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: theme,
          start: `top bottom+=${window.innerHeight/1.5}`,
          end: `top bottom`,
          scrub: 1,
          onEnter: () => {
            // let shows = entry.getElementsByClassName('show');
            // console.log(shows)
            // for (let i = 0; i < shows.length; i++) {
            //   shows[i].classList.add('active');
            // }
          }
          // invalidateOnRefresh: true,
        }
      });
      gsap.to(firstTheme, {
        // y: `10%`,
        scale: .95,
        alpha: 0, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: theme,
          start: `top bottom`,
          end: `top bottom-=${window.innerHeight/2}`,
          scrub: 1,
          onEnter: () => {
            // let shows = entry.getElementsByClassName('show');
            // console.log(shows)
            // for (let i = 0; i < shows.length; i++) {
            //   shows[i].classList.add('active');
            // }
          }
          // invalidateOnRefresh: true,
        }
      });
    }

    for (let i = 0; i < targetImg.length; i++) {
      let target = targetImg[i];
      let path1 = 'polygon(0px 0px, 100% 0px, 100% 0%, 0% 0%)';
      let path2 = "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)";

      let clip_polygon = gsap.timeline({
        scrollTrigger: {
                      // eventsTarget: this.scroller,
            // content: '#main',
          trigger: target,
          start: "top bottom",
          end: "center center",
          scrub: true,
        }
      });
      clip_polygon.fromTo(
        target,
        {
          clipPath: path1
        },
        {
          clipPath: path2,
          duration: 1.5
        }
      );
    }
    for (let i = 0; i < splitting.length; i++) {
      let elm = splitting[i];
      let char = elm.getElementsByClassName('char');
      let start = `center bottom+=${window.innerHeight*.2}px`;
      for (let j = 0; j < char.length; j++) {
        gsap.to(char, {
          alpha: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            start: start, 
            scrub: true,
            invalidateOnRefresh: true,
          },
          stagger: {
            from: "start", //左からアニメーション start、center、edges、random、endが指定できる
            amount: `${j*.1}` //0.1秒ズラしてアニメーション
          }
        });
      }
    }
    for (let i = 0; i < splitShow.length; i++) {
      let elm = splitShow[i];
      let start = `center bottom`;
      if (!elm.classList.contains('fixed')) {
        if (elm.classList.contains('first')) {
          start = 'top bottom+=50%';
        }
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            elm.classList.add('active');
          },
        }
      });
      }
    }
    for (let i = 0; i < dot.length; i++) {
      let elm = dot[i];
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: `top center+=${window.innerHeight/4}`, 
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            elm.classList.add('active');
          }
        }
      });
    }
    for (let i = 0; i < bar.length; i++) {
      let elm = bar[i];
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: `top center`, 
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            elm.classList.add('active');
          }
        }
      });
    }
    for (let i = 0; i < show.length; i++) {
      let elm = show[i];
      let start = `center bottom`;
      if (!elm.classList.contains('fixed')) {
        if (elm.classList.contains('first')) {
          start = `top bottom+=50%`;
        }
        if (elm.classList.contains('firstt')) {
          start = `top bottom+=75%`;
        }
        gsap.to(elm, {
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            start: start, 
            onEnter: () => {
              elm.classList.add('active');
            }
          }
        });
      }
    }
    for (let i = 0; i < scaleUp.length; i++) {
      let elm = scaleUp[i];
      gsap.to(elm, {
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `center center`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }
    for (let i = 0; i < parallax.length; i++) {
      let elm = parallax[i];
      let amount = elm.getAttribute('data-amount');
      gsap.to(elm, {
        y: () => `${amount}`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }
    for (let i = 0; i < zoom.length; i++) {
      let elm = zoom[i];
      gsap.to(elm, {
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    }
    gsap.to(top, {
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: top,
        start: `top top`,
        end: `top top-=${1}px`,
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          this.scrollDown();
        },
        onEnterBack:() => {
          this.scrollUp();
        }
      },
    });
    gsap.to(entry, {
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: entry,
        start: `top center`,
        end: `bottom bottom-=${this.footer.clientHeight*1.5}px`,
        // end: `top top-=${5}px`,
        // end: `bottom bottom-=${window.innerHeight*.5}`,
        scrub: true,
          invalidateOnRefresh: true,
        onEnter: () => {
          this.cta.classList.remove('active');
        },
        onLeave: () => {
          this.cta.classList.add('active');
        },
        onEnterBack: () => {
          this.cta.classList.remove('active');
        },
        onLeaveBack: () => {
          this.cta.classList.add('active');
        },
      },
    });
  }

  setting() {
    this.webgl.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      (180 * (2 * Math.atan(this.height / 2 / 800))) / Math.PI,
      this.width / this.height,
      1,
      100000
    );
    this.camera.position.set(0, 0, 800);
    this.setMesh();
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    ScrollTrigger.refresh();
    // this.checkBreakPoint();
  }

  setMesh() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.uniforms = {
        resolution: {
          type: 'v2',
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        imageResolution: {
          type: 'v2',
          value: new THREE.Vector2(2880, 1800),
        },
        uAnimation: {
          value: 0,
        },
        uProgress: { 
          value: 0.0
        },
        uCurrentImage: {
          value: this.img1,
        },
        uNextImage: {
          value: this.img2,
        },
        uDisp: {
          value: this.disp,
        },
        uWhite: {
          value: this.white,
        },
    }
    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: this.uniforms,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.mesh.scale.x = this.width;
    this.mesh.scale.y = this.height;
    this.onRaf();
  }
  onRaf() {
    let frame = 0;
    const tick = () => {
      requestAnimationFrame(tick);
      frame++;
      // フレーム数が２で割り切れなければ描画しない
      if (frame % 2 == 0) {
        return;
      }
      // console.log(frame)
      // 描画
      this.renderer.render(this.scene, this.camera);
    }
    tick();
  }
  lenis() {
    let lerp = .8;
    let duration = 1.1;
    if (this.sp) {
      lerp = .3;
      duration = 2;
      this.lenisInstance = new Lenis({
        lerp: lerp,
        duration: duration,
        smooth: true,
        smoothTouch: true,
      })
    } else {
      if (this.browserName === 'Safari' && parseFloat(this.browserVersion) < 14) {

      } else {
        this.lenisInstance = new Lenis({
          lerp: lerp,
          duration: duration
        })
      }
    }

    if (this.lenisInstance) {
      this.lenisInstance.on('scroll', () => {
        ScrollTrigger.update
      })

      gsap.ticker.add((time)=>{
        this.lenisInstance.raf(time * 1000)
      })
    }
  }
}

window.addEventListener("load", () => {
  const webgl = new main(document.querySelector("#canvas"));
});
