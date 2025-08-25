import {
  User1,
  User2,
  User3,
  User4,
  User5,
  CardBG1,
  CardBG2,
  CardBG3,
  CardFox,
  HomeSwiper1,
  HomeSwiper2,
  HomeSwiper3,
  HomeSwiper4,
  HomeSwiper5,
  HomeSwiper6,
  HomeSwiper7,
  HomeSwiper8,
  HomeSwiper9,
  HomeSwiper10,
  HomeSwiper11,
} from "../assets/images";

import {
  TestimonialImageArray,
  GameDevCardsArray,
  HomeSwiperImagesArray,
} from "../types/LandingPage.type";

export const testimonialImage: TestimonialImageArray = [
  {
    id: 1,
    image: User1,
  },
  {
    id: 2,
    image: User2,
  },
  {
    id: 3,
    image: User3,
  },
  {
    id: 4,
    image: User4,
  },
  {
    id: 5,
    image: User5,
  },
];

export const GAME_DEV_CARDS: GameDevCardsArray = [
  {
    id: "digital-marketing-expert",
    title: "Become a",
    subtitle: "Digital Marketing Expert",
    backgroundImage: CardBG1,
    characterTrue: false,
    alt: "Crash Bandicoot character promoting 2D game development",
  },
  {
    id: "game-developer-2d-3d",
    title: "Become a",
    subtitle: "2D & 3D GAME DEVELOPER",
    backgroundImage: CardBG2,
    characterTrue: true,
    characterImage: CardFox,
    alt: "Crash Bandicoot character promoting 2D game development",
  },
  {
    id: "web-app-developer",
    title: "Become a",
    subtitle: "Web & App Developer",
    backgroundImage: CardBG3,
    characterTrue: false,
    alt: "Crash Bandicoot character promoting 2D game development",
  },
];

export const HomeSwiperImages: HomeSwiperImagesArray = [
  {
    id: "11",
    path: HomeSwiper1,
  },
  {
    id: "22",
    path: HomeSwiper2,
  },
  {
    id: "33",
    path: HomeSwiper3,
  },
  {
    id: "44",
    path: HomeSwiper4,
  },
  {
    id: "55",
    path: HomeSwiper5,
  },
  {
    id: "66",
    path: HomeSwiper6,
  },
  {
    id: "77",
    path: HomeSwiper7,
  },
  {
    id: "86",
    path: HomeSwiper8,
  },
  {
    id: "99",
    path: HomeSwiper9,
  },
  {
    id: "101",
    path: HomeSwiper10,
  },
  {
    id: "111",
    path: HomeSwiper11,
  },
];
