import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { brasserieSwiper } from '../data/dummyData';

export default function BrewingSwiper() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {brasserieSwiper.map((brasserie, index) => (
           <SwiperSlide style={{ backgroundColor: brasserie.bgColer }} key={index}>
            <img src={brasserie.img} alt={brasserie.title}/>
            <div className='swiper-title'>
              <h4>{brasserie.title}</h4>
              <p>{brasserie.description}</p>
            </div>
           </SwiperSlide>
        ))}
       
    
      </Swiper>
    </>
  );
}
