import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Виктор",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Сатья Нараян",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Сачин Тендулкар",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-16">
        <div className="container">
          <div className="text-center mb-12 max-w-[600px] mx-auto mt-12">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Что говорят наши клиенты
            </p>
            <h1 className="text-4xl font-bold mb-4 mt-4">Отзывы</h1>
            <p className="text-xs text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-12"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-8" key={data.id}>
                    <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <div>
                        <img
                          className="rounded-full w-24 h-24 mx-auto"
                          src={data.img}
                          alt={data.name}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-gray-500 text-lg">{data.text}</p>
                        <h1 className="text-2xl font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
