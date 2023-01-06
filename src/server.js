import app from "./app.js";
import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  ignoreDefaultArgs: ["--disable-extensions"],
});

app.listen(3000, () => console.log(`Servidor rodando!`));
