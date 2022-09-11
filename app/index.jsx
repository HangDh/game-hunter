import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import GameInput from "./components/GameInput"

class App extends React.Component {
  state = {
    theme: "light"
  }

  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === "light" ? "dark" : "light",
    }))
  }

  render() {
    return (
      <div className={this.state.theme}>
        <div className="container">
          <h1>Test</h1>
          <GameInput label="Game name" />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
