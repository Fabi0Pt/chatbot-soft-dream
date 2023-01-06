import express from "express";
import { connectionChat } from "./config/connectionChatbot.js";
const app = express();



connectionChat();

export default app;
