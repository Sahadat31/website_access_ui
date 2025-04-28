import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkFlowIcons from "../components/WorkFlowIcons";
import HomePageServices from "../components/HomePageServices";

const Home = ()=> {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-cyan-50 px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* Main Heading */}
      <motion.h1 
        className="text-5xl font-extrabold text-cyan-700 text-center mb-6 leading-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Improve Your Website Accessibility
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        className="text-lg text-cyan-900 text-center max-w-2xl mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Scan your website for accessibility issues and make it more inclusive.
        Easy, fast, and free!
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link
          to="/scanner"
          className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Start Scanning
        </Link>

        <Link
          to="/about"
          className="border-2 border-cyan-600 hover:bg-cyan-100 text-cyan-600 hover:text-cyan-700 text-lg font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Illustration */}
      <motion.div 
        className="mt-12 max-w-4xl w-full flex justify-between"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <HomePageServices/>
        <WorkFlowIcons/>
      </motion.div>

    </motion.div>
  );
}

export default Home;
