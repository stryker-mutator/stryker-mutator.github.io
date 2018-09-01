import { handlers } from './document-click';

class NavbarToggle {
  constructor(toggler) {
    this.toggleTarget = document.querySelector(toggler.dataset.target);
    toggler.addEventListener('click', (e) => {
      this.toggle();
      e.stopPropagation();
    });
  }

  toggle() {
    this.toggleTarget.classList.toggle('show');
  }

  hide() {
    this.toggleTarget.classList.remove('show');
  }
}

export function register() {
  const navBars = [];
  for (const navbar of document.getElementsByClassName('navbar-toggler')) {
    navBars.push(new NavbarToggle(navbar));
  }
  function reset() {
    navBars.forEach(navbar => navbar.hide());
  }
  handlers.push(reset);
}

