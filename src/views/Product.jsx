import { motion } from 'framer-motion';
import ProductCards from '../components/ProductCards';

const features = [
  "One-click accessibility scanning for any URL",
  "Real-time issue detection and reporting",
  "PDF report downloads for audits",
  "Historical scan tracking and analytics",
  "Dashboard with detailed issue charts and summaries",
  "Responsive design, dark/light mode support"
];

const futurePlans = [
  "Team collaboration and sharing capabilities",
  "Custom rule sets and WCAG level toggling",
  "Integrations with GitHub, Slack, and CI pipelines",
  "AI-powered suggestions for accessibility fixes",
  "Browser extensions for instant scanning",
  "Multi-language support for international teams"
];

const missionStatement = [
  "Over 1 billion people live with some form of disability.",
  "Accessibility ensures equal digital experiences for everyone.",
  "Making websites accessible improves SEO and usability.",
  "Legal compliance with WCAG and ADA is essential.",
  "Your brand reputation improves with inclusive design.",
  "It's not just good practice—it's the right thing to do."
];

const Product = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-7xl mx-auto py-12 px-4"
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-700 text-center">Our Product</h2>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Features */}
        <ProductCards iterables={features} text={'✨ Current Features'}/>

        {/* Roadmap */}
        <ProductCards iterables={futurePlans} text={'🚀 Future Roadmap'}/>

        {/* Why Accessibility Matters */}
        <ProductCards iterables={missionStatement} text={'🌍 Why Accessibility Matters'}/>
      </div>
    </motion.div>
  );
};

export default Product;
