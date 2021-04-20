import { makeStyles } from "@material-ui/core/styles";

import t2 from "image/home/t2.png";
import t3 from "image/home/t3.png";
import f1 from "image/home/f1.png";
import f2 from "image/home/f2.png";
import f3 from "image/home/f3.png";
import f4 from "image/home/f4.png";
import f5 from "image/home/t5.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    marginTop: 80,
  },
  box: {
    marginLeft: 100,
    marginTop: 40,
    color: "#ffffff",
    maxWidth: 500,
  },
  leave: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 40,
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  search: {
    marginLeft: 100,
    marginRight: 100,
    fontSize: 16,
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: 500,
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    display: "flex",
    justifyContent: "flex-start",
    marginRight: 100,
  },
  home: {
    fontSize: 16,
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: 500,
  },
  text: {
    fontSize: 10,
    marginTop: 20,
  },
  subtitle: {
    marginTop: theme.spacing(1),
    fontSize: 12,
  },
  subtitlel: {
    paddingTop: 6,
    paddingBottom: 6,
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div className={classes.root}>
        <div className={classes.box}>
          <img src={t2} alt="" width="45px" />
          <img src={t3} alt="" width="186px" />
          <div className={classes.text}>
            NFTCastle.io，旨在打造全世界规模最大，生态最丰富，技术实力最强的NFT资产及其金融衍生品交易平台。
          </div>
        </div>
        <div className={classes.leave}>
          <div className={classes.home}>主页</div>
          <div className={classes.search}>
            <div>搜索</div>
            <div className={classes.subtitle}>
              <div className={classes.subtitlel}>加密收藏品</div>
              <div className={classes.subtitlel}>游戏资产</div>
              <div className={classes.subtitlel}>IP专栏</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#FFFFFF",
          width: 100,
          marginLeft: 100,
          marginRight: 100,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#555555",
          height: 1,
          marginLeft: 100,
          width: "calc(100% - 200px)",
          border: "none",
        }}
      />
      <div className={classes.root} style={{ marginTop: 0, marginBottom: 20 }}>
        <div className={classes.box}>
          <div style={{ fontSize: 23 }}>加入NFTCastle.io</div>
          <div className={classes.text}>
            Stay up-to-date with our features, meet other OpenSea enthusiasts,
            and learn more!
          </div>
        </div>
        <div className={classes.icon}>
          <img src={f1} width="40px" alt="" style={{ padding: 10 }} />
          <img src={f2} width="40px" alt="" style={{ padding: 10 }} />
          <img src={f5} width="40px" alt="" style={{ padding: 10 }} />
          <img src={f3} width="40px" alt="" style={{ padding: 10 }} />
          <img src={f4} width="40px" alt="" style={{ padding: 10 }} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#555555",
          height: 1,
          marginLeft: 100,
          width: "calc(100% - 200px)",
          border: "none",
        }}
      />
      <div className={classes.root} style={{ marginTop: 0 }}>
        <div className={classes.box} style={{ marginTop: 20 }}>
          <div className={classes.text} style={{ marginBottom: 30 }}>
            © 2021 Onchain Labs, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
