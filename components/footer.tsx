// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-background text-cream-muted border-t border-primary/10">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
                {/* Social & Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base uppercase tracking-wider font-medium"
                >
                    <a
                        href="https://www.instagram.com/kayfiire02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 group"
                    >
                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                        @kayfiire02
                    </a>

                    <span className="text-primary/50 hidden sm:inline">•</span>

                    <a
                        href="tel:08085554134"
                        className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors duration-300"
                    >
                        <Phone className="w-4 h-4" />
                        08085554134
                    </a>
                </motion.div>

                {/* Subtle copyright line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-xs text-muted-foreground tracking-wide text-center"
                >
                    © {new Date().getFullYear()} Total Dominance Listening Party • Exclusive Experience
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
