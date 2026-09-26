import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../lib/theme";

export default function FlickerOverlay() {
  const { flicker } = useTheme();

  return (
    <AnimatePresence>
      {flicker && (
        <motion.div
          key={flicker}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.72, 0.05, 0.45, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.38, times: [0, 0.18, 0.4, 0.62, 1] }}
          className={`pointer-events-none fixed inset-0 z-[80] ${
            flicker === "to-dark" ? "bg-white" : "bg-black"
          }`}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
