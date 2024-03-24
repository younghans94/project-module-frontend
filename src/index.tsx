import { createRoot } from "react-dom/client";
import "./index.less";

// import { Instance } from "./basic/css/instance/Instance";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
import Marquee from "./basic/animate/marquee/Marquee";
import { Loading } from "./basic/animate/loading/Loading";

const root = createRoot(document.getElementById("root"));
root.render(
  <Loading />,
);
