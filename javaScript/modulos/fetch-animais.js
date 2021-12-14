import numberAnimate from "./number-animate.js";

export default function fetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      numberAnimate();
    } catch (err) {
      console.log(err);
    }
  }

  fetchAnimals("./animaisApi.json");
}
