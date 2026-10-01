import { motion } from "framer-motion";
import {
    ArrowDownRight,
    ArrowUpRight,
    Camera,
    Gamepad2,
    Headphones,
    Smartphone,
    Tablet,
    Disc3,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Vault.css";

/* =========================================================
   N∆VO — THE VAULT
   Premium Historical Technology Archive
========================================================= */

const vaultItems = [
    {
        year: "1997",
        name: "Walkman",
        category: "Portable Audio",
        description:
            "Portable music became personal, physical and unmistakably human.",
        icon: Headphones,
        className: "vault-walkman",
        slug: "walkman",
        code: "A-97",
    },

    {
        year: "1998",
        name: "Game Console",
        category: "Gaming",
        description:
            "Dedicated hardware turned living rooms into interactive worlds.",
        icon: Gamepad2,
        className: "vault-console",
        slug: "game-console",
        code: "G-98",
    },

    {
        year: "2000",
        name: "iPod",
        category: "Digital Audio",
        description:
            "Thousands of songs became something you could carry in your pocket.",
        icon: Disc3,
        className: "vault-ipod",
        slug: "ipod",
        code: "M-00",
    },

    {
        year: "2003",
        name: "Digital Camera",
        category: "Photography",
        description:
            "Photography moved from film and development into instant digital capture.",
        icon: Camera,
        className: "vault-camera",
        slug: "digital-camera",
        code: "C-03",
    },

    {
        year: "2007",
        name: "iPhone",
        category: "Mobile",
        description:
            "A new generation of mobile computing placed a connected interface in every hand.",
        icon: Smartphone,
        className: "vault-phone",
        slug: "iphone",
        code: "P-07",
    },

    {
        year: "2010",
        name: "iPad",
        category: "Computing",
        description:
            "A larger touch interface blurred the boundary between computer and handheld device.",
        icon: Tablet,
        className: "vault-tablet",
        slug: "ipad",
        code: "T-10",
    },
];

/* =========================================================
   ARCHIVE OBJECT
========================================================= */

function ArchiveObject({ item }) {
    const Icon = item.icon;

    return (
        <div className={`vault-object vault-object-${item.slug}`}>
            <div className="vault-object-ring" />

            <div className="vault-object-frame">
                <div className="vault-object-topline">
                    <span>{item.code}</span>
                    <span>ARCHIVE OBJECT</span>
                </div>

                <div className="vault-object-device">
                    <div className="vault-object-device-inner">
                        <Icon
                            className="vault-object-icon"
                            size={
                                item.slug === "game-console"
                                    ? 92
                                    : 82
                            }
                            strokeWidth={1.05}
                        />

                        <span className="vault-object-screen" />

                        <span className="vault-object-button button-one" />

                        <span className="vault-object-button button-two" />

                        <span className="vault-object-button button-three" />

                        <span className="vault-object-lens" />

                        <span className="vault-object-slot" />
                    </div>
                </div>

                <div className="vault-object-bottomline">
                    <span>{item.year} / 01</span>
                    <span>SCAN 100%</span>
                </div>
            </div>

            <div className="vault-object-crosshair crosshair-one" />

            <div className="vault-object-crosshair crosshair-two" />

            <div className="vault-object-crosshair crosshair-three" />

            <div className="vault-object-crosshair crosshair-four" />

            <span className="vault-object-beam" />
        </div>
    );
}

/* =========================================================
   VAULT VISUAL
========================================================= */

function VaultVisual({ item }) {
    return (
        <div
            className={`vault-visual ${item.className}`}
            aria-label={`${item.year} ${item.name} archived technology`}
        >
            <div
                className="vault-visual-grid"
                aria-hidden="true"
            />

            <div className="vault-visual-glow" />

            <div className="vault-orbit orbit-a" />

            <div className="vault-orbit orbit-b" />

            <div className="vault-orbit orbit-c" />

            <ArchiveObject item={item} />

            <span className="vault-coordinate">
                N∆VO / ARCHIVE / {item.code}
            </span>

            <span className="vault-visual-year">
                {item.year}
            </span>

            <span className="vault-visual-index">
                0
                {vaultItems.findIndex(
                    (entry) => entry.slug === item.slug
                ) + 1}
            </span>
        </div>
    );
}

/* =========================================================
   VAULT
========================================================= */

function Vault() {
    return (
        <section
            className="navo-vault"
            id="vault"
        >
            <div className="vault-container">

                {/* =================================================
                   INTRODUCTION
                ================================================= */}

                <motion.header
                    className="vault-heading"
                    initial={{
                        opacity: 0,
                        y: 34,
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
                        duration: 0.75,
                    }}
                >
                    <div className="vault-eyebrow">
                        <span className="vault-eyebrow-line" />

                        N∆VO / THE VAULT

                        <span className="vault-eyebrow-count">
                            06 OBJECTS
                        </span>
                    </div>

                    <div className="vault-heading-row">
                        <div>
                            <span className="vault-kicker">
                                ARCHIVE / 1997—2010
                            </span>

                            <h2>
                                Technology
                                <br />
                                <em>
                                    that became timeless.
                                </em>
                            </h2>
                        </div>

                        <div className="vault-heading-copy">
                            <p>
                                A collection of objects that
                                changed the relationship between
                                people and technology.
                            </p>

                            <Link
                                to="/#timeline"
                                className="vault-heading-link"
                            >
                                <span>
                                    Continue through time
                                </span>

                                <ArrowDownRight
                                    size={15}
                                    strokeWidth={1.4}
                                />
                            </Link>
                        </div>
                    </div>
                </motion.header>

                {/* =================================================
                   ARCHIVE STATEMENT
                ================================================= */}

                <motion.div
                    className="vault-intro"
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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.08,
                    }}
                >
                    <div className="vault-intro-number">
                        03
                    </div>

                    <div className="vault-intro-rule" />

                    <div className="vault-intro-copy">
                        <span>
                            THE ARCHIVE
                        </span>

                        <p>
                            Before everything became connected,
                            <br />
                            technology had character.
                        </p>
                    </div>

                    <div className="vault-intro-status">
                        <span>
                            STATUS
                        </span>

                        <strong>
                            CURATED / 06
                        </strong>
                    </div>
                </motion.div>

                {/* =================================================
                   OBJECT GRID
                ================================================= */}

                <div className="vault-grid">
                    {vaultItems.map((item, index) => (
                        <motion.article
                            key={item.slug}
                            className={`vault-card vault-card-${index + 1}`}
                            initial={{
                                opacity: 0,
                                y: 42,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.07,
                            }}
                        >
                            <div className="vault-card-top">
                                <span>
                                    {item.code}
                                </span>

                                <span>
                                    {item.category}
                                </span>
                            </div>

                            <VaultVisual item={item} />

                            {/* =================================================
                               INFORMATION
                            ================================================= */}

                            <div className="vault-info">
                                <div className="vault-meta">
                                    <span>
                                        {item.year}
                                    </span>

                                    <span>
                                        {item.category}
                                    </span>
                                </div>

                                <h3>
                                    {item.name}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                                {/* =================================================
                                   EXPLORE ARCHIVE
                                ================================================= */}

                                <Link
                                    to={`/vault/${item.slug}`}
                                    className="vault-explore"
                                    aria-label={`Explore ${item.name} archive`}
                                >
                                    <span>
                                        Explore archive
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.4}
                                    />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* =================================================
                   FOOTER
                ================================================= */}

                <motion.footer
                    className="vault-bottom"
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="vault-bottom-mark">
                        <span>
                            03 — THE VAULT
                        </span>

                        <strong>
                            N∆VO
                        </strong>
                    </div>

                    <p>
                        Technology changes.
                        <br />
                        Great design stays.
                    </p>

                    <Link to="/#timeline">
                        Return to timeline

                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.4}
                        />
                    </Link>
                </motion.footer>

            </div>
        </section>
    );
}

export default Vault;