import { motion } from "framer-motion";
import {
    Watch,
    Circle,
    Glasses,
    Headphones,
    Smartphone,
    ArrowUpRight,
    ShoppingBag,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

import haloProductImage from "../assets/navo-products/Navo-Halo.png";
import arcProductImage from "../assets/navo-products/Navo-Arc.png";
import linkProductImage from "../assets/navo-products/Navo-Link.png";
import threadProductImage from "../assets/navo-products/Navo-Thread.png";
import fluxProductImage from "../assets/navo-products/Navo-Flux.png";
import nodeProductImage from "../assets/navo-products/Navo-Node.png";

import "./Wearables.css";

const wearables = [
    {
        id: "wearable-halo",
        number: "01",
        category: "AMBIENT INTERFACE",
        name: "N∆VO Halo",
        description:
            "A smart pendant that stays in sync with your world through ambient notifications, AI assistance and subtle haptic feedback.",
        price: 12777,
        productId: null,
        icon: Circle,
        className: "halo",
        image: haloProductImage,
    },
    {
        id: "wearable-arc",
        number: "02",
        category: "SPATIAL INTERFACE",
        name: "N∆VO Arc",
        description:
            "A next-generation ear interface imagined for immersive spatial audio and environmental awareness.",
        price: 15777,
        productId: null,
        icon: Headphones,
        className: "arc",
        image: arcProductImage,
    },
    {
        id: "wearable-link",
        number: "03",
        category: "AI CLIP",
        name: "N∆VO Link",
        description:
            "A compact wearable clip for instant AI interaction, notifications and seamless device control.",
        price: 9777,
        productId: null,
        icon: Smartphone,
        className: "link",
        image: linkProductImage,
    },
    {
        id: "wearable-thread",
        number: "04",
        category: "CONNECTED TEXTILE",
        name: "N∆VO Thread",
        description:
            "Intelligent fabric technology that brings interaction, awareness and expression to what you wear.",
        price: 11777,
        productId: null,
        icon: Circle,
        className: "thread",
        image: threadProductImage,
    },
    {
        id: "wearable-flux",
        number: "05",
        category: "HAPTIC INTERFACE",
        name: "N∆VO Flux",
        description:
            "A haptic wearable imagined to communicate through feeling — silent, intuitive and always with you.",
        price: 13777,
        productId: null,
        icon: Circle,
        className: "flux",
        image: fluxProductImage,
    },
    {
        id: "wearable-node",
        number: "06",
        category: "MODULAR INTERFACE",
        name: "N∆VO Node",
        description:
            "A modular wearable controller designed to adapt to your lifestyle. Wear it, attach it, move it.",
        price: 10777,
        productId: null,
        icon: Smartphone,
        className: "node",
        image: nodeProductImage,
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

            {/* =================================================
                REALISTIC PRODUCT IMAGE
            ================================================== */}

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

            {/* Legacy CSS visual layers remain hidden so the
                realistic render is the only visible product object. */}

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

            <span className="wearable-coordinate">
                N∆VO / 2026
            </span>
        </div>
    );
}

function Wearables() {
    const navigate = useNavigate();
    const { addToCart } = useShop();

    const openWearable = (item) => {
        navigate(`/wearables/${item.id.replace("wearable-", "")}`);
    };

    const handleQuickAdd = (item) => {
        addToCart(item, 1);
    };

    return (
        <section
            className="navo-wearables"
            id="wearables"
        >
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
                                key={item.name}
                                className={`wearable-card wearable-card-${index + 1}`}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ duration: 0.65, delay: index * 0.06 }}
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
                                        <span>₹{item.price.toLocaleString("en-IN")}/-</span>

                                        <div className="wearable-footer-actions">
                                            <button
                                                type="button"
                                                className="wearable-add-button"
                                                onClick={() => handleQuickAdd(item)}
                                                aria-label={`Add ${item.name} to cart`}
                                            >
                                                <ShoppingBag size={15} strokeWidth={1.5} />
                                                <span>Add</span>
                                            </button>

                                            <button
                                                type="button"
                                                className="wearable-explore"
                                                aria-label={`Explore ${item.name}`}
                                                onClick={() => openWearable(item)}
                                            >
                                                <span>Explore</span>
                                                <ArrowUpRight size={16} strokeWidth={1.5} />
                                            </button>
                                        </div>
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
        </section>
    );
}

export default Wearables;
