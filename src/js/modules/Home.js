
class Home{
  constructor(){
    this.home = document.getElementById('home');
    this.top = document.getElementById('top');
    if (this.home) {
        this.resizeEvent();
        window.onresize = () => {
          this.resizeEvent();
        }
    }
  }
  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    this.top.style.setProperty('--vh', `${vh}px`);
  }

}

export default Home;