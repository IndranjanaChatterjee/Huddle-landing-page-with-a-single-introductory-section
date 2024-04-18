import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex flex-col justify-center items-center  ">
        <Main />
        <footer>
          <p class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.frontendmentor.io/profile/IndranjanaChatterjee">Indranjana Chatterjee</a>.
          </p>
        </footer>
      </section>
    </>
  );
}

export default App;
