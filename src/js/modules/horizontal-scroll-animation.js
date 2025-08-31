import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const horizontalScrollAnimation = () => {
const wrapper = document.querySelector(".function-wrapper");
const slides = gsap.utils.toArray(".function");

// コンテナの幅を取得
const wrapperWidth = wrapper.offsetWidth;

// 横スクロールアニメーションの設定
gsap.to(slides, {
  xPercent: -100 * (slides.length - 1), // -X軸方向に移動
  ease: "none", // アニメーションのイージング(noneは定速)
  scrollTrigger: {
    trigger: wrapper, // アニメーション開始のトリガー要素
    pin: true, // 要素を固定
    scrub: 1, // スクロール量に合わせてアニメーション
    start: `center center`, // アニメーションが始まる位置
    end: `+=${wrapperWidth}`, // アニメーションが終わる位置
    anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
    invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
    onUpdate: (e) => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      if (e.progress < (1 / 16 )) {
        slides[0].classList.add('active');
        slides[1].classList.add('active');
        slides[2].classList.add('active');
      } else if (e.progress > (1 / 16 ) && e.progress < ((1 / 16) * 2 )) {
        slides[1].classList.add('active');
        slides[2].classList.add('active');
        slides[3].classList.add('active');
      } else if (e.progress > ((1 / 16) * 2 ) && e.progress < ((1 / 16) * 3 )) {
        slides[2].classList.add('active');
        slides[3].classList.add('active');
        slides[4].classList.add('active');
      } else if (e.progress > ((1 / 16) * 3 ) && e.progress < ((1 / 16) * 4 )) {
        slides[3].classList.add('active');
        slides[4].classList.add('active');
        slides[5].classList.add('active');
      } else if (e.progress > ((1 / 16) * 4 ) && e.progress < ((1 / 16) * 5 )) {
        slides[4].classList.add('active');
        slides[5].classList.add('active');
        slides[6].classList.add('active');
      } else if (e.progress > ((1 / 16) * 5 ) && e.progress < ((1 / 16) * 6 )) {
        slides[5].classList.add('active');
        slides[6].classList.add('active');
        slides[7].classList.add('active');
      } else if (e.progress > ((1 / 16) * 6 ) && e.progress < ((1 / 16) * 7 )) {
        slides[6].classList.add('active');
        slides[7].classList.add('active');
        slides[8].classList.add('active');
      } else if (e.progress > ((1 / 16) * 7 ) && e.progress < ((1 / 16) * 8 )) {
        slides[7].classList.add('active');
        slides[8].classList.add('active');
        slides[9].classList.add('active');
      } else if (e.progress > ((1 / 16) * 8 ) && e.progress < ((1 / 16) * 9 )) {
        slides[8].classList.add('active');
        slides[9].classList.add('active');
        slides[10].classList.add('active');
      } else if (e.progress > ((1 / 16) * 9 ) && e.progress < ((1 / 16) * 10 )) {
        slides[9].classList.add('active');
        slides[10].classList.add('active');
        slides[11].classList.add('active');
      } else if (e.progress > ((1 / 16) * 10 ) && e.progress < ((1 / 16) * 11 )) {
        slides[10].classList.add('active');
        slides[11].classList.add('active');
        slides[12].classList.add('active');
      } else if (e.progress > ((1 / 16) * 11 ) && e.progress < ((1 / 16) * 12 )) {
        slides[11].classList.add('active');
        slides[12].classList.add('active');
        slides[13].classList.add('active');
      } else if (e.progress > ((1 / 16) * 12 ) && e.progress < ((1 / 16) * 13 )) {
        slides[12].classList.add('active');
        slides[13].classList.add('active');
        slides[14].classList.add('active');
      } else if (e.progress > ((1 / 16) * 13 ) && e.progress < ((1 / 16) * 14 )) {
        slides[13].classList.add('active');
        slides[14].classList.add('active');
        slides[15].classList.add('active');
      } else if (e.progress > ((1 / 16) * 14 ) && e.progress < ((1 / 16) * 15 )) {
        slides[14].classList.add('active');
        slides[15].classList.add('active');
      } else if (e.progress > ((1 / 16) * 15 ) && e.progress < ((1 / 16) * 16 )) {
        slides[15].classList.add('active');
      } 
    },
  },
});
}

window.addEventListener("DOMContentLoaded", horizontalScrollAnimation, false);