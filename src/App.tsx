import { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./App.css";

import { Router } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ProSidebarProvider>
      <div className="App">
        <Router />
      </div>
    </ProSidebarProvider>
  );
}

export default App;
