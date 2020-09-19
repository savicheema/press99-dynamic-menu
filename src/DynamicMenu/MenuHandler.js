import React from "react";
import "./menu-handler.css";

class MenuHandler extends React.Component {
  buildMenu = (menu) => {
    if (!menu) return;
    let { level_name, entries } = menu;

    let menuClass = ["menu", level_name].join(" ");

    return (
      <div className={menuClass}>
        <div className="level">{level_name}</div>
        <div className="entries">
          {entries.map((entry, index) => {
            return (
              <div className="entry" key={index}>
                {entry.name}
                {this.buildMenu(entry.children)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    let { fullMenu } = this.props;

    console.log("FULL MENU", fullMenu);
    return <div className="menu-handler">{this.buildMenu(fullMenu)}</div>;
  }
}

export default MenuHandler;
