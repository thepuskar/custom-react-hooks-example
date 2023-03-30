import { createRoot } from "react-dom/client";

import { Routes } from "lib";
import "./index.css";
import "./App.css";

const container = document.getElementById("root")!;
createRoot(container).render(<Routes />);
