import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, } from 'swiper/modules';
import { beers } from '../data/dummyData'

export default function HomeSwiper() {
  const [sectionBg, setSectionBg] = useState('#ff00ff')
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSwipeChange = (swiper) => {
    setActiveSlide(swiper.realIndex)
    setSectionBg(beers[swiper.realIndex].bgColor)
  }
  return (
    <section className='home-swiper' style={{ backgroundColor: sectionBg }} >

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        speed={1000}
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2.5
          },
        }}
        className="mySwiper"
        onTransitionStart={handleSwipeChange}
      >
        {beers.map((beer, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex'
            }}
          >
            <img src={beer.img[0]} alt={beer.title} />
            <p>{beer.title}</p>
            <ul>
              {Object.entries(beer.variety).map(([key, value]) => (
                <li key={key} >
                 {value}
                </li>
              ))}
            </ul>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}