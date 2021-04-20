import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner1 from "image/banner/banner0.jpg";
import Banner2 from "image/banner/banner1.jpg";
import Banner3 from "image/banner/banner2.jpg";
export default function HomeCarousel() {
  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay={true}
    dynamicHeight={false}
    infiniteLoop={true}
    >
      <div>
        <img src={Banner1} alt="" />
      </div>
      <div>
        <img src={Banner2} alt="" />
      </div>
      <div>
        <img src={Banner3} alt="" />
      </div>
    </Carousel>
  );
}
