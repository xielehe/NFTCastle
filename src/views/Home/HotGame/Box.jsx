import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Item from "./Item";

import hot1 from "image/home/games/hot1.png";
import hot2 from "image/home/games/hot2.png";
import hot3 from "image/home/games/hot3.png";
import hot4 from "image/home/games/hot4.png";
import artist1 from "image/home/games/artist1.png";
import artist2 from "image/home/games/artist2.png";
import artist3 from "image/home/games/artist3.png";
import artist4 from "image/home/games/artist4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const data = [
  ["在山林", "0.002", "艺术品-加密意识", "李娜", hot1, artist1],
  ["寻找光明", "0.002", "艺术品-加密艺术", "王晓勃", hot2, artist2],
  ["花园", "0.002", "艺术品-加密艺术", "忻洛汀", hot3, artist3],
  ["恒古行云", "0.002", "艺术品-加密意识", "黄齐成", hot4, artist4],
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
