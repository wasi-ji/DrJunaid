import React from 'react';
import { motion } from 'motion/react';

export default function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center py-1 px-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2
          }}
          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
        />
      ))}
    </div>
  );
}
