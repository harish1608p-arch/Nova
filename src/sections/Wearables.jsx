import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import {
    Circle,
    Headphones,
    Smartphone,
    ArrowUpRight,
    X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import haloProductImage from "../assets/navo-products/Navo-Halo.png";
import arcProductImage from "../assets/navo-products/Navo-Arc.png";
import linkProductImage from "../assets/navo-products/Navo-Link.png";
import threadProductImage from "../assets/navo-products/Navo-Thread.png";
import fluxProductImage from "../assets/navo-products/Navo-Flux.png";
import nodeProductImage from "../assets/navo-products/Navo-Node.png";

import "./Wearables.css";

export const wearables = [
    {
        id: "wearable-halo",
        number: "01",
        category: "AMBIENT INTERFACE",
        tagline: "Ambient Interface",
        name: "N∆VO Halo",
        description:
            "A smart pendant that stays in sync with your world through ambient notifications, AI assistance and subtle haptic feedback.",
        price: 12777,
        displayPrice: "₹12,777/-",
        productId: "wearable-halo",
        icon: Circle,
        className: "halo",
        image: haloProductImage,
        features: [
            {
                title: "AMBIENT LIGHT CONTROL",
                text: "Adaptive lighting that responds to your environment.",
            },
            {
                title: "SMART HOME CONNECTION",
                text: "Controls connected spaces through intelligent interaction.",
            },
            {
                title: "EMOTIONAL ENVIRONMENT",
                text: "Creates personalized atmosphere through AI.",
            },
        ],
    },
    {
        id: "wearable-arc",
        number: "02",
        category: "SPATIAL INTERFACE",
        tagline: "Future Display",
        name: "N∆VO Arc",
        description:
            "A next-generation ear interface imagined for immersive spatial audio and environmental awareness.",
        price: 15777,
        displayPrice: "₹15,777/-",
        productId: "wearable-arc",
        icon: Headphones,
        className: "arc",
        image: arcProductImage,
        features: [
            {
                title: "FLEXIBLE DISPLAY TECHNOLOGY",
                text: "A next-generation screen designed beyond traditional displays.",
            },
            {
                title: "IMMERSIVE VISUAL EXPERIENCE",
                text: "High-resolution visuals with depth and clarity.",
            },
            {
                title: "EDGELESS DESIGN",
                text: "Minimal structure with a seamless viewing surface.",
            },
        ],
    },
    {
        id: "wearable-link",
        number: "03",
        category: "AI CLIP",
        tagline: "Connectivity Device",
        name: "N∆VO Link",
        description:
            "A compact wearable clip for instant AI interaction, notifications and seamless device control.",
        price: 9777,
        displayPrice: "₹9,777/-",
        productId: "wearable-link",
        icon: Smartphone,
        className: "link",
        image: linkProductImage,
        features: [
            {
                title: "INSTANT DEVICE PAIRING",
                text: "Connects every N∆VO product instantly.",
            },
            {
                title: "HIGH-SPEED DATA TRANSFER",
                text: "Fast and reliable communication between devices.",
            },
            {
                title: "INTELLIGENT NETWORKING",
                text: "Creates a connected personal ecosystem.",
            },
        ],
    },
    {
        id: "wearable-thread",
        number: "04",
        category: "CONNECTED TEXTILE",
        tagline: "Smart Fabric / Wearable",
        name: "N∆VO Thread",
        description:
            "Intelligent fabric technology that brings interaction, awareness and expression to what you wear.",
        price: 11777,
        displayPrice: "₹11,777/-",
        productId: "wearable-thread",
        icon: Circle,
        className: "thread",
        image: threadProductImage,
        features: [
            {
                title: "BIOMETRIC SENSING",
                text: "Integrated sensors track body signals.",
            },
            {
                title: "ADAPTIVE MATERIAL SYSTEM",
                text: "Smart materials adjust to movement and comfort.",
            },
            {
                title: "CONNECTED WEARABLE EXPERIENCE",
                text: "Combines fashion, technology, and intelligence.",
            },
        ],
    },
    {
        id: "wearable-flux",
        number: "05",
        category: "HAPTIC INTERFACE",
        tagline: "Energy System",
        name: "N∆VO Flux",
        description:
            "A haptic wearable imagined to communicate through feeling — silent, intuitive and always with you.",
        price: 13777,
        displayPrice: "₹13,777/-",
        productId: "wearable-flux",
        icon: Circle,
        className: "flux",
        image: fluxProductImage,
        features: [
            {
                title: "INTELLIGENT POWER MANAGEMENT",
                text: "Optimizes energy usage automatically.",
            },
            {
                title: "FAST ENERGY TRANSFER",
                text: "Advanced charging technology for future devices.",
            },
            {
                title: "ECO EFFICIENCY SYSTEM",
                text: "Designed for sustainable everyday power.",
            },
        ],
    },
    {
        id: "wearable-node",
        number: "06",
        category: "MODULAR INTERFACE",
        tagline: "AI Hub",
        name: "N∆VO Node",
        description:
            "A modular wearable controller designed to adapt to your lifestyle. Wear it, attach it, move it.",
        price: 10777,
        displayPrice: "₹10,777/-",
        productId: "wearable-node",
        icon: Smartphone,
        className: "node",
        image: nodeProductImage,
        features: [
            {
                title: "CENTRAL AI PROCESSING",
                text: "The intelligence core of the N∆VO ecosystem.",
            },
            {
                title: "REAL-TIME DEVICE CONTROL",
                text: "Manages connected products instantly.",
            },
            {
                title: "EDGE COMPUTING SYSTEM",
                text: "Processes information faster with local intelligence.",
            },
        ],
    },
];

function WearableVisual({ Icon, className, image, name }) {
    return (
        <div className={`group wearable-visual ${className}`}>
            <div className="wearable-grid-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
            </div>

            {image && (
                <img
                    src={image}
                    alt={`${name} product render`}
                    className="
                        absolute
                        inset-0
                        z-10
                        h-full
                        w-full
                        object-contain
                        object-center
                        p-5
                        sm:p-7
                        md:p-8
                        lg:p-10
                        xl:p-12
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                    "
                    loading="lazy"
                    draggable="false"
                />
            )}

            <div className="hidden">
                <div className="wearable-glow" />
                <div className="wearable-orbit wearable-orbit-one" />
                <div className="wearable-orbit wearable-orbit-two" />

                <div className="wearable-object-shell">
                    <div className="wearable-object">
                        <div className="wearable-object-highlight" />

                        <Icon
                            className="wearable-object-icon"
                            strokeWidth={1}
                        />

                        <span className="wearable-object-detail wearable-object-detail-one" />
                        <span className="wearable-object-detail wearable-object-detail-two" />
                    </div>
                </div>
            </div>

            <div className="wearable-scan-line" aria-hidden="true" />

            <span className="wearable-coordinate">N∆VO / 2026</span>
        </div>
    );
}

function WearableDetail({ item, onClose, onAddToCart }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const feature = item.features[active];

    return (
        <div className="wearable-detail-overlay" onClick={onClose}>
            <div
                className="wearable-detail-modal"
                role="dialog"
                aria-modal="true"
                aria-label={item.name}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="wearable-detail-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={16} strokeWidth={1.5} />
                </button>

                <div className="wearable-detail-visual">
                    <img
                        src={item.image}
                        alt={`${item.name} product render`}
                        draggable="false"
                    />
                </div>

                <div className="wearable-detail-content">
                    <span className="wearable-detail-status">
                        {item.number} / {item.tagline.toUpperCase()}
                    </span>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <div className="wearable-feature-panel" key={active}>
                        <h4>
                            0{active + 1} / {feature.title}
                        </h4>
                        <p>{feature.text}</p>
                    </div>

                    <div
                        className="wearable-feature-tabs"
                        role="tablist"
                    >
                        {item.features.map((f, i) => (
                            <button
                                key={f.title}
                                type="button"
                                role="tab"
                                aria-selected={i === active}
                                aria-label={`Feature 0${i + 1}: ${f.title}`}
                                className={`wearable-feature-tab ${i === active ? "active" : ""
                                    }`}
                                onClick={() => setActive(i)}
                            >
                                <span>0{i + 1}</span>
                            </button>
                        ))}
                    </div>

                    <div className="wearable-detail-footer">
                        <span>{item.displayPrice}</span>
                    </div>

                    <button
                        type="button"
                        className="wearable-detail-cart-button"
                        onClick={() => onAddToCart(item)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

function Wearables() {
    const { addToCart } = useShop();
    const [selected, setSelected] = useState(null);

    const handleAddToCart = (item) => {
        addToCart(
            {
                ...item,
                id: item.id,
                collection: "N∆VO / Wearables",
                type: item.category,
                archiveItem: false,
            },
            1
        );
    };

    return (
        <section className="navo-wearables" id="wearables">
            <div className="wearables-container">
                <motion.div
                    className="wearables-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="wearables-eyebrow">
                        <span />
                        N∆VO / WEARABLES
                    </div>

                    <div className="wearables-heading-row">
                        <h2>
                            Technology,
                            <br />
                            <em>closer.</em>
                        </h2>

                        <p>
                            The next interface
                            <br />
                            doesn't always need
                            <br />
                            a screen.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="wearables-intro"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                >
                    <span>02</span>

                    <div className="wearables-intro-line" />

                    <p>
                        Experimental interfaces designed
                        <br />
                        around the human, not the device.
                    </p>
                </motion.div>

                <div className="wearables-grid">
                    {wearables.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.id}
                                className={`wearable-card wearable-card-${index + 1}`}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.06,
                                }}
                            >
                                <WearableVisual
                                    Icon={Icon}
                                    className={item.className}
                                    image={item.image}
                                    name={item.name}
                                />

                                <div className="wearable-info">
                                    <div className="wearable-meta">
                                        <span>{item.number}</span>
                                        <span>{item.category}</span>
                                    </div>

                                    <h3>{item.name}</h3>

                                    <p>{item.description}</p>

                                    <div className="wearable-footer">
                                        <span>{item.displayPrice}</span>

                                        <button
                                            type="button"
                                            className="wearable-explore"
                                            aria-label={`Explore ${item.name}`}
                                            onClick={() => setSelected(item)}
                                        >
                                            <span>Explore</span>

                                            <ArrowUpRight
                                                size={16}
                                                strokeWidth={1.5}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    className="wearables-bottom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65 }}
                >
                    <span>02 — WEARABLES</span>

                    <p>
                        Designed to disappear
                        <br />
                        into everyday life.
                    </p>

                    <Link to="/products" className="wearables-bottom-link">
                        Discover the collection
                        <ArrowUpRight size={17} strokeWidth={1.5} />
                    </Link>
                </motion.div>
            </div>

            {selected && (
                <WearableDetail
                    key={selected.id}
                    item={selected}
                    onClose={() => setSelected(null)}
                    onAddToCart={handleAddToCart}
                />
            )}
        </section>
    );
}

export default Wearables;
