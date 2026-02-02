"use client"

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";
import PaymentModal from "./PaymentModal";
import AudioVisualizer from "./AudioVisualizer";

// Replace with your actual audio file path (e.g., "/audio/world-best-lie.mp3" in public folder)
const AUDIO_URL = "/audio/world-best-lie.mp3";

const Hero = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!hasInteracted && audioRef.current) {
                setHasInteracted(true);
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(() => { });
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
        <section className="relative min-h-screen w-full bg-background overflow-hidden">
            <audio ref={audioRef} src={AUDIO_URL} loop preload="auto" />
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/covers/cover-dark-gold.jpg"
                    alt="Nuno Zigi Total Dominance Cover"
                    className="w-full h-full object-cover object-center scale-105"
                />
            </div>

            {/* Overlay for cinematic mood */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,hsl(43_65%_52%/0.1)_0%,transparent_60%)]" />

            {/* Location tag – top-right */}
            <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-6 right-6 z-40"
            >
                <div className="glass-card px-4 py-2 text-center">
                    <p className="text-xs uppercase tracking-widest text-primary font-bold">📍 Enugu City</p>
                </div>
            </motion.div>

            {/* Date badge – top-left */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute top-8 sm:top-10 left-6 sm:left-12 z-30"
            >
                <div className="glass-card px-6 py-4 sm:px-8 sm:py-5 text-center min-w-[180px] sm:min-w-[220px]">
                    <p className="text-lg sm:text-xl uppercase font-extrabold tracking-widest text-primary">
                        WEDNESDAY
                    </p>
                    <p className="text-4xl sm:text-5xl font-black text-foreground leading-none">
                        04
                    </p>
                    <p className="text-base sm:text-lg uppercase font-bold tracking-wider text-cream-muted">
                        FEBRUARY
                    </p>
                </div>
            </motion.div>

            {/* Main title stack – centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                {/* Audio Player - Above Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-b-2 border-primary/30 px-6 py-4 sm:px-8 sm:py-5 flex items-center gap-4 sm:gap-6">
                        {/* Play/Pause Button */}
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={togglePlay}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-all duration-300 hover:glow-gold"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 sm:w-7 sm:h-7" />
                            ) : (
                                <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" />
                            )}
                        </motion.button>

                        {/* Visualizer & Status */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-end justify-center gap-1.5 h-10 w-20">
                                {[0, 0.1, 0.2, 0.15, 0.25, 0.08, 0.18].map((delay, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-1.5 bg-primary rounded-full origin-bottom"
                                        initial={{ scaleY: 0.3 }}
                                        animate={
                                            isPlaying
                                                ? {
                                                    scaleY: [0.3, 1, 0.5, 0.8, 0.3],
                                                    transition: {
                                                        duration: 0.8,
                                                        repeat: Infinity,
                                                        delay: delay,
                                                        ease: "easeInOut",
                                                    },
                                                }
                                                : { scaleY: 0.3 }
                                        }
                                        style={{ height: `${40 + index * 8}%` }}
                                    />
                                ))}
                            </div>
                            {/* <span className="text-xs sm:text-sm text-primary uppercase tracking-widest font-bold">
                                {isPlaying ? "Now Playing" : "Tap to Play"}
                            </span> */}
                        </div>

                        {/* Mute Button */}
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMute}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary/20"
                        >
                            {isMuted ? (
                                <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Title Stack */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    className="max-w-5xl space-y-3 sm:space-y-5"
                >
                    <h1 className="text-[clamp(2.8rem,7.5vw,5.5rem)] font-black uppercase tracking-[-0.03em] leading-none text-foreground drop-shadow-xl [text-shadow:0_4px_24px_hsl(43_65%_52%/0.35)]">
                        TOTAL DOMINANCE
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-[clamp(1.2rem,4vw,2rem)] font-semibold uppercase tracking-wider text-primary"
                    >
                        Exclusive Party
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-[clamp(1rem,3.2vw,1.5rem)] font-medium text-cream-muted"
                    >
                        with NUNO ZIGI
                    </motion.p>
                </motion.div>
            </div>

            {/* Price badge – bottom-right, above button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.7 }}
                className="absolute bottom-32 sm:bottom-40 right-6 sm:right-12 z-20"
            >
                <div className="glass-card px-6 py-4 sm:px-8 sm:py-5 text-center animate-pulse-glow">
                    <p className="text-4xl sm:text-5xl font-black text-primary leading-none">
                        $20
                    </p>
                    <p className="mt-1 text-sm sm:text-base uppercase font-bold tracking-wider text-cream-muted">
                        TO UNLOCK
                    </p>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-primary/80">
                        LOCATION
                    </p>
                </div>
            </motion.div>

            {/* Bottom-right Unlock CTA */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute bottom-8 sm:bottom-12 right-6 sm:right-12 z-30"
            >
                <motion.button
                    whileHover={{
                        scale: 1.07,
                        boxShadow: "0 0 35px hsl(43 65% 52% / 0.6)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="px-8 py-4 sm:px-10 sm:py-5 bg-primary text-primary-foreground uppercase font-montserrat font-extrabold text-base sm:text-lg tracking-wider rounded-lg shadow-2xl border-2 border-primary/60 transition-all duration-300 ease-out hover:bg-transparent hover:text-primary hover:border-primary"
                >
                    Unlock Location
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-3 text-right text-primary/70 text-xs sm:text-sm font-medium tracking-wide"
                >
                    Limited slots • Qualify now
                </motion.p>
            </motion.div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
