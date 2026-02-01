"use client"

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";

// Using a royalty-free sample audio for demo
const AUDIO_URL = "/audio/world-best-lie.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play after first user interaction with the page
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Auto-play blocked, user needs to click
        });
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    return () => document.removeEventListener("click", handleFirstInteraction);
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed bottom-8 left-6 sm:left-12 z-50"
    >
      <audio ref={audioRef} src={AUDIO_URL} loop preload="auto" />

      <div className="glass-card px-4 py-3 flex items-center gap-3">
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-all duration-300 hover:glow-gold"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>

        {/* Visualizer */}
        <div className="flex flex-col items-start gap-1">
          <AudioVisualizer isPlaying={isPlaying} />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {isPlaying ? "Now Playing" : "Paused"}
          </span>
        </div>

        {/* Mute Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary transition-all duration-300"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
