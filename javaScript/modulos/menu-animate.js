export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.ativo = "ativo";
    this.scrollAnimate = this.scrollAnimate.bind(this);
  }

  scrollAnimate() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add(this.ativo);
      } else if (section.classList.contains(this.ativo)) {
        section.classList.remove(this.ativo);
      }
    });
  }

  init() {
    this.scrollAnimate();
    window.addEventListener("scroll", this.scrollAnimate);
  }
}
