export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }
  if (abrir && fechar && containerModal) {
    abrir.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
