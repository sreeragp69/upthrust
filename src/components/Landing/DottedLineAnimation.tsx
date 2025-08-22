import React from 'react';
import { motion } from 'framer-motion';

const DottedLineAnimation: React.FC = () => {
  return (
    <div className="">
      <svg width="400" height="200" viewBox="0 0 400 200">
        {/* Dotted trace path */}
        <path
          d="M 50 100 L 150 50 L 250 150 L 350 100"
          fill="none"
          stroke="gray"
          strokeDasharray="5, 5"
          strokeWidth="2"
        />
        {/* Animated arrow */}
        <motion.path
          d="M 50 100 L 150 50 L 250 150 L 350 100"
          fill="none"
          stroke="black"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Arrowhead definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default DottedLineAnimation;