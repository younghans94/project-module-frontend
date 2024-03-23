import { createRoot } from "react-dom/client";

// import { Instance } from "./basic/css/instance/Instance";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
import Marquee from "./basic/animate/marquee/Marquee";

const root = createRoot(document.getElementById("root"));
root.render(
  <Marquee text={"故大德必得其位，必得其禄，必得其名，必得其寿。故天生之物，必因其材而笃焉."} />,
);
