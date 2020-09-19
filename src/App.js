import React from "react";
import "./App.css";

import DynamicMenu from "./DynamicMenu/DynamicMenu";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">Press9 Dynamic Menu</div>
        <DynamicMenu />
      </div>
    );
  }
}

export default App;
