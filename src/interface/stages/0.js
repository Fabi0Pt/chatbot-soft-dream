import { storage } from "../storage.js";

export const initialStage = (from) => {
  storage[from].stage = 1;

  return "ð OlÃ¡, como vai? \n\nEu sou a Anne, a *assistente virtual* da Soft Dream. \n*Posso te ajudar?* ð§ð»\n-----------------------------------\n1ï¸â£ - ```FAZER PEDIDO``` \n2ï¸â£ - ```Teste```\n0ï¸â£ - ```FALAR COM ATENDENTE```";
};
