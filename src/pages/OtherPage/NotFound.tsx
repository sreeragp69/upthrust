import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle, Sparkles, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen  py-20 bg-gradient-to-br from-themeBackgroundColor  to-themeBackgroundColor flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-300/30 rounded-full"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-300/30 rounded-lg"
        animate={{ rotate: [360, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 border-2 border-indigo-300/30 rotate-45"
        animate={{ rotate: [45, 405], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - 404 Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8 ">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-themePrimary  via-themePrimary/80 to-themePrimary select-none tracking-tighter">
                  404
                </h1>
                <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-300/20 select-none tracking-tighter translate-x-2 translate-y-2 -z-10">
                  404
                </div>
              </motion.div>

              {/* Orbiting dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{
                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 80],
                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 80],
                    scale: [0, 1, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Page Not Found</h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                  <Globe className="w-5 h-5" />
                </motion.div>
                <span className="text-lg">The page you’re looking for doesn’t exist.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Oops! Something went wrong.</h3>
                <p className="text-gray-600 mb-6">Don’t worry, let’s get you back on track.</p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-themePrimary  via-themePrimary/80 to-themePrimary hover:scale-102 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </motion.button>

                <Link to="/">
                  <motion.button
                   
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/80 hover:bg-white text-gray-700 font-semibold rounded-xl border hover:scale-102 border-gray-200 shadow-lg transition-all duration-300"
                  >
                    <Home className="w-5 h-5" />
                    Home
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Search</h4>
                    <p className="text-sm text-gray-600">Find something else</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="group p-6 bg-gradient-to-br bg-[#30CD00]/10 rounded-xl border border-purple-200 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#30CD00]/[0.09] rounded-lg  transition-colors">
                    <BookOpen className="w-6 h-6 text-[#30CD00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Help Center</h4>
                    <p className="text-sm text-gray-600">Get assistance</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} className="text-center pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 mb-2">
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 bg-gradient-to-r from-themePrimary  via-themePrimary/80 to-themePrimary rounded-lg flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-lg font-semibold text-gray-800">Page Not Found</span>
              </div>
              <p className="text-sm text-gray-600">Looks like you’ve reached a dead end.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
