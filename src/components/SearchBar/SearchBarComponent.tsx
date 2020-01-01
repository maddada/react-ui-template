import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import blue from "@material-ui/core/colors/blue";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

export function SearchBarComponent() {
  const theme = createMuiTheme({
    palette: {
      primary: blue
    }
  });

  return (
    <div id="input-container">
        <ThemeProvider theme={theme}>
          <TextField id="standard-basic" placeholder="بحث" color="primary" />
        </ThemeProvider>
        <button className="e-search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
    </div>
  );
}
