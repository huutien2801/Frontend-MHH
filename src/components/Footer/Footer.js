/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                className={classes.block}
                target="_blank"
              >
                Vũ Đức Thịnh
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                className={classes.block}
                target="_blank"
              >
                La Thoại
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                className={classes.block}
                target="_blank"
              >
                Trần Huệ Thy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                className={classes.block}
                target="_blank"
              >
                Lâm Hửu Tiền
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                className={classes.block}
                target="_blank"
              >
                Nguyễn Hồng Tới
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , trang web được tạo bởi&nbsp;
          <Link to="/landing-page" ><a
            className={aClasses}
            target="_blank"
          >
            Nhóm 24
          </a></Link>.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
