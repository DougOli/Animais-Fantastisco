export default class Modal {
  constructor(abrir, fechar, containerModal) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);

    // bind diz ao callback parametros
    // fazer referenciaa ao objeto de
    // da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // abre e fecha o modal

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora

  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }
  //  adiciona os eventos aos elementos do modal

  addModalEvent() {
    this.abrir.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.abrir && this.fechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
