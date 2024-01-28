import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./components/product";

const rootElement = document.querySelector("body");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Product />
  </StrictMode>
);
