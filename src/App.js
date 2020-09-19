import React from "react";
import "./App.css";

import DynamicMenu from "./DynamicMenu/DynamicMenu";

class App extends React.Component {
  render() {
    return (
      <div>
        App
        <DynamicMenu />
      </div>
    );
  }
}

export default App;
