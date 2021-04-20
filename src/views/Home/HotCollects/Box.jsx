import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Item from "./Item";

import hot1 from "image/home/collects/hot1.png";
import hot2 from "image/home/collects/hot2.png";
import hot3 from "image/home/collects/hot3.png";
import hot4 from "image/home/collects/hot4.png";
import artist1 from "image/home/collects/artist1.png";
import artist2 from "image/home/collects/artist2.png";
import artist3 from "image/home/collects/artist3.png";
import artist4 from "image/home/collects/artist4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const data = [
  ["层波、逆流与浪", "0.002", "艺术品-加密意识", "王牧羽", hot1, artist1],
  ["预言", "0.002", "艺术品-加密艺术", "景晓雷", hot2, artist2],
  ["财神", "0.002", "艺术品-加密艺术", "李婷婷", hot3, artist3],
  ["墙-赭石", "0.002", "艺术品-加密意识", "于洋", hot4, artist4],
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
