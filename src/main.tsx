import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // chakra provider
  <Provider> 
    <App />
  </Provider>
);
