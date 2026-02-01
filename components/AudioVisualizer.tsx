import { motion } from "framer-motion";

interface AudioVisualizerProps {
  isPlaying: boolean;
}

const AudioVisualizer = ({ isPlaying }: AudioVisualizerProps) => {
  const bars = [
    { delay: 0, height: "60%" },
    { delay: 0.1, height: "100%" },
    { delay: 0.2, height: "40%" },
    { delay: 0.15, height: "80%" },
    { delay: 0.25, height: "50%" },
  ];

  return (
    <div className="flex items-end justify-center gap-1 h-6 w-8">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          className="w-1 bg-primary rounded-full origin-bottom"
          initial={{ scaleY: 0.3 }}
          animate={
            isPlaying
              ? {
                  scaleY: [0.3, 1, 0.5, 0.8, 0.3],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    delay: bar.delay,
                    ease: "easeInOut",
                  },
                }
              : { scaleY: 0.3 }
          }
          style={{ height: bar.height }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
