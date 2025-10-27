import { createContext, useContext, useState, ReactNode } from "react";

import { MessageProps } from "./Message";

export type MessageList = MessageProps[];

interface MessageContextType {
  messageList: MessageList;
  addMessage: (message: MessageProps) => void;
  removeMessage: (id: number) => void;
  clearAll: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messageList, setMessageList] = useState<MessageList>([]);

  const addMessage = (message: MessageProps) => {
    setMessageList((prevList) => [...prevList, message]);
  };

  const removeMessage = (id: number) => {
    setMessageList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setMessageList([]);
  };

  return (
    <MessageContext.Provider value={{ messageList, addMessage, removeMessage, clearAll }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageStore = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessageStore must be used within a MessageProvider");
  }
  return context;
};
