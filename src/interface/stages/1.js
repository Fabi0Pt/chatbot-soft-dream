import { menu } from "../menu.js";
import { storage } from "../storage.js";

export const stageOne = (from, message) => {
  if (message === "1") {
    let msg = "🚨  Loja  🚨\n\n";

    Object.keys(menu).map((value) => {
      const element = menu[value];
      if (value === "1") {
        msg += `1️⃣ - _${element.description}_ \n`;
      } else if (value === "2") {
        msg += `2️⃣ - _${element.description}_ \n`;
      } else if (value === "3") {
        msg += `3️⃣ - _${element.description}_ \n`;
      } else if (value === "4") {
        msg += `4️⃣ - _${element.description}_ \n`;
      } else if (value === "5") {
        msg += `5️⃣ - _${element.description}_ \n`;
      }
    });

    msg +=
      "\nPara visualizar outros produtos, *acesse*: https://www.softdream.com.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente ao produto ao qual deseja pedir:*";
    storage[from].stage = 2;

    return msg;
  } else if (message === "2") {
    return (
      "\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE```\n\n" +
      neighborhoods +
      "\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE``` "
    );
  } else if (message === "0") {
    // client.markUnseenMessage(from);

    storage[from].stage = 5;

    return "🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.";
  }

  return "❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️";
};
