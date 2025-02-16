import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  const {items} = useSelector((state) => state.nutrition);

  if(items.length === 0) {
    return <div className="mt-4 text-center">No Items right now</div>
  }

 else {
    return (
      <div className="mt-10 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {
            items.map((item) => {
              return <SwiperSlide key={item.id}> <ItemCard item={item} /> </SwiperSlide>
            })}

          <div className="swiper-button-prev !text-blue-500"></div>
          <div className="swiper-button-next !text-blue-500 "></div>
        </Swiper>
      </div>
    );
  }
};

export default ItemsList;
