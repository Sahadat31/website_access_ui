import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const HomePageServices = () => {
  
    const services = [
        {
          title: "Powerful Automated Scans",
          description: "Including full domain scans and multiple URLs, with clear recommendations on how to fix any issues found."
        },
        {
          title: "Thorough Manual Audits",
          description: "Identifying and resolving the accessibility challenges that automated scans can’t detect."
        },
        {
          title: "File Remediation",
          description: "Making sure your documents are fully accessible and compliant."
        },
        {
          title: "VPATs and ACRs",
          description: "Detailed accessibility compliance reports."
        }
      ];
    
      return (
        <section className="bg-cyan-50 py-16 mr-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Can We Do for You?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our comprehensive suite of services covers every aspect of digital accessibility:
            </p>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FaCheckCircle className="text-cyan-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}:</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default HomePageServices