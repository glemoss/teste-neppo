import { handleMenuSelection } from './menu.js';
import { findAddressByCep } from '../services/cepService.js';
import { getWeather } from '../services/weatherService.js';
import { ask } from '../utils/index.js';
import { STATES } from './states.js';

export async function startBot() {
  console.log("Bem-vindo ao chatbot da Neppo!");

  let currentState = STATES.MENU;

  while (currentState !== STATES.EXIT) {
    switch (currentState) {
      case STATES.MENU:
        currentState = handleMenuSelection();
        break;

      case STATES.CONSULTAR_CLIMA:
        const cidade = ask("Digite a cidade: ");
        const clima = await getWeather(cidade);
        console.log(`\n${clima}`);
        console.log('-'.repeat(40));
        currentState = STATES.MENU;
        break;

      case STATES.CONSULTAR_CEP:
        const cep = ask("Digite o CEP: ");
        const endereco = await findAddressByCep(cep);
        console.log(`\n${endereco}`);
        console.log('-'.repeat(40));
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
