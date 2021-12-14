export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(event) {
      this.newTooltip.style.top = `${event.pageY + 20}px`;
      this.newTooltip.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.newTooltip.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function createTooltip(element) {
    const newTooltip = document.createElement("div");
    const text = element.getAttribute("aria-label");
    newTooltip.classList.add("tooltip");
    newTooltip.innerText = text;
    document.body.appendChild(newTooltip);
    return newTooltip;
  }

  function onMouseOver(event) {
    const newTooltip = createTooltip(this);
    newTooltip.style.top = `${event.pageY}px`;
    newTooltip.style.left = `${event.pageX}px`;

    onMouseLeave.newTooltip = newTooltip;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.newTooltip = newTooltip;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
