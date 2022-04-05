import numberAnimate from "./number-animate.js";

export default function fetchAnimals(url, target) {
  //   Cria a div contendo informações
  //  com o total de animais

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function createAnimals() {
    try {
      // Fetch e espera resposta em json
      const animaisResponse = await fetch(url);
      // Transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      numberAnimate();
    } catch (err) {
      console.log(err);
    }
  }

  return createAnimals();
}
