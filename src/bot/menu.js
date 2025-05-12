import { ask } from './utils.js';

export const STATES = {
  CONSULTAR_CLIMA: 'CONSULTAR_CLIMA',
  CONSULTAR_CEP: 'CONSULTAR_CEP',
  EXIT: 'EXIT',
  MENU: 'MENU',
};

export function handleMenuSelection() {
  console.log("\nO que você deseja fazer?");
  console.log("[1] Consultar clima");
  console.log("[2] Consultar CEP");
  console.log("[3] Sair\n");
  process.stdout.write("Selecione uma opção: "); // Contorna problema de encoding
  const option = ask("");

  switch (option) {
    case "1":
      return STATES.CONSULTAR_CLIMA;
    case "2":
      return STATES.CONSULTAR_CEP;
    case "3":
      return STATES.EXIT;
    default:
      console.log("Opção inválida. Tente novamente.");
      console.log('-'.repeat(40));
      return STATES.MENU;
  }
}
