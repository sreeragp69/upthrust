"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HomeSwiperImages } from "../../constant/Home.data"

const HomeSwiper: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const duplicatedImages = [...HomeSwiperImages, ...HomeSwiperImages]

  const itemWidth = 110 + 40
  const totalWidth = itemWidth * HomeSwiperImages.length

  useEffect(() => {
    const imgPromises = HomeSwiperImages.map(
      (item) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = item.path
          img.onload = resolve
          img.onerror = resolve
        })
    )

    Promise.all(imgPromises).then(() => setLoading(false))
  }, [])

  return (
    <section className="relative flex w-[98vw] sm:w-[95vw] md:w-[88vw] xl:w-[80vw]! 2xl:w-[78vw]! min-[1920px]:w-[68vw]! min-[1680px]:w-[50%] 3xl:w-[40%]! mx-auto items-center justify-center overflow-hidden py-6">
      
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-themeBackgroundColor to-transparent pointer-events-none z-10" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-themeBackgroundColor to-transparent pointer-events-none z-10" />

      <div className="relative w-full overflow-hidden">
        {loading ? (
          <ul className="flex gap-10 animate-pulse">
            {Array.from({ length: HomeSwiperImages.length }).map((_, idx) => (
              <li
                key={idx}
                className="flex h-[110px] w-[110px] flex-shrink-0 items-center justify-center rounded-2xl bg-gray-200"
              >
                <div className="h-[65px] w-[65px] rounded-md bg-gray-300" />
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="flex gap-10"
            animate={{ x: [0, -totalWidth] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {duplicatedImages.map((item, idx) => (
              <li
                key={`${item.id}-${idx}`}
                className="flex h-[110px] w-[110px] flex-shrink-0 items-center justify-center rounded-2xl bg-[#E2ECFF]"
              >
                <img
                  src={item.path}
                  alt={`home-swiper-${item.id}`}
                  className="h-[65px] w-[65px] object-contain"
                />
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  )
}

export default HomeSwiper
