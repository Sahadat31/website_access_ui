import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ type = "success", message, onClose }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";
  const textColor = "text-white";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-5 transform -translate-x-1/2 px-24 py-3 rounded-md shadow-lg ${bgColor} ${textColor} z-50`}
        >
          <div className="flex item-center gap-4">
            <span>{message}</span>
            <button onClick={onClose} className="font-bold">
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Alert;
