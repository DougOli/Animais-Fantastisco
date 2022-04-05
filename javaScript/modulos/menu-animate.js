export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.ativo = "ativo";
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distancia de cada item em relação ao topo
  // do site

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.ativo);
      } else if (item.element.classList.contains(this.ativo)) {
        item.element.classList.remove(this.ativo);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.checkDistance();
      this.getDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}
