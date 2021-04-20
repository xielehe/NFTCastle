import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Item from "./Item";

import hot1 from "image/home/ips/hot1.png";
import hot2 from "image/home/ips/hot3.png";
import hot3 from "image/home/ips/hot2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const data = [
  ["在山林", "0.002", "艺术品-加密意识", "李娜", hot1],
  ["寻找光明", "0.002", "艺术品-加密艺术", "王晓勃", hot2],
  ["花园", "0.002", "艺术品-加密艺术", "忻洛汀", hot3],
  ["恒古行云", "0.002", "艺术品-加密意识", "黄齐成", hot3],
];
export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((value) => (
          <Grid item xs={6} sm={3}>
            <Item item={value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
