import Slider from "react-slick";
import ImgBlog from "../../assets/blog1.jpg";
import BlogCard from "./BlogCard";

const Swipe = () => {
  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container px-10 py-10">
        <h1 className="mb-8 inline-block border-l-8 border-primary  py-2 pl-2 text-center text-3xl font-bold">
          Explore
        </h1>
        <Slider {...settings}>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
          <div>
            <BlogCard Img1={ImgBlog} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Swipe;
