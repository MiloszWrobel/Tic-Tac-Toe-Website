import Coop from "./components/Coop";
import AI from "./components/AI";
import { useState } from "react";

function App() {
  const [gameChoice, setGameChoice] = useState("");

  function handleClick() {
    setGameChoice("Coop");
  }

  function handleAIClick() {
    setGameChoice("AI");
  }
  return (
    <>
      {gameChoice ? (
        <>
          {gameChoice == "Coop" ? (
            <Coop setGameChoice={setGameChoice} />
          ) : (
            <AI setGameChoice={setGameChoice} />
          )}{" "}
        </>
      ) : (
        <div id="menu">
          <button onClick={handleClick}> Play with friend</button>
          <button onClick={handleAIClick}> Play with AI</button>
        </div>
      )}
    </>

  );
}

export default App;
