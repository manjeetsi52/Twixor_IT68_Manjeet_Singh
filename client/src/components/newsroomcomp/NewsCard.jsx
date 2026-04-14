
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const NewsCard = ({data}) => {
  console.log(data)
  return (
    <div className="w-full p-5 ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((elem) => {
          const { id, title, image, description } = elem;

          return (
            <SwiperSlide key={id} className=" min-h-96">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-96">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col min-h-56 ">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {title}
                  </h2>

                  <p className="text-sm text-gray-600 flex-grow line-clamp-3">
                    {description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
