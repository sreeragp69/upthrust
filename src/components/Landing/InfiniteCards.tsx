"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HomeSwiperImages } from "../../constant/Home.data"

const HomeSwiper: React.FC = () => {
  const [loading, setLoading] = useState(true)

  // Duplicate once
  const duplicatedImages = [...HomeSwiperImages, ...HomeSwiperImages]

  // Each card width + gap = 110px + 40px (gap-10 = 2.5rem = 40px)
  const itemWidth = 110 + 40
  const totalWidth = itemWidth * HomeSwiperImages.length

  // simulate loading or wait for all images
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
    <section className="flex w-[98vw] sm:w-[95vw] md:w-[88vw] min-[1680px]:w-[50%] mx-auto items-center justify-center overflow-hidden py-6">
      <div className="relative w-full overflow-hidden">
        {loading ? (
          // Skeleton loader
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
          // Scrolling lane
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
                className="flex h-[110px] w-[110px] flex-shrink-0 items-center justify-center rounded-2xl bg-[#E2ECFF] "
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
          {/* <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-themeBackgroundColor/90 via-transparent to-themeBackgroundColor"></div> */}

      </div>
    </section>
  )
}

export default HomeSwiper
