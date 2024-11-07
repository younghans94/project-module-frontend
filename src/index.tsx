import { createRoot } from "react-dom/client";
import "./index.less";

// import { Instance } from "./basic/css/instance/Instance";

// import MainLayout from "./layout/MainLayout";
// import { Animate } from "./basic/animate/spring/Animate";
import App from "./basic/animate/loading/Loading";
// import { Loading } from "./basic/animate/loading/Loading";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
