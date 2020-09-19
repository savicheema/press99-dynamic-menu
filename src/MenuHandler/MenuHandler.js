import React from "react";
import "./menu-handler.css";

import Menu from "../Menu/Menu";

class MenuHandler extends React.Component {
  constructor(props) {
    super(props);
    // this.refs = [];
    this.menuRefs = [];
  }

  showChildren = (parentID, parentName) => {
    console.log("SHOWING CHILDREN OF", parentID, parentName);

    let showMenus = this.menuRefs.filter((menuRef) => {
      return menuRef.id === parentID && menuRef.name === parentName;
    });
    console.log("GOT CHILDREN", showMenus);

    showMenus.forEach((menu) => {
      console.log("menu", menu.ref);
      if (!menu.ref.current) return;
      menu.ref.current.show(menu.name);
    });
  };

  buildMenu = (parentMenuID, parentName, menu) => {
    if (!menu) return;
    let { levelName, entries } = menu;

    const menuRef = {
      id: parentMenuID,
      name: parentName,
      ref: React.createRef(),
    };

    this.menuRefs.push(menuRef);

    return (
      <Menu
        levelName={levelName}
        entries={entries}
        buildMenu={this.buildMenu}
        ref={menuRef.ref}
        parentID={parentMenuID}
        parentName={parentName}
        showChildren={this.showChildren}
      />
    );
  };

  render() {
    let { fullMenu } = this.props;

    console.log("FULL MENU", fullMenu);
    return (
      <div className="menu-handler">{this.buildMenu(0, "APP", fullMenu)}</div>
    );
  }
}

export default MenuHandler;
