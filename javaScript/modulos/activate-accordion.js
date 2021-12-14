export default function activateAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="acorddion"] dt'
  );
  const ativo = "ativo";
  function activeAccordion() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", activeAccordion);
    });
  }
}
