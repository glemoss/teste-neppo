import { handleMenuSelection, STATES } from './menu.js';
import { ask } from './utils.js';

export function startBot() {
  console.log("Bem-vindo ao chatbot da Neppo!");

  let currentState = STATES.MENU;

  while (currentState !== STATES.EXIT) {
    switch (currentState) {
      case STATES.MENU:
        currentState = handleMenuSelection();
        break;

      case STATES.CONSULTAR_CLIMA:
        const cidade = ask("Digite a cidade: ");
        console.log(`Clima em ${cidade}`);
        currentState = STATES.MENU;
        break;

      case STATES.CONSULTAR_CEP:
        const cep = ask("Digite o CEP: ");
        console.log(`Resultado para ${cep}`);
        currentState = STATES.MENU;
        break;

      default:
        console.log("Estado desconhecido.");
        currentState = STATES.EXIT;
        break;
    }
  }

  console.log("Até logo!");
}
