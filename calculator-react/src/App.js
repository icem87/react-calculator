import "./App.css";
import Result from "./components/Result";
import Keypad from "./components/Keypad";
import { useState } from "react";

function App() {
  const [state, setState] = useState({ result: "" });

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else if (button === "%") {
      percent();
    } else {
      setState({
        result: state.result + button,
      });
    }
  };

  const calculate = () => {
    try {
      setState({ result: eval(state.result) });
    } catch (error) {
      setState({ result: "error" });
    }
  };

  const backspace = () => {
    setState({
      result: state.result.slice(0, -1),
    });
  };

  const percent = () => {
    setState({
      result: (state.result /= Math.pow(100, 1)),
    });
  };

  const reset = () => {
    setState({
      result: "",
    });
  };

  return (
    <div className="App ">
      <Result result={state.result} />
      <Keypad click={onClick} />
    </div>
  );
}

export default App;
