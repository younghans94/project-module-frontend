import { animated, useTransition } from "@react-spring/web";
import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

import { useMessageStore } from "./useMessageStore";

export type Position = "top" | "bottom" | "left" | "right";

export interface MessageProps {
  type: "success" | "error" | "warning" | "info";
  content: ReactNode;
  duration?: number;
  id: number;
  position: Position;
}

export const Message = () => {
  const { messageList } = useMessageStore();

  const container = useMemo(() => {
    const el = document.createElement("div");
    el.className = "message-container";

    document.body.append(el);

    return el;
  }, []);

  const messageContent = useTransition(messageList, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const message = (
    <div className={"message-list"}>
      {messageContent((style, item) => (
        <animated.div style={style}></animated.div>
      ))}
    </div>
  );

  return createPortal(message, container);
};
