// import { Input } from "@fx-ui/fine-design";
import { createRoot } from "react-dom/client";

import "./index.less";
// import Marquee from "./basic/animate/marquee/Marquee";

// import { Instance } from "./basic/css/instance/Instance";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
// import App from "./basic/animate/loading/Loading";
// import VirtualListDemo from "./basic/component/virtual/List";
// import { MyComponent, SlideOverLayer } from "./basic/animate/spring/Animate";
import { Message, TriggerButton } from "./basic/component/message/Message";
import { MessageProvider } from "./basic/component/message/useMessageStore";

// import { Loading } from "./basic/animate/loading/Loading";

const root = createRoot(document.getElementById("root"));
root.render(
  <MessageProvider>
    <div>
      <TriggerButton /> <Message />
    </div>
  </MessageProvider>,
);

// root.render(<SimpleBanner />)
