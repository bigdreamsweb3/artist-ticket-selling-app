"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (

        <section className="relative h-[85vh] w-full bg-black overflow-hidden">

            {/* Location tag – top-right */}
            <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 right-6 right-0 z-40"
            >
                <Image src="/images/enugu-city.png"
                    alt="Enugu City"
                    width={88}
                    height={68}
                    className="object-contain"
                />
            </motion.div>

            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/covers/cover-dark.png"
                    alt="Nuno Zigi Total Dominance Cover"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />
            </div>

            {/* Overlay for cinematic mood */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

            {/* Date badge – top-left */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute top-8 sm:top-10 left-6 sm:left-12 z-30"
            >
                <div
                    className="
            bg-black/60 backdrop-blur-md 
            border border-[#D4AF37]/35 rounded-2xl 
            px-6 py-4 sm:px-8 sm:py-5 
            shadow-xl shadow-[#D4AF37]/20
            text-center min-w-[180px] sm:min-w-[220px]
          "
                >
                    <p className="text-lg sm:text-xl uppercase font-extrabold tracking-widest text-[#D4AF37]">
                        WEDNESDAY
                    </p>
                    <p className="text-4xl sm:text-5xl font-black text-[#F5F0E6] leading-none">
                        04
                    </p>
                    <p className="text-base sm:text-lg uppercase font-bold tracking-wider text-[#EDE4D9]/90">
                        FEBRUARY
                    </p>
                </div>
            </motion.div>

            {/* Main title stack – centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    className="max-w-5xl space-y-3 sm:space-y-5"
                >
                    <h1
                        className="
              text-[clamp(2.8rem,7.5vw,5.5rem)] 
              font-black uppercase tracking-[-0.03em] leading-none
              text-[#F5F0E6] drop-shadow-xl
              [text-shadow:0_4px_24px_rgba(212,175,55,0.35)]
            "
                    >
                        TOTAL DOMINANCE
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="
              text-[clamp(1.2rem,4vw,2rem)]
              font-semibold uppercase tracking-wider
              text-[#D4AF37]
            "
                    >
                        Exclusive Party
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="
              text-[clamp(1rem,3.2vw,1.5rem)]
              font-medium text-[#EDE4D9]/90
            "
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
                <div
                    className="
            bg-black/60 backdrop-blur-md 
            border border-[#D4AF37]/40 rounded-2xl 
            px-6 py-4 sm:px-8 sm:py-5 
            shadow-2xl shadow-[#D4AF37]/20
            text-center
          "
                >
                    <p className="text-4xl sm:text-5xl font-black text-[#D4AF37] leading-none">
                        $20
                    </p>
                    <p className="mt-1 text-sm sm:text-base uppercase font-bold tracking-wider text-[#EDE4D9]/90">
                        TO UNLOCK
                    </p>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D4AF37]/80">
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
                        boxShadow: "0 0 35px rgba(212,175,55,0.6)",
                        backgroundColor: "transparent",
                        color: "#D4AF37",
                        borderColor: "#D4AF37",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="
            px-8 py-4 sm:px-10 sm:py-5
            bg-[#D4AF37] text-black
            uppercase font-montserrat font-extrabold
            text-base sm:text-lg tracking-wider
            rounded-lg shadow-2xl
            border-2 border-[#D4AF37]/60
            transition-all duration-300 ease-out
          "
                >
                    Unlock Location
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-3 text-right text-[#D4AF37]/70 text-xs sm:text-sm font-medium tracking-wide"
                >
                    Limited slots • Qualify now
                </motion.p>
            </motion.div>
        </section>
    );
}