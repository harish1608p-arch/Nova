/* =========================================================
   N∆VO — HOMEPAGE HERO
   STEP 4
   Future Concept / NEUROSPHERE
   Responsive Desktop / Tablet / Mobile
========================================================= */

import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
} from "lucide-react";

import "./Hero.css";


/* =========================================================
   HERO COMPONENT
========================================================= */

function Hero() {

    return (

        <section
            className="navo-hero"
            id="hero"
        >

            {/* =================================================
                ATMOSPHERE
            ================================================== */}

            <div
                className="navo-hero-atmosphere"
                aria-hidden="true"
            >

                <div
                    className="
                        navo-hero-glow
                        navo-hero-glow-one
                    "
                />

                <div
                    className="
                        navo-hero-glow
                        navo-hero-glow-two
                    "
                />

                <div
                    className="
                        navo-hero-glow
                        navo-hero-glow-three
                    "
                />

            </div>


            {/* =================================================
                GRID
            ================================================== */}

            <div
                className="navo-hero-grid"
                aria-hidden="true"
            />


            {/* =================================================
                HORIZON
            ================================================== */}

            <div
                className="navo-hero-horizon"
                aria-hidden="true"
            >

                <div
                    className="navo-hero-horizon-glow"
                />

            </div>


            {/* =================================================
                FUTURE ORBIT SYSTEM
            ================================================== */}

            <div
                className="navo-hero-orbits"
                aria-hidden="true"
            >

                <div
                    className="
                        navo-hero-orbit
                        navo-hero-orbit-one
                    "
                />

                <div
                    className="
                        navo-hero-orbit
                        navo-hero-orbit-two
                    "
                />

                <div
                    className="
                        navo-hero-orbit
                        navo-hero-orbit-three
                    "
                />

            </div>


            {/* =================================================
                HERO VISUAL OBJECT
            ================================================== */}

            <motion.div
                className="navo-hero-object-system"
                aria-hidden="true"

                initial={{
                    opacity: 0,
                    scale: 0.82,
                    y: 30,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}

                transition={{
                    duration: 1.4,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >

                {/* =============================================
                    OUTER HALO
                ============================================== */}

                <div
                    className="navo-hero-object-halo"
                />


                {/* =============================================
                    ORBITING LIGHT
                ============================================== */}

                <div
                    className="
                        navo-hero-object-orbit
                        navo-hero-object-orbit-one
                    "
                />

                <div
                    className="
                        navo-hero-object-orbit
                        navo-hero-object-orbit-two
                    "
                />


                {/* =============================================
                    FUTURISTIC AUDIO OBJECT
                ============================================== */}

                <div
                    className="navo-hero-device"
                >

                    <div
                        className="navo-hero-device-shell"
                    />

                    <div
                        className="navo-hero-device-highlight"
                    />

                    <div
                        className="navo-hero-device-core"
                    />

                    <div
                        className="
                            navo-hero-device-detail
                            navo-hero-device-detail-one
                        "
                    />

                    <div
                        className="
                            navo-hero-device-detail
                            navo-hero-device-detail-two
                        "
                    />

                </div>


                {/* =============================================
                    SIGNAL PARTICLES
                ============================================== */}

                <span
                    className="
                        navo-hero-particle
                        navo-hero-particle-one
                    "
                />

                <span
                    className="
                        navo-hero-particle
                        navo-hero-particle-two
                    "
                />

                <span
                    className="
                        navo-hero-particle
                        navo-hero-particle-three
                    "
                />

            </motion.div>


            {/* =================================================
                ROCK / TERRAIN LAYER
            ================================================== */}

            <div
                className="navo-hero-terrain"
                aria-hidden="true"
            >

                <div
                    className="navo-hero-terrain-light"
                />

                <div
                    className="navo-hero-terrain-surface"
                />

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <div className="navo-hero-container">


                {/* =================================================
                    EYEBROW
                ================================================== */}

                <motion.div
                    className="navo-hero-eyebrow"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: "easeOut",
                    }}
                >

                    <span />

                    FUTURE CONCEPT · 2040+

                </motion.div>


                {/* =================================================
                    MAIN TITLE
                ================================================== */}

                <motion.h1
                    className="navo-hero-title"

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <span>
                        NEURO
                    </span>

                    <span>
                        SPHERE
                    </span>

                </motion.h1>


                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                    className="navo-hero-description"

                    initial={{
                        opacity: 0,
                        y: 25,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.45,
                        ease: "easeOut",
                    }}
                >

                    The future of sound,
                    <br />

                    beyond sound.

                </motion.p>


                {/* =================================================
                    ACTIONS
                ================================================== */}

                <motion.div
                    className="navo-hero-actions"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.58,
                        ease: "easeOut",
                    }}
                >

                    <a
                        href="#future"
                        className="navo-hero-primary-button"
                    >

                        <span>
                            Explore Future
                        </span>

                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                        />

                    </a>


                    <a
                        href="#products"
                        className="navo-hero-secondary-button"
                    >

                        Explore N∆VO

                    </a>

                </motion.div>

            </div>


            {/* =================================================
                HERO FOOTER
            ================================================== */}

            <motion.div
                className="navo-hero-bottom"

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    duration: 1,
                    delay: 1,
                }}
            >


                {/* =============================================
                    SECTION NUMBER
                ============================================== */}

                <div
                    className="navo-hero-bottom-left"
                >

                    <span>
                        01
                    </span>

                    <p>
                        THE NEXT INTERFACE
                    </p>

                </div>


                {/* =============================================
                    SCROLL INDICATOR
                ============================================== */}

                <div
                    className="navo-hero-scroll"
                >

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <div
                        className="navo-hero-scroll-line"
                    >

                        <motion.span
                            animate={{
                                scaleY: [0, 1, 0],
                                transformOrigin: [
                                    "top",
                                    "top",
                                    "bottom",
                                ],
                            }}

                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                    </div>

                    <ArrowDown
                        size={13}
                        strokeWidth={1}
                    />

                </div>


                {/* =============================================
                    TIMELINE
                ============================================== */}

                <div
                    className="navo-hero-year"
                >

                    <span>
                        2026
                    </span>

                    <span>
                        →
                    </span>

                    <span>
                        1997
                    </span>

                </div>

            </motion.div>

        </section>
    );
}


/* =========================================================
   EXPORT
========================================================= */

export default Hero;