import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./style/main.css";

ReactDOM.createRoot(document.querySelector("body")).render(
  <main>
    <Header />
    <section className="w-full h-screen text-center flex">
      <h1 className="text-7xl m-auto">React HomeWork</h1>
    </section>
    <Footer />
  </main>
);
