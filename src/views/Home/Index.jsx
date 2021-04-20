import Banner from "./banner/Index";
import Carousel from "./Carousel/Index";
import Menu from "./Menu/Index";
import HotCollects from "./HotCollects/Index";
import HotGames from "./HotGame/Index";
import HotIPs from "./hotips/Index";
import Footers from "./Footer/Index";
export default function Home() {
  return (
    <>
      <Banner />
      <Menu />
      <Carousel />
      <HotCollects />
      <HotGames />
      <HotIPs />
      <Footers />
    </>
  );
}
