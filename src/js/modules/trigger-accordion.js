const triggerAccordion = () => {
    const target = document.getElementsByClassName('accordion-target')[0];
    const wrapper = document.getElementsByClassName('accordion-wrapper')[0];
    const wrapperInner = document.getElementsByClassName('accordion-wrapper__inner')[0];

    target.addEventListener('click', initTriggerAccordion());

    function initTriggerAccordion() {
      const elm = this;
      if (elm.classList.contains('open')) {
        elm.classList.remove('open');
        wrapper.setAttribute('style', `height: 0`);
        wrapper.classList.remove('open');
      } else {
        elm.classList.add('open');
        wrapper.setAttribute('style', `height: ${wrapperInner.clientHeight}px`);
        wrapper.classList.add('open');
      }
    }

}

window.addEventListener("DOMContentLoaded", triggerQa, false);