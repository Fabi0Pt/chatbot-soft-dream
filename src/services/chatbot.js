import qrcode from "qrcode-terminal";
import controllerMessage from "../interface/index.js";

export const showQrCode = (client) => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
};

export const receiveMessage = (client) => {
  client.on("message", async (message) => {
    const test = await controllerMessage(message, client);
    client.sendMessage(message.from, test);
  });
};

export const connectQrCode = (client) => {
  client.on("ready", () => {
    console.log("Celular conectado!");
  });
};
