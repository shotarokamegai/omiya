const triggerMenu = () => {
    const menuTrigger = document.getElementsByClassName('menu-trigger');
    const menu = document.getElementById('menu');

    for (let i = 0; i < menuTrigger.length; i++) {
      menuTrigger[i].addEventListener('click', initTriggerMenu);
    }

    function initTriggerMenu() {
      if (menu) {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          for (let i = 0; i < menuTrigger.length; i++) {
            menuTrigger[i].classList.remove('active');
          }
        } else {
          menu.classList.add('active');
          for (let i = 0; i < menuTrigger.length; i++) {
            menuTrigger[i].classList.add('active');
          }
        }
      }
    }
}

window.addEventListener("DOMContentLoaded", triggerMenu, false);