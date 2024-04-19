import { Router } from "express";
import { verifyToken } from "../utils/token-managers";
import { chatCompletionValidator, validate } from "../utils/validator";
import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chat-controllers";

//Protected API
const chatRoutes = Router();

chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;