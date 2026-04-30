import { AnimatePresence, motion } from "framer-motion";

type Props = {
  state: null | "to-dark" | "to-light";
};

export default function FlickerOverlay({ state }: Props) {
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          key={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, times: [0, 0.4, 1] }}
          className={`pointer-events-none fixed inset-0 z-[100] ${
            state === "to-dark" ? "bg-black" : "bg-white"
          }`}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
