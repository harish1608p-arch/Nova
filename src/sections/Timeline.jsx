import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Camera,
    Cpu,
    Gamepad2,
    Headphones,
    Laptop,
    Smartphone,
    Tv,
    Watch,
} from "lucide-react";

import "./Timeline.css";

const timelineItems = [
    {
        year: "2026",
        title: "The Intelligent Era",
        description:
            "Technology becomes more personal, more intelligent, and increasingly invisible.",
        products: [
            {
                name: "AI Audio",
                icon: Headphones,
            },
            {
                name: "Wearables",
                icon: Watch,
            },
            {
                name: "Spatial Computing",
                icon: Cpu,
            },
            {
                name: "Smart Glasses",
                icon: Smartphone,
            },
        ],
    },
    {
        year: "2020",
        title: "Everything Connected",
        description:
            "Wireless technology becomes part of everyday life, connecting people, homes and entertainment.",
        products: [
            {
                name: "TWS Audio",
                icon: Headphones,
            },
            {
                name: "Smart Watches",
                icon: Watch,
            },
            {
                name: "Smart TVs",
                icon: Tv,
            },
            {
                name: "Smart Speakers",
                icon: Cpu,
            },
        ],
    },
    {
        year: "2010",
        title: "The Mobile Revolution",
        description:
            "The smartphone becomes the centre of digital life and portable technology changes forever.",
        products: [
            {
                name: "Smartphones",
                icon: Smartphone,
            },
            {
                name: "Tablets",
                icon: Laptop,
            },
            {
                name: "Bluetooth",
                icon: Cpu,
            },
            {
                name: "Digital Cameras",
                icon: Camera,
            },
        ],
    },
    {
        year: "2000",
        title: "The Digital Shift",
        description:
            "Physical media begins disappearing as digital music, photography and computing take over.",
        products: [
            {
                name: "MP3 Players",
                icon: Headphones,
            },
            {
                name: "Digital Cameras",
                icon: Camera,
            },
            {
                name: "Feature Phones",
                icon: Smartphone,
            },
            {
                name: "DVD Players",
                icon: Tv,
            },
            {
                name: "Laptops",
                icon: Laptop,
            },
        ],
    },
    {
        year: "1997",
        title: "The Beginning",
        description:
            "A world of physical technology, mechanical interfaces and devices built to be experienced.",
        products: [
            {
                name: "CD Players",
                icon: Headphones,
            },
            {
                name: "Cassette Players",
                icon: Headphones,
            },
            {
                name: "Pagers",
                icon: Smartphone,
            },
            {
                name: "CRT TVs",
                icon: Tv,
            },
            {
                name: "Early Computers",
                icon: Laptop,
            },
            {
                name: "Game Consoles",
                icon: Gamepad2,
            },
        ],
    },
];

function TimelineProduct({ product }) {
    const Icon = product.icon;

    return (
        <div className="timeline-product">
            <div className="timeline-product-icon">
                <Icon size={20} strokeWidth={1.2} />
            </div>

            <span>{product.name}</span>
        </div>
    );
}

function Timeline() {
    const [activeYear, setActiveYear] = useState("2026");

    const activeIndex = timelineItems.findIndex(
        (item) => item.year === activeYear
    );

    const timelineProgress =
        activeIndex >= 0
            ? (activeIndex / (timelineItems.length - 1)) * 100
            : 0;

    return (
        <section
            className="navo-timeline"
            id="timeline"
            style={{
                "--timeline-progress": `${timelineProgress}%`,
            }}
        >
            <div className="timeline-container">

                {/* HEADER */}
                <motion.div
                    className="timeline-heading"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="timeline-eyebrow">
                        <span />
                        N∆VO / TECHNOLOGY EVOLUTION
                    </div>

                    <div className="timeline-heading-row">
                        <h2>
                            Technology
                            <br />
                            <em>evolved.</em>
                        </h2>

                        <p>
                            From intelligent interfaces
                            <br />
                            back to the machines
                            <br />
                            that started it all.
                        </p>
                    </div>
                </motion.div>

                {/* INTRO */}
                <motion.div
                    className="timeline-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="timeline-intro-number">
                        02
                    </div>

                    <div className="timeline-intro-line" />

                    <div className="timeline-intro-copy">
                        <span>2026 → 1997</span>

                        <p>
                            Every interface has an origin.
                            <br />
                            Every future has a beginning.
                        </p>
                    </div>

                    <ArrowDown
                        className="timeline-intro-arrow"
                        size={24}
                        strokeWidth={1}
                    />
                </motion.div>

                {/* TIMELINE */}
                <div className="timeline-track">
                    <div className="timeline-line">
                        <motion.div
                            className="timeline-progress"
                            animate={{
                                height: `${timelineProgress}%`,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: "easeOut",
                            }}
                        />
                    </div>

                    {timelineItems.map((item, index) => (
                        <motion.article
                            key={item.year}
                            className={`timeline-era timeline-era-${index + 1} ${activeYear === item.year
                                ? "is-active"
                                : ""
                                }`}
                            onClick={() => setActiveYear(item.year)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.75,
                                delay: index * 0.05,
                            }}
                        >
                            {/* YEAR */}
                            <div className="timeline-year-column">
                                <span className="timeline-year">
                                    {item.year}
                                </span>

                                <button
                                    type="button"
                                    className="timeline-year-dot"
                                    aria-label={`Focus ${item.year}`}
                                    aria-pressed={activeYear === item.year}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveYear(item.year);
                                    }}
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="timeline-era-content">
                                <div className="timeline-era-header">
                                    <div>
                                        <span className="timeline-era-index">
                                            0{index + 1}
                                        </span>

                                        <h3>{item.title}</h3>
                                    </div>

                                    <ArrowUpRight
                                        className="timeline-era-arrow"
                                        size={25}
                                        strokeWidth={1}
                                    />
                                </div>

                                <p className="timeline-era-description">
                                    {item.description}
                                </p>

                                <div className="timeline-products">
                                    {item.products.map((product) => (
                                        <TimelineProduct
                                            key={product.name}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* END STATEMENT */}
                <motion.div
                    className="timeline-bottom"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="timeline-bottom-line" />

                    <div className="timeline-bottom-content">
                        <span>
                            02 — THE EVOLUTION · {activeYear}
                        </span>

                        <p>
                            Technology moves forward.
                            <br />
                            N∆VO looks back.
                        </p>

                        <a href="#vault" aria-label="Enter The Vault">
                            Enter the Vault
                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.3}
                            />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Timeline;