import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner1 from "image/a.png";
import Banner2 from "image/banner.png";
export default function HomeCarousel() {
  return (
    <Carousel showStatus={false} showThumbs={false}>
      <div>
        <img src={Banner1} alt="" />
      </div>
      <div>
        <img src={Banner2} alt="" />
      </div>
    </Carousel>
  );
}
