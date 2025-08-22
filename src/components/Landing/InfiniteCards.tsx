"use client"

import { motion } from "framer-motion"
import { HomeSwiperImages } from "../../constant/Home.data"

const HomeSwiper: React.FC = () => {
  // Duplicate once
  const duplicatedImages = [...HomeSwiperImages, ...HomeSwiperImages]

  // Each card width + gap = 110px + 40px (since you used gap-10 = 2.5rem = 40px)
  const itemWidth = 110 + 40
  const totalWidth = itemWidth * HomeSwiperImages.length // width of one full set

  return (
    <section className="flex w-[98vw] sm:w-[95vw] md:w-[88vw] min-[1680px]:w-[50%] mx-auto items-center justify-center overflow-hidden py-6">
      <div className="relative w-full overflow-hidden">
        {/* Scrolling lane */}
        <motion.ul
          className="flex gap-10"
          animate={{ x: [0, -totalWidth] }} // move exactly 1 set
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedImages.map((item, idx) => (
            <li
              key={`${item.id}-${idx}`}
              className="flex h-[110px] w-[110px] flex-shrink-0 items-center justify-center rounded-2xl bg-[#E2ECFF] shadow-md"
            >
              <img
                src={item.path}
                alt={`home-swiper-${item.id}`}
                className="h-[65px] w-[65px] object-contain"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default HomeSwiper
