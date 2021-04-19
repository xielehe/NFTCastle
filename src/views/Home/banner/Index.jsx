import { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Button } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import SearchBar from "./Search";
import Logo from "image/HeaderLogo.png";
import Pofile from "image/Pofile.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 75,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginLeft: theme.spacing(3),
  },
  right: {
    marginRight: theme.spacing(6),
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: 300,
    alignItems: "center",
  },
}));

export default function Banner() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <SearchBar />
      <div className={classes.right}>
        <img src={Pofile} alt="account" />
        <div>上传</div>
        <Chip
          label="Punk.NetWork"
          style={{ backgroundColor: "#E8D252", fontWeight: "bold" }}
        />

        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          onClick={handleToggle}
        >
          语言
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>ZH</MenuItem>
                    <MenuItem onClick={handleClose}>EN</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
