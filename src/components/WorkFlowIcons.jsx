import React from 'react'
import { FaPrint, FaKey, FaFileAlt, FaGraduationCap } from "react-icons/fa";

const WorkFlowIcons = () => {
    const steps = [
        { icon: <FaPrint size={28} />, title: "Powerful Automated Scans" },
        { icon: <FaKey size={28} />, title: "Thorough Manual Audits" },
        { icon: <FaFileAlt size={28} />, title: "File Remediation" },
        { icon: <FaGraduationCap size={28} />, title: "Education" }
      ];
    return (
    <section className="bg-cyan-50 py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-10 relative">
        {steps.map((step, index) => (
            <div
            key={index}
            className="flex items-center bg-white rounded-xl shadow-md px-6 py-4 w-full relative"
            >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600 text-white mr-6">
                {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-cyan-700">{step.title}</h3>
            {index !== steps.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-10 bg-cyan-400"></div>
            )}
            </div>
        ))}
        </div>
    </section>
  )
}

export default WorkFlowIcons