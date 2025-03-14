import { useState } from "react";

import { MessageProps } from "./Message";

export type MessageList = MessageProps[];

export const useMessageStore = () => {
  const [messageList, setMessageList] = useState<MessageList>([]);

  const addMessage = (message: MessageProps) => {
    setMessageList([...messageList, message]);
  };

  const removeMessage = (id: number) => {
    setMessageList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setMessageList([]);
  };

  return {
    messageList,
    addMessage,
    removeMessage,
    clearAll,
  };
};
