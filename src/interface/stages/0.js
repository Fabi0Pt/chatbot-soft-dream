import { storage } from "../storage.js";

export const initialStage = (from) => {
  storage[from].stage = 1;

  return "👋 Olá, como vai? \n\nEu sou a Anne, a *assistente virtual* da Soft Dream. \n*Posso te ajudar?* 🧒🏻\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2️⃣ - ```Teste```\n0️⃣ - ```FALAR COM ATENDENTE```";
};
