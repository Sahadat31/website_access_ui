import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto py-12 px-4 text-gray-800"
    >
      <h1 className="text-3xl font-bold mb-6 text-blue-700">About Accessibility Inspector</h1>
      <p className="mb-4 text-lg">
        Accessibility Inspector is a cutting-edge web tool that helps developers and designers ensure
        their websites are accessible to everyone, including users with disabilities.
        With an easy-to-use interface and comprehensive analysis engine, it scans web pages for
        potential accessibility issues and provides actionable insights.
      </p>
      <p className="mb-4 text-lg">
        Our mission is to build a more inclusive web. The tool aligns with WCAG (Web Content Accessibility Guidelines)
        standards and offers real-time feedback, historical analysis, and detailed reports to help teams
        identify and fix compliance gaps.
      </p>
      <p className="mb-4 text-lg">
        Whether you're a solo developer or part of a large organization, Accessibility Inspector adapts
        to your workflow with its intuitive dashboard, scan history, and exportable reports in multiple formats.
      </p>
      <p className="mb-4 text-lg">
        We are committed to continuous improvement and innovation, and believe in empowering developers
        with tools that contribute to digital equality.
      </p>
    </motion.div>
  );
};

export default About;
