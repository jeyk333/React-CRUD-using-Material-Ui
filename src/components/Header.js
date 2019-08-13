import React, { Component } from "react";
import { withStyles, AppBar } from "@material-ui/core";
import PropTypes from "prop-types";

import Styles from "../style/Styles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.logo}>
          <img
            src="https://img.icons8.com/metro/100/000000/avengers.png"
            alt="Avengers"
          />
        </div>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Header);
