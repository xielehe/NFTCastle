import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  spec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spec2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: 500,
    color: "#000000",
  },
}));

export default function RecipeReviewCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div style={{ height: 10, backgroundColor: "#E8D252" }}></div>
      <CardMedia
        className={classes.media}
        image={item[4]}
        title="Paella dish"
      />
    </Card>
  );
}
