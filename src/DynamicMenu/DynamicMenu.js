import React from "react";
import "./dynamic-menu.css";

import MenuHandler from "../MenuHandler/MenuHandler";

class DynamicMenu extends React.Component {
  constructor(props) {
    super(props);

    this.zoneEntries = [
      {
        id: 1,
        name: "Zone 1",
        children: {
          levelName: "building",
          entries: [
            {
              id: 1,
              name: "Building 1",
              children: undefined,
            },
            {
              id: 2,
              name: "Building 2",
              children: undefined,
            },
            {
              id: 3,
              name: "Building 3",
              children: undefined,
            },
          ],
        },
      },
      {
        id: 2,
        name: "Zone 2",
        children: {
          levelName: "building",
          entries: [
            {
              id: 1,
              name: "Building 1",
              children: undefined,
            },
            {
              id: 2,
              name: "Building 2",
              children: undefined,
            },
            {
              id: 3,
              name: "Building 3",
              children: undefined,
            },
          ],
        },
      },
      {
        id: 3,
        name: "Zone 3",
        children: {
          levelName: "building",
          entries: [
            {
              id: 1,
              name: "Building 1",
              children: undefined,
            },
            {
              id: 2,
              name: "Building 2",
              children: undefined,
            },
            {
              id: 3,
              name: "Building 3",
              children: undefined,
            },
          ],
        },
      },
    ];

    this.fullMenu = {
      levelName: "site",
      entries: [
        {
          id: 1,
          name: "Site 1",
          children: {
            levelName: "zone",
            entries: this.zoneEntries,
          },
        },
        {
          id: 2,
          name: "Site 2",
          children: {
            levelName: "zone",
            entries: this.zoneEntries,
          },
        },
        {
          id: 3,
          name: "Site 3",
          children: {
            levelName: "zone",
            entries: this.zoneEntries,
          },
        },
      ],
    };
  }

  render() {
    return <MenuHandler fullMenu={this.fullMenu} />;
  }
}

export default DynamicMenu;
