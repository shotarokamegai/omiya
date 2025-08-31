const mediaQuery = window.matchMedia('(min-width: 750px)');
const top = document.getElementById('top');
// 関数を定義
// ロード時に判定
checkWindow(mediaQuery);
// ブレイクポイントが切り替わったら判定

function checkWindow(windowSize) {
    // ウィンドウサイズが768px以上か
    if (windowSize.matches) {
        // 768px以上の時（PCの処理）
        console.log('PC');
        // top.setAttribute('style', `height: 100vh;`);
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        // this.videoY = -this.height/4;
        // this.animationScroll();
    } else {
        // 上記以外の時（SPの処理）
        // top.setAttribute('style', `height: ${window.innerHeight}px;`);
        // console.log('SP');
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        // this.videoY = -this.width/.84;
        // this.animationScroll();
    }
}

mediaQuery.addEventListener('change', checkWindow);