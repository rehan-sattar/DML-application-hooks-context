import React, { Component } from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Switch,
  InputBase,
  IconButton
} from "@material-ui/core";
import { ThemeContext } from "../contexts/ThemeContext";
import { withLanguageContext } from "../hocs/withLanguageContext";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../styles/NavbarStyles";
import { dictionary } from "../dictionary";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const {
      classes,
      languageContext: { language }
    } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { flag, search } = dictionary[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="pakistan flag picture">
                {flag}
              </span>
            </IconButton>
            <Typography variant="h6" className={classes.title} color="inherit">
              DML App
            </Typography>
            <Switch onChange={() => toggleTheme()} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
