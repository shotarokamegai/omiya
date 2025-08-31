class triggerCredit {
  constructor() {
    const credit = document.getElementsByClassName('look-credit');
    const creditTitle = document.getElementsByClassName('look-credit-title');

    for (let i = 0; i < creditTitle.length; i++) {
      creditTitle[i].addEventListener('click', initTriggerCredit);
    }

    function initTriggerCredit(e) {
      let elm = e.currentTarget;
      let parent = elm.parentNode;
      let self = parent.getElementsByClassName('this')[0];
      let inner = self.getElementsByClassName('look-credit__inner')[0];
      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        self.setAttribute('style', `height: ${0}px; `);
      } else {
        parent.classList.add('open');
        self.setAttribute('style', `height: ${inner.clientHeight}px; `);
      }
    }
  }
}

export default triggerCredit