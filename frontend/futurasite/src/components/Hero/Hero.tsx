import Slider from "react-slick";
import FuturaInstech from "./contents/FuturaInstech";
import Planning from "./contents/Planning";
import Technologies from "./contents/Technologies";
import Synergy from "./contents/Synergy";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <Slider {...settings}>
        <FuturaInstech />
        <Planning />
        <Technologies />
        <Synergy />
      </Slider>
    </main>
  );
};

export default Hero;
