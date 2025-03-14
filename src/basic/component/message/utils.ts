import { MessageList } from "./useMessageStore";

export const getMessagePosition = (id: number, messageList: MessageList) => {
  return messageList.top.find((item) => item.id === id) ? "top" : "bottom";
};
