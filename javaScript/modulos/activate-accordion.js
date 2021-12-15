export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.active = "ativo";
  }

  toggleAccordion(accordion) {
    accordion.classList.toggle(this.active);
    accordion.nextElementSibling.classList.toggle(this.active);
  }

  //  adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((accordion) => {
      accordion.addEventListener("click", () =>
        this.toggleAccordion(accordion)
      );
    });
  }

  //  iniciar funcao
  init() {
    if (this.accordionList.length) {
      //  ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
