import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Check,
    Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./Future.css";

function Future() {
    const navigate = useNavigate();
    const [activeConcept, setActiveConcept] = useState("audio");

    const concepts = {
        audio: { number: "01", title: "Private Audio", detail: "NEUROSPHERE could make sound feel personal, adaptive and spatial — responding to the listener instead of simply playing back audio." },
        translation: { number: "02", title: "Neural Translation", detail: "A speculative interface where information could be translated into sound, context and intuitive signals without depending on a conventional display." },
        spatial: { number: "03", title: "Spatial Experience", detail: "A future layer where digital environments become spatial, responsive and aware of the relationship between the user and their surroundings." },
    };

    const selected = concepts[activeConcept];

    const enterFuture = () => {
        navigate("/login", { state: { from: "/future-lab", source: "N∆VO Future Lab" } });
    };

    return (
        <section
            className="navo-future"
            id="future"
        >
            {/* =====================================================
          BACKGROUND
      ===================================================== */}

            <div className="future-background">
                <div className="future-grid" />

                <div className="future-glow future-glow-one" />
                <div className="future-glow future-glow-two" />

                <div className="future-orbit future-orbit-one" />
                <div className="future-orbit future-orbit-two" />
            </div>

            {/* =====================================================
          CONTENT
      ===================================================== */}

            <div className="future-container">

                <motion.div
                    className="future-top"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="future-eyebrow">
                        <span />

                        N∆VO / FUTURE LAB
                    </div>

                    <div className="future-status">
                        <span className="future-status-dot" />

                        CONCEPT SYSTEM / 2040+
                    </div>
                </motion.div>

                {/* =====================================================
            HERO
        ===================================================== */}

                <motion.div
                    className="future-hero"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.9,
                    }}
                >
                    <div className="future-index">
                        04
                    </div>

                    <div className="future-title">
                        <span>NEURO</span>

                        <span>SPHERE</span>
                    </div>

                    <div className="future-subtitle">
                        <p>
                            The future of sound,
                            <br />
                            beyond sound.
                        </p>

                        <span>
                            Personal Neural
                            <br />
                            Audio System
                        </span>
                    </div>
                </motion.div>

                {/* =====================================================
            CONCEPT VISUAL
        ===================================================== */}

                <motion.div
                    className="future-concept"
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <div className="future-concept-frame">

                        <div className="future-concept-label">
                            <span>
                                N∆VO / NEUROSPHERE
                            </span>

                            <span>
                                SYSTEM 01
                            </span>
                        </div>

                        <div className="future-device">

                            <div className="future-device-glow" />

                            <div className="future-device-ring future-device-ring-one" />
                            <div className="future-device-ring future-device-ring-two" />
                            <div className="future-device-ring future-device-ring-three" />

                            <div className="future-device-core">
                                <div className="future-device-core-inner" />
                            </div>

                            <div className="future-device-signal signal-one" />
                            <div className="future-device-signal signal-two" />
                            <div className="future-device-signal signal-three" />
                        </div>

                        <div className="future-active-system">
                            <span>SYSTEM {selected.number}</span>
                            <strong>{selected.title}</strong>
                        </div>

                        <div className="future-concept-coordinate">
                            12° 04' 26"
                            <br />
                            NEURAL AUDIO FIELD
                        </div>

                        <div className="future-concept-bottom">
                            <span>
                                FUTURE CONCEPT
                            </span>

                            <span>
                                PREVIEW / FULL EXPERIENCE MEMBERS ONLY
                            </span>
                        </div>

                    </div>
                </motion.div>

                {/* =====================================================
            DESCRIPTION
        ===================================================== */}

                <motion.div
                    className="future-description"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="future-description-number">
                        {selected.number}
                    </div>

                    <div className="future-description-line" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeConcept}
                            className="future-description-copy"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <h3>
                                {selected.title}
                                <br />
                                beyond the screen.
                            </h3>

                            <p>{selected.detail}</p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* =====================================================
            EXPERIENCE CARDS
        ===================================================== */}

                <div className="future-features">

                    <motion.article
                        className={`future-feature ${activeConcept === "audio" ? "active" : ""}`}
                        onClick={() => setActiveConcept("audio")}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                        }}
                    >
                        <div className="future-feature-number">
                            01
                        </div>

                        <div className="future-feature-visual future-audio-visual">
                            <div className="audio-orbit audio-orbit-one" />
                            <div className="audio-orbit audio-orbit-two" />
                            <div className="audio-device">
                                <span className="audio-device-core" />
                                <span className="audio-wave audio-wave-one" />
                                <span className="audio-wave audio-wave-two" />
                                <span className="audio-wave audio-wave-three" />
                            </div>
                            <span className="future-visual-particle particle-one" />
                            <span className="future-visual-particle particle-two" />
                            <span className="future-visual-particle particle-three" />
                        </div>

                        <h4>
                            Private Audio
                        </h4>

                        <p>
                            A speculative personal audio layer
                            designed around individual perception.
                        </p>
                    </motion.article>

                    <motion.article
                        className={`future-feature ${activeConcept === "translation" ? "active" : ""}`}
                        onClick={() => setActiveConcept("translation")}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                            delay: 0.08,
                        }}
                    >
                        <div className="future-feature-number">
                            02
                        </div>

                        <div className="future-feature-visual future-neural-visual">
                            <div className="neural-network">
                                <span className="neural-node neural-node-one" />
                                <span className="neural-node neural-node-two" />
                                <span className="neural-node neural-node-three" />
                                <span className="neural-node neural-node-four" />
                                <span className="neural-node neural-node-five" />
                                <span className="neural-node neural-node-six" />
                                <span className="neural-line neural-line-one" />
                                <span className="neural-line neural-line-two" />
                                <span className="neural-line neural-line-three" />
                                <span className="neural-line neural-line-four" />
                                <span className="neural-line neural-line-five" />
                            </div>
                            <span className="neural-pulse" />
                        </div>

                        <h4>
                            Neural Translation
                        </h4>

                        <p>
                            Imagine information becoming instantly
                            understandable without another screen.
                        </p>
                    </motion.article>

                    <motion.article
                        className={`future-feature ${activeConcept === "spatial" ? "active" : ""}`}
                        onClick={() => setActiveConcept("spatial")}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                            delay: 0.16,
                        }}
                    >
                        <div className="future-feature-number">
                            03
                        </div>

                        <div className="future-feature-visual future-spatial-visual">
                            <div className="spatial-floor" />
                            <div className="spatial-cube">
                                <span className="cube-face cube-face-front" />
                                <span className="cube-face cube-face-side" />
                                <span className="cube-face cube-face-top" />
                            </div>
                            <div className="spatial-orbit spatial-orbit-one" />
                            <div className="spatial-orbit spatial-orbit-two" />
                            <span className="spatial-point spatial-point-one" />
                            <span className="spatial-point spatial-point-two" />
                        </div>

                        <h4>
                            Spatial Experience
                        </h4>

                        <p>
                            Digital environments that could eventually
                            respond to perception itself.
                        </p>
                    </motion.article>

                </div>

                {/* =====================================================
            FUTURE HARDWARE
        ===================================================== */}

                <motion.section
                    className="future-hardware"
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="future-hardware-heading">
                        <div>
                            <span className="future-hardware-eyebrow">
                                N∆VO FUTURE / HARDWARE
                            </span>

                            <h3>
                                Technology that works
                                <br />
                                around you.
                            </h3>
                        </div>

                        <p>
                            Future headphones, bands and rings are imagined as
                            everyday interfaces — helping people hear, understand,
                            control and experience information without constantly
                            reaching for a screen.
                        </p>
                    </div>

                    <div className="future-hardware-grid">

                        <article className="future-hardware-card">
                            <div className="future-hardware-number">01</div>

                            <div className="future-hardware-visual future-headphone-visual" aria-hidden="true">
                                <div className="headphone-arc" />
                                <div className="headphone-cup headphone-cup-left" />
                                <div className="headphone-cup headphone-cup-right" />
                                <div className="headphone-signal headphone-signal-one" />
                                <div className="headphone-signal headphone-signal-two" />
                            </div>

                            <span className="future-hardware-type">
                                HEADPHONES
                            </span>

                            <h4>
                                Private Audio
                            </h4>

                            <p>
                                Could adapt sound to the listener, create spatial
                                audio and deliver private directions, translation
                                or environmental cues without filling the room
                                with sound.
                            </p>

                            <div className="future-hardware-use">
                                <span>USE</span>
                                <strong>Hear information in context</strong>
                            </div>
                        </article>

                        <article className="future-hardware-card">
                            <div className="future-hardware-number">02</div>

                            <div className="future-hardware-visual future-band-visual" aria-hidden="true">
                                <div className="band-ring" />
                                <div className="band-core" />
                                <div className="band-signal band-signal-one" />
                                <div className="band-signal band-signal-two" />
                                <span className="band-node band-node-one" />
                                <span className="band-node band-node-two" />
                                <span className="band-node band-node-three" />
                            </div>

                            <span className="future-hardware-type">
                                BANDS
                            </span>

                            <h4>
                                Context + Haptics
                            </h4>

                            <p>
                                Could recognize gestures, communicate through
                                subtle haptic signals and provide quick access
                                to contextual information while keeping the
                                phone in your pocket.
                            </p>

                            <div className="future-hardware-use">
                                <span>USE</span>
                                <strong>Feel and control information</strong>
                            </div>
                        </article>

                        <article className="future-hardware-card">
                            <div className="future-hardware-number">03</div>

                            <div className="future-hardware-visual future-ring-visual" aria-hidden="true">
                                <div className="future-ring-body" />
                                <div className="future-ring-core" />
                                <div className="future-ring-orbit future-ring-orbit-one" />
                                <div className="future-ring-orbit future-ring-orbit-two" />
                            </div>

                            <span className="future-hardware-type">
                                RINGS
                            </span>

                            <h4>
                                Invisible Control
                            </h4>

                            <p>
                                Could turn small gestures into commands, provide
                                discreet notifications and act as a personal
                                identity or access interface for connected spaces.
                            </p>

                            <div className="future-hardware-use">
                                <span>USE</span>
                                <strong>Control without another screen</strong>
                            </div>
                        </article>

                    </div>
                </motion.section>

                {/* =====================================================
            SUBSCRIPTION
        ===================================================== */}

                <motion.div
                    className="future-membership"
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="future-membership-copy">
                        <div className="future-membership-eyebrow">
                            N∆VO FUTURE
                        </div>

                        <h3>
                            Tomorrow isn't
                            <br />
                            included in the archive.
                        </h3>

                        <p>
                            Enter the Future Lab and explore concepts
                            beyond today's technology.
                        </p>
                    </div>

                    <div className="future-membership-action">
                        <div className="future-benefits">
                            <div>
                                <Check size={13} strokeWidth={1.5} />
                                Full NEUROSPHERE experience
                            </div>
                            <div>
                                <Check size={13} strokeWidth={1.5} />
                                Future Lab concepts
                            </div>
                            <div>
                                <Check size={13} strokeWidth={1.5} />
                                Experimental interfaces
                            </div>
                        </div>

                        <div className="future-price">
                            <span>FUTURE ACCESS / PROTOTYPE</span>
                            <strong>₹99</strong>
                            <small>/ month</small>
                        </div>

                        <button type="button" onClick={enterFuture}>
                            Enter Future
                            <ArrowUpRight size={17} strokeWidth={1.5} />
                        </button>
                    </div>
                </motion.div>


                {/* =====================================================
            BOTTOM
        ===================================================== */}

                <div className="future-bottom">

                    <span>
                        04 — N∆VO FUTURE
                    </span>

                    <p>
                        The next chapter
                        <br />
                        hasn't happened yet.
                    </p>

                    <a href="#vault">
                        Return to Vault

                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                        />
                    </a>

                </div>

                <div className="future-scroll">
                    <ArrowDown
                        size={16}
                        strokeWidth={1}
                    />

                    <span>
                        CONTINUE
                    </span>
                </div>

            </div>



        </section>
    );
}

export default Future;