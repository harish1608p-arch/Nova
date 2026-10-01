import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Atom,
    Layers3,
    Sparkles,
} from "lucide-react";

import "./About.css";

const principles = [
    {
        number: "01",
        icon: Atom,
        title: "Technology with intent",
        text: "N∆VO explores technology as a meaningful part of everyday life — useful, considered and designed around people.",
    },
    {
        number: "02",
        icon: Layers3,
        title: "Less, but better",
        text: "Complex technology should feel simple. N∆VO reduces unnecessary friction and lets the experience speak for itself.",
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Designed for what is next",
        text: "From intelligent audio to speculative interfaces, N∆VO treats every product as part of a larger technology story.",
    },
];

const milestones = [
    ["1997", "The beginning", "A world of physical media, dedicated devices and deliberate interaction."],
    ["2000", "The digital shift", "Technology begins moving from objects toward connected experiences."],
    ["2010", "The mobile revolution", "Computing becomes personal, portable and increasingly always present."],
    ["2020", "Everything connected", "Devices begin behaving less like individual products and more like one ecosystem."],
    ["2026", "The intelligent era", "AI becomes part of the interface — adapting to the person using it."],
];

function About() {
    return (
        <section className="navo-about" id="about">
            <div className="about-background" aria-hidden="true">
                <div className="about-grid" />
                <div className="about-orb about-orb-one" />
                <div className="about-orb about-orb-two" />
            </div>

            <div className="about-container">
                <motion.div
                    className="about-top"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-eyebrow">
                        <span />
                        N∆VO / ABOUT
                    </div>

                    <div className="about-status">
                        <span />
                        EST. 1997 / EVOLVING
                    </div>
                </motion.div>

                <motion.div
                    className="about-hero"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="about-index">05</div>

                    <div className="about-heading">
                        <span>WE BUILD</span>
                        <span>WHAT COMES</span>
                        <span>NEXT.</span>
                    </div>

                    <div className="about-hero-copy">
                        <p>
                            N∆VO is a technology concept built around one simple
                            idea: the best technology should feel inevitable.
                        </p>

                        <span>
                            DESIGN
                            <br />
                            TECHNOLOGY
                            <br />
                            HUMAN EXPERIENCE
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-statement"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-statement-number">01</div>
                    <div className="about-statement-line" />

                    <div className="about-statement-copy">
                        <h2>
                            Technology should
                            <br />
                            disappear into life.
                        </h2>

                        <p>
                            N∆VO imagines a future where hardware, software and
                            intelligence work together quietly. We design products
                            and experiences that are expressive when they need to
                            be, and invisible when they do not.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="about-manifesto"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="about-manifesto-mark">N∆VO</div>

                    <div className="about-manifesto-center">
                        <span>OUR APPROACH</span>
                        <strong>
                            Quiet technology.
                            <br />
                            Clear experiences.
                        </strong>
                    </div>

                    <div className="about-manifesto-meta">
                        <span>LAB / 01</span>
                        <span>2026 → 1997</span>
                    </div>
                </motion.div>

                <section className="about-principles">
                    <div className="about-section-heading">
                        <span>02</span>
                        <div>
                            <small>THE N∆VO PRINCIPLES</small>
                            <h3>Built around the experience.</h3>
                        </div>
                    </div>

                    <div className="about-principles-grid">
                        {principles.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    className="about-principle"
                                    key={item.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.08,
                                    }}
                                >
                                    <div className="about-principle-top">
                                        <span>{item.number}</span>
                                        <Icon size={21} strokeWidth={1.25} />
                                    </div>

                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </section>

                <section className="about-evolution">
                    <div className="about-section-heading">
                        <span>03</span>
                        <div>
                            <small>THE N∆VO STORY</small>
                            <h3>Technology, moving forward.</h3>
                        </div>
                    </div>

                    <div className="about-evolution-layout">
                        <div className="about-evolution-intro">
                            <span>1997 — 2026</span>
                            <p>
                                N∆VO looks at technology as an evolving
                                conversation rather than a collection of isolated
                                products.
                            </p>
                        </div>

                        <div className="about-milestones">
                            {milestones.map(([year, title, text], index) => (
                                <motion.article
                                    className="about-milestone"
                                    key={year}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.07,
                                    }}
                                >
                                    <div className="about-milestone-year">
                                        {year}
                                    </div>

                                    <div className="about-milestone-marker">
                                        <span />
                                    </div>

                                    <div className="about-milestone-copy">
                                        <h4>{title}</h4>
                                        <p>{text}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <motion.section
                    className="about-future"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-future-index">04</div>

                    <div className="about-future-copy">
                        <small>N∆VO FUTURE</small>
                        <h3>
                            The next interface
                            <br />
                            is still being imagined.
                        </h3>
                        <p>
                            NEUROSPHERE and the N∆VO Future Lab explore
                            speculative technologies beyond today's products.
                            These are future concepts, not current capabilities.
                        </p>
                    </div>

                    <a href="/#future">
                        Explore Future
                        <ArrowUpRight size={17} strokeWidth={1.5} />
                    </a>
                </motion.section>

                <div className="about-bottom">
                    <span>05 — N∆VO / ABOUT</span>

                    <p>
                        Technology is not the destination.
                        <br />
                        The experience is.
                    </p>

                    <a href="/">
                        Return home
                        <ArrowUpRight size={16} strokeWidth={1.4} />
                    </a>
                </div>

                <div className="about-scroll">
                    <ArrowDown size={15} strokeWidth={1} />
                    <span>CONTINUE</span>
                </div>
            </div>
        </section>
    );
}

export default About;
