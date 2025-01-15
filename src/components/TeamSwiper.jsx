import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, } from "swiper/modules";
import { team } from '../data/dummyData';
export default function TeamSwiper() {
  return (
    <div className="team-members-swiper"  >
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={1}
        slidesPerView={2.5}
        navigation={true}
      >
        {team.map((members, index) => (
          <SwiperSlide key={index}>
            <img src={members.img} alt={members.name} />
            <p>{members.name}</p>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  )
}
