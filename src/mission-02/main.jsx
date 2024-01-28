import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("body");
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);
