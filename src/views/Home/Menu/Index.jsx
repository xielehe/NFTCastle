import React from "react";
import Popover from "material-ui-popup-state/HoverPopover";
import { makeStyles } from "@material-ui/core/styles";

import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 50,
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#E8D252",
    width: 231,
    height: 50,
    marginLeft: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#000000",
    width: 231,
    height: 84,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: "1.6em",
    letterSpacing: 2,
  },
  textItem: {
    color: "#FFFFFF",
    fontSize: "1.6em",
    letterSpacing: 2,
  },
}));

const HoverPopoverPopupState = () => {
  const classes = useStyles();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  return (
    <div className={classes.root}>
      <div {...bindHover(popupState)} className={classes.btn}>
        <div className={classes.text}>所有分类</div>
      </div>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <div className={classes.item}>
          <div className={classes.textItem}>加密收藏品</div>
        </div>
        <Divider />
        <div className={classes.item}>
          <div className={classes.textItem}>游戏资产</div>
        </div>
        <Divider />
        <div className={classes.item}>
          <div className={classes.textItem}>IP专栏</div>
        </div>
      </Popover>
    </div>
  );
};

export default HoverPopoverPopupState;
