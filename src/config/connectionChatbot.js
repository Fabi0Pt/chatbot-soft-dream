import pkg from "whatsapp-web.js";

import {
  showQrCode,
  receiveMessage,
  connectQrCode,
} from "../services/chatbot.js";

export const connectionChat = async () => {
  const { Client, LocalAuth } = pkg;
  const client = new Client({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"],
    },
    authStrategy: new LocalAuth({
      client: "cliente-fabio",
    }),
  });

  showQrCode(client);
  connectQrCode(client);
  receiveMessage(client);

  client.initialize();

  return true;
};
