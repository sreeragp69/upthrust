"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import HomeCard from "./HomeCard";
import { GAME_DEV_CARDS } from "../../constant/Home.data";

const LandingCardSwiper = () => {
  return (
    <div className="pt-10 flex md:hidden justify-center items-center w-[50vw] sm:w-[50vw] md:w-[90vw]">
     <Swiper
  effect="cards"
  grabCursor={true}
  modules={[EffectCards]}
  className="mySwiper scale-76 sm:scale-80 w-[320px] sm:w-[320px] max-w-md"
>
  {GAME_DEV_CARDS.map((card, index) => (
    <SwiperSlide key={card.id}>
      <HomeCard
        id={card.id}
        index={index}
        backgroundImage={card.backgroundImage}
        subtitle={card.subtitle}
        alt={card.alt}
        characterTrue={card.characterTrue}
        characterImage={card.characterImage}
        tilt={index === 0 ? "left" : index === 1 ? "none" : "right"}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default LandingCardSwiper;
