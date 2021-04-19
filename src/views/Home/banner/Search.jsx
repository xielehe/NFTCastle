import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    minWidth: 400,
    height: 38,
    backgroundColor: "#E7E7E7",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 12,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined" square>
      <InputBase
        className={classes.input}
        placeholder="搜索感兴趣的关键字"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <SearchIcon style={{ color: "#9e9e9e" }} />
    </Paper>
  );
}
