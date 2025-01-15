import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { beers } from '../data/dummyData';
import Marquee from '../components/Marquee';
import { Link } from 'react-router';
export default function ProductsSwiper() {
  return (
    <section className='products-swiper'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3.5}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 2,

          },
          480: {
            slidesPerView: 1.5,
          },
        }}
        className="myProductSwiper"
      >
        {beers.map((beer, index) => (
          <SwiperSlide
            key={index}
            style={{

              backgroundColor: beer.bgColor,
            }}
          >
            <Link className='swiper-slide-link' to={"/"}>
              <div className='marquee-bg'>
                <Marquee title={beer.title} />
              </div>
              <p>{beer.title}</p>

              <img
                src={beer.img[0]}
                alt={beer.title}
              />
              <ul>
                {Object.entries(beer.variety).map(([key, value]) => (
                  <li key={key}>
                    {value}
                  </li>
                ))}
              </ul>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}