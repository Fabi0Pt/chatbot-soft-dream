import { menu } from "../menu.js";
import { storage } from "../storage.js";

export const stageTwo = (from, message) => {
  const order =
    "\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido```";
  if (message === "*") {
    storage[from].stage = 0;
    storage[from].itens = [];

    return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
  } else if (message === "#") {
    storage[from].stage = 3;

    return (
      "🗺️ Agora, informe a quantidade de *METROS* por variação. \n ( ```Exemplo: 1m: Rosa, 5m: Azul``` ) \n\n " +
      "\n-----------------------------------\n*️⃣ - ```CANCELAR pedido```"
    );
  } else {
    if (!menu[message]) {
      return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
    }
  }

  storage[from].itens.push(menu[message]);

  return (
    `✅ *${menu[message].description}* adicionado com sucesso! \n\n` +
    "```Digite outra opção```: \n\n" +
    order
  );
};
