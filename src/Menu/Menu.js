import React from "react";
import "./menu.css";

class Menu extends React.Component {
  showMenu = () => {
    let { showChildren, parentID, parentName } = this.props;
    showChildren(parentID, parentName);
  };

  toggleShow = () => {};

  show = (name) => {
    let menuItem = document.querySelector(`div.${name.replace(/\s/g, "")}`);
    console.log("ITEM", menuItem, name);
    if (!menuItem) return;

    menuItem.style.display = "none";
  };

  render() {
    let { levelName, entries, buildMenu } = this.props;
    let menuClass = ["menu", levelName].join(" ");

    return (
      <div className={menuClass}>
        <div className="level">{levelName}</div>
        <div className="entries">
          {entries &&
            entries.map((entry, index) => {
              let entryClass = [
                "entry",
                entry.id,
                entry.name.replace(/\s/g, ""),
              ].join(" ");
              return (
                <div className={entryClass} key={index} onClick={this.showMenu}>
                  <span>{entry.name}</span>
                  {buildMenu(entry.id, entry.name, entry.children)}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Menu;
