import { makeStyles } from "@material-ui/core/styles";
import Hot1 from "image/t3.png";
import Typography from "@material-ui/core/Typography";

import Box from "./Box";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  root: {
    marginTop: 50,
    marginLeft: 100,
    width: "calc(100% - 200px);",
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  titleText: {
    marginLeft: theme.spacing(3),
    fontWeight: "bold",
  },
  titleText2: {
    marginLeft: theme.spacing(2),
    fontWeight: 24,
    color: "#BABABA",
    marginTop: "auto",
  },
}));

export default function HotCollects() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <div className={classes.title}>
          <img
            src={Hot1}
            alt=""
            style={{
              width: 34,
              height: 42,
            }}
          />
          <Typography
            component="span"
            variant="h4"
            className={classes.titleText}
          >
            热门IP专栏
          </Typography>
          <Typography
            component="span"
            variant="h6"
            className={classes.titleText2}
          >
            查看更多
          </Typography>
        </div>
        <Box />
      </div>
    </div>
  );
}
