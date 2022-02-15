export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tolltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.newTooltip.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 240 > window.innerWidth) {
      this.newTooltip.style.left = `${event.pageX - 190}px`;
    } else {
      this.newTooltip.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mouseMove e mouseLeave
  onMouseLeave({ currentTarget }) {
    this.newTooltip.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  createTooltip(element) {
    const newTooltip = document.createElement("div");
    const text = element.getAttribute("aria-label");
    newTooltip.classList.add("tooltip");
    newTooltip.innerText = text;
    document.body.appendChild(newTooltip);
    this.newTooltip = newTooltip;
  }
  // Cria a tooltp e adiciona os eventos de mouseLeave e mouseMove
  // ao target

  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.createTooltip(currentTarget);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
