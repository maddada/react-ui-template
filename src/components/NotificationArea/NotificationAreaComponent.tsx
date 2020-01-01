/* eslint-disable @typescript-eslint/no-useless-constructor */
import { enableRipple } from "@syncfusion/ej2-base";
import * as React from "react";
import "./NotificationArea.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

enableRipple(true);

export class NotificationAreaComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="notification-container">
        <button className="e-notification">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className="e-notification-number">1</div>
      </div>
    );
  }
}
