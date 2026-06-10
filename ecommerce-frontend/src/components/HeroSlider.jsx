import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Summer Sale Extravaganza",
    subtitle: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    image: "https://picsum.photos/id/20/1920/600",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "New Electronics Arrivals",
    subtitle: "Latest gadgets at unbeatable prices",
    buttonText: "Explore",
    buttonLink: "/shop?category=electronics",
    image: "https://picsum.photos/id/0/1920/600",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Premium Quality Products",
    subtitle: "Shop with confidence and get free shipping",
    buttonText: "View Collection",
    buttonLink: "/shop",
    image: "https://picsum.photos/id/26/1920/600",
    color: "from-purple-500 to-indigo-500",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        effect="fade"
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`}
                />
              </div>

              <div className="relative h-full flex items-center justify-center text-center">
                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transform transition hover:scale-105 duration-200 shadow-lg"
                    >
                      {slide.buttonText}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
