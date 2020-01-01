/* eslint-disable @typescript-eslint/no-useless-constructor */
import { enableRipple } from "@syncfusion/ej2-base";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import * as React from "react";
import "./LangaugeSwitcher.scss";

enableRipple(true);

export class LangaugeSwitcherComponent extends React.Component {
  items = [
    {
      text: "العربية"
    },
    {
      text: "الإنجليزية"
    }
  ];

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="langauge-switcher-container">
        <DropDownButtonComponent className="langauge-switcher" items={this.items} enableRtl={true} style={{backgroundColor: "white", color: "#565656", border: "none"}}>
          {" العربية "}
        </DropDownButtonComponent>
      </div>
    );
  }
}
