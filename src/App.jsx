import React, { useState } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import reactLogo from "./assets/react.svg";
import atun from "./assets/atun.jpg";
import jyqs from "./assets/jyqs.jpg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Header />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
