import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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
  specText: {
    fontSize: 9,
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: 400,
    color: "#626262",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: -theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  user: {
    fontSize: 10,
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: 400,
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
      <CardContent>
        <div className={classes.spec}>
          <Typography variant="h6" component="p" className={classes.subtitle}>
            {item[0]}
          </Typography>
          <Typography variant="h6" component="p" className={classes.subtitle}>
            Ξ {item[1]}
          </Typography>
        </div>
        <div className={classes.spec2}>
          <Typography variant="h6" component="p" className={classes.specText}>
            {item[2]}
          </Typography>
          <Typography variant="h6" component="p" className={classes.specText}>
            价格
          </Typography>
        </div>
      </CardContent>
      <Divider
        style={{
          marginLeft: "5%",
          width: "90%",
          marginTop: 25,
          marginBottom: 35,
        }}
      />
      <CardActions disableSpacing style={{ marginBottom: 24 }}>
        <img src={item[5]} alt="" />
        <div className={classes.bottom}>
          <Typography
            className={classes.user}
            style={{
              color: "#626262",
              padding: 8,
            }}
          >
            ARTIST
          </Typography>
          <Typography
            className={classes.user}
            style={{
              paddingLeft: 8,
            }}
          >
            {item[3]}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}
