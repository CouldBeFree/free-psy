import { MessageInterface } from "../types/messageInterface";

export const lastMessage = (messages: MessageInterface[], userName: string): string => {
  if (messages) {
    const lastMessage = messages.find((message: MessageInterface) => message.from === userName);
    return lastMessage ? lastMessage.message : ""
  } else {
    return '';
  }
}