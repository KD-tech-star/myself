import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const data = [
  {
    avatar: AVTR1,
    name: "jack",
    review:
      "doloremque, expedita, delectus voluptatibus? Quaerat rem Quaerat rem,exercitationem quae libero tempore odit sed asperiores placeat, in quasi iste soluta hic! Fuga, voluptatibus blanditiis?",
  },
  {
    avatar: AVTR2,
    name: " peter",
    review:
      "doloremque, expedita, delectus voluptatibus? Quaerat rem Quaerat rem,exercitationem quae libero tempore odit sed asperiores placeat, in quasi iste soluta hic! Fuga, voluptatibus blanditiis?",
  },
  {
    avatar: AVTR3,
    name: "michel07",
    review:
      "doloremque, expedita, delectus voluptatibus? Quaerat rem Quaerat rem,exercitationem quae libero tempore odit sed asperiores placeat, in quasi iste soluta hic! Fuga, voluptatibus blanditiis?",
  },
  {
    avatar: AVTR4,
    name: "joya",
    review:
      "doloremque, expedita, delectus voluptatibus? Quaerat rem Quaerat rem,exercitationem quae libero tempore odit sed asperiores placeat, in quasi iste soluta hic! Fuga, voluptatibus blanditiis?",
  },
];
function Testimonials() {
  return (
    <div>
      <section id="testimonials">
        <h5>Review from clints</h5>
        <h2>Testimonials</h2>
        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1 }
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="clint__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default Testimonials;
