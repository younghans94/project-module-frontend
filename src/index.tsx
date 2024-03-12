import { createRoot } from "react-dom/client";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
import Marquee from "./basic/animate/marquee/Marquee";

const root = createRoot(document.getElementById("root"));
root.render(<Marquee text={"abcdefghigklmnopq"} />);
