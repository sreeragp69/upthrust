import { motion } from "framer-motion";
import { WhyUsStatistic } from "../../types/WhyUs.type";


const StatisticCard: React.FC<{ statistic: WhyUsStatistic }> = ({
  statistic,
}) => (
  <motion.div
    className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 2xl:p-10 shadow-lg hover:shadow-xl h-full transition-shadow duration-300 font-alexandria"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    <div className="text-center">
      <motion.div
        className="text-xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {statistic.value}
        <span className="">{statistic.suffix}</span>
      </motion.div>
      <motion.p
        className="text-themeGray text-xs sm:text-sm 2xl:text-lg font-light leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {statistic.label}
      </motion.p>
    </div>
  </motion.div>
);


export default StatisticCard