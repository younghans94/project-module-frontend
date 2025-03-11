// import { Input } from "@fx-ui/fine-design";
import { createRoot } from "react-dom/client";

import "@fx-ui/fine-design/dist/fine_design.css";

import "./index.less";
// import Marquee from "./basic/animate/marquee/Marquee";

// import { Instance } from "./basic/css/instance/Instance";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
// import App from "./basic/animate/loading/Loading";
// import VirtualListDemo from "./basic/component/virtual/List";
import { MyComponent, SlideOverLayer } from "./basic/animate/spring/Animate";
// import { Loading } from "./basic/animate/loading/Loading";

const root = createRoot(document.getElementById("root"));
root.render(<SlideOverLayer />);
