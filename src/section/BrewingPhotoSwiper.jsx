import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { brasseriesPhoto } from '../data/dummyData';
export default function BrewingPhotoSwiper() {
  return (
    <div className='brewing-photo'>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {brasseriesPhoto.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.img} alt="brasseries photos" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}