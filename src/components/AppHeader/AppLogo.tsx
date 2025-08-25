import { motion } from 'framer-motion'
import React from 'react'

const AppLogo = () => {
  return (
     <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-black ">
            <img
              src="images/logo/logo.svg"
              alt="Logo"
              className="h-10 lg:h-13 2xl:h-14 w-auto"
            />
          </div>
        </motion.div>
  )
}

export default AppLogo