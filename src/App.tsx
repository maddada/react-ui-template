import React from "react";
import "./App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faCalendar,
  faCalculator,
  faChartBar,
  faChartArea,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

import { SearchBarComponent } from "./components/SearchBar/SearchBarComponent";
import { LangaugeSwitcherComponent } from "./components/LanguageSwitcher/LangaugeSwitcherComponent";
import { NotificationAreaComponent } from "./components/NotificationArea/NotificationAreaComponent";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ThemeProvider } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";

import { useMedia } from "use-media";
import { useMediaLayout } from "use-media";
import { useState, useEffect, useRef, useCallback } from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01a5dd"
    },
    secondary: {
      main: "#6EC30B",
      contrastText: "#ffffff"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const App = () => {
  let sidebarWidth = 200;

  // usually this object is returned from a service that handles showing only authorized pages.
  let sidemenuItems = [
    { title: "عنوان أول", icon: faCalendar, active: false, key: 0 },
    { title: "عنوان ثاني", icon: faCalculator, active: true, key: 1 },
    { title: "عنوان ثالث", icon: faChartBar, active: false, key: 2 },
    { title: "عنوان رابع", icon: faChartArea, active: false, key: 3 }
  ];

  let filterDropDownItems = [
    { title: "النوع الأول", value: 1 },
    { title: "النوع الثاني", value: 2 },
    { title: "النوع الثالث", value: 3 },
    { title: "النوع الرابع", value: 4 }
  ];

  let tabDropDownItems = [
    { title: "تبويب 1", value: 1 },
    { title: "تبويب 2", value: 2 },
    { title: "تبويب 3", value: 3 },
    { title: "تبويب 4", value: 4 },
    { title: "تبويب 5", value: 5 }
  ];

  let buttonsArray = [...Array(28)].map(x => 0);

  let tableRowsArray = [...Array(8)].map(x => 0);

  const isWide = useMedia({ minWidth: "960px" }, false);
  const [isMenuActive, setMenuActive] = useState(false);

  const sidebarRef: any = useRef(null);
  const mobileMenuRef: any = useRef(null);

  let sidebarCreated = () => {
    if (isWide === false) sidebarRef.current.hide();
  };

  function toggleMenu() {
    if (isMenuActive === true) {
      setMenuActive(false);
      // sidebarRef.current.element.style.maxHeight = "0";
    } else {
      setMenuActive(true);
      // sidebarRef.current.element.style.maxHeight = "500px";
    }
  }

  function onInputFocus(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains("e-input-in-wrap")) {
      ((args.target as HTMLElement).parentElement as HTMLElement).classList.add("e-input-focus");
    } else {
      (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.add(
        "e-input-focus"
      );
    }
  }

  function onInputBlur(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains("e-input-in-wrap")) {
      ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove("e-input-focus");
    } else {
      (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.remove(
        "e-input-focus"
      );
    }
  }

  function onIconMouseDown(args: React.MouseEvent) {
    args.persist();
    setTimeout(() => {
      (args.target as HTMLElement).classList.add("e-input-btn-ripple");
    }, 300);
  }

  function onIconMouseUp(args: React.MouseEvent) {
    (args.target as HTMLElement).classList.remove("e-input-btn-ripple");
  }

  return (
    <div className="App">
      <div className="mobile-menu">
        <div className="mobile-menu-top-row">
          <button
            className={"hamburger hamburger--3dxy " + (isMenuActive ? "is-active" : "")}
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="mobile-logo-container">
            <img alt="logo" className="mobile-logo" src={require("./assets/logo/abjadiyat-logo-ar.png")} />
          </div>
          <div className="mobile-profile-pic-container">
            <img
              alt="profile-pic"
              className="mobile-profile-pic"
              src={require("./assets/user-example/profile-pic.png")}
            />
          </div>
        </div>

        <div className="input-container-mobile-search">
          <div className="e-input-group ">
            <input className="e-input" type="text" onFocus={onInputFocus} onBlur={onInputBlur} placeholder="بحث" />
            <span
              className="e-input-group-icon e-input-search"
              onMouseDown={onIconMouseDown}
              onMouseUp={onIconMouseUp}
            />
          </div>
        </div>
        <img alt="decorative" src={require("./assets/menu/strap-color.svg")} className="top-color-strap-mobile" />
      </div>
      <div className="mobile-sidebar" style={{ maxHeight: isMenuActive ? "900px" : "0" }} ref={mobileMenuRef}>
        {// menu items:
        sidemenuItems.map(x => {
          return (
            <div className={"sb-menu-item " + (x.active ? "active-menu-item" : "")} key={x.key}>
              <FontAwesomeIcon icon={x.icon} />
              <span className="menu-item-text">{x.title}</span>
            </div>
          );
        })}
      </div>

      <SidebarComponent
        ref={sidebarRef}
        className="sidebar"
        enableRtl={true}
        width={sidebarWidth}
        position={"Right"}
        enableGestures={false}
        created={sidebarCreated}
        mediaQuery={window.matchMedia("(min-width: 960px)")}
        animate={true}
        type="Auto"
      >
        <img alt="logo" className="logo" src={require("./assets/logo/abjadiyat-logo-ar.png")} />

        <div className="sb-user-profile-menu">
          <img alt="profile-pic" className="profile-pic" src={require("./assets/user-example/profile-pic.png")} />
          <span className="username">محمد يحيى</span>
          <FontAwesomeIcon icon={faSortDown} />
        </div>

        {// menu items:
        sidemenuItems.map(x => {
          return (
            <div className={"sb-menu-item " + (x.active ? "active-menu-item" : "")} key={x.key}>
              <FontAwesomeIcon icon={x.icon} />
              <span className="menu-item-text">{x.title}</span>
            </div>
          );
        })}
      </SidebarComponent>
      <div className="body" style={{ marginRight: isWide ? "200px" : "0px", display: isMenuActive ? "none" : "block" }}>
        <div className="main">
          <div className="top-bar" style={{ display: isWide ? "flex" : "none" }}>
            {/*right*/}
            <div className="page-title">عنوان الصفحة</div>

            {/*left*/}
            <div className="top-bar-actions">
              <LangaugeSwitcherComponent />
              <SearchBarComponent />
              <NotificationAreaComponent />
            </div>
          </div>

          <div className="spacer" style={{ paddingBottom: "40px", display: isWide ? "block" : "none" }}></div>

          <div className="filter-row">
            <div className="filter-area">
              <div className="filter-input filter-text-input-container">
                <label htmlFor="filter-text-input">العنوان</label>
                <input
                  style={{ padding: "0px 8px", height: "31px" }}
                  className="e-input"
                  name="input"
                  type="text"
                  placeholder="عنوان ما"
                />
              </div>

              <div className="filter-input filter-word-input-container">
                <label htmlFor="filter-word-input">كلمة</label>
                <DropDownListComponent
                  dataSource={filterDropDownItems}
                  fields={{ text: "title", value: "value" }}
                  enableRtl={true}
                  placeholder="قائمة منسدلة"
                  showClearButton={false}
                />
              </div>

              <div className="filter-input filter-word-input-container">
                <label htmlFor="filter-word-input">من</label>
                <DatePickerComponent
                  style={{ padding: "0 8px" }}
                  width="140"
                  format="dd/MM/yyyy"
                  cssClass="e-custom-style"
                  placeholder="إختر تاريخاً"
                />
              </div>

              <div className="filter-input filter-word-input-container">
                <label htmlFor="filter-word-input">الى</label>
                <DatePickerComponent
                  style={{ padding: "0 8px" }}
                  width="140"
                  format="dd/MM/yyyy"
                  placeholder="إختر تاريخاً"
                />
              </div>

              <div className="filter-actions-area">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="secondary">
                    حفظ
                  </Button>
                  <Button variant="contained">
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
          <div className="spacer" style={{ paddingBottom: "20px" }}></div>
          <div className="main-area">
            <div className="tabs-row">
              <div className="tabs-row-inner-mobile">
                <DropDownListComponent
                  dataSource={tabDropDownItems}
                  fields={{ text: "title", value: "value" }}
                  enableRtl={true}
                  showClearButton={false}
                  value={1}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                />
              </div>
              <div className="tabs-row-inner">
                <button className="tab-button active">تبويب 1</button>
                <button className="tab-button">تبويب 2</button>
                <button className="tab-button">تبويب 3</button>
                <button className="tab-button">تبويب 4</button>
                <button className="tab-button">تبويب 5</button>
              </div>
            </div>
            <div className="tab-content">
              <div className="number-buttons-area">
                {buttonsArray.map((x, i) => {
                  return (
                    <button className={"number-button " + (i === 0 ? "active" : "")} key={i}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="items-table">
                {tableRowsArray.map((x, i) => {
                  return (
                    <div className="item-row" key={i}>
                      <div className="item-row-title-section" style={{ color: i !== 3 ? "initial" : "gray" }}>
                        عنوان ما اكثر من 8 كلمات في وصف الحالة
                      </div>
                      <div className="item-row-input-section">
                        <ThemeProvider theme={theme}>
                          <DatePickerComponent
                            style={{ padding: "0 8px" }}
                            width="150"
                            format="dd/MM/yyyy"
                            value={new Date()}
                            disabled={i !== 3 ? false : true}
                            showClearButton={false}
                            cssClass="table-row-input"
                          />
                          <DropDownListComponent
                            dataSource={filterDropDownItems}
                            fields={{ text: "title", value: "value" }}
                            enableRtl={true}
                            placeholder="قائمة منسدلة"
                            showClearButton={false}
                            disabled={i !== 3 ? false : true}
                            width="150"
                            cssClass="table-row-input"
                          />
                          <Button
                            variant="text"
                            color="primary"
                            className="table-row-input"
                            style={{ fontWeight: "bold", marginInlineStart: "12px" }}
                          >
                            تفاصيل
                          </Button>
                          <Switch
                            value={true}
                            disabled={i !== 3 ? false : true}
                            style={{ marginInlineStart: "12px" }}
                            color="primary"
                          />
                        </ThemeProvider>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="spacer" style={{ paddingBottom: "12px" }}></div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="decorative"
        src={require("./assets/menu/strap-color.svg")}
        className="top-color-strap"
        style={{ display: isWide ? "flex" : "none" }}
      />
    </div>
  );
};

export default App;
