import React from 'react'
import { motion } from 'framer-motion';

const ProductCards = ({iterables,text}) => {
  return (
    <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        >
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{text}</h3>
        <ul className="space-y-3 text-gray-700 list-disc pl-5">
            {iterables.map((item, idx) => (
            <li key={idx}>{item}</li>
            ))}
        </ul>
    </motion.div>
  )
}

export default ProductCards