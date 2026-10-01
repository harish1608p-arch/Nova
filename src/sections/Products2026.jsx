/* =========================================================
   N∆VO — 2026 PRODUCT SYSTEM
   STEP 5

   Product storytelling first.
   Commerce remains visually secondary.

   Responsive:
   Desktop / Laptop / Tablet / Mobile
========================================================= */

import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Glasses,
    Headphones,
    Smartphone,
    Watch,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import airProductImage from "../assets/navo-products/air.png";
import loopProductImage from "../assets/navo-products/loop.png";
import visionProductImage from "../assets/navo-products/vision.png";
import oneProductImage from "../assets/navo-products/one.png";

import "./Products2026.css";


/* =========================================================
   FEATURED 2026 PRODUCTS
========================================================= */

const featuredProducts = [
    {
        number: "01",

        category: "AI AUDIO",

        name: "N∆VO Air",

        description:
            "Intelligent wireless audio designed around the way you move, listen and live.",

        price:
            "₹7,777/-",

        icon: Headphones,

        productId: 1,

        type: "air",

        image: airProductImage,

        material:
            "Liquid metal / soft-touch",

        specification:
            "Adaptive spatial audio",
    },

    {
        number: "02",

        category: "WEARABLE",

        name: "N∆VO Loop",

        description:
            "A minimal smart band that keeps the essential technology close.",

        price:
            "₹8,999/-",

        icon: Watch,

        productId: 2,

        type: "loop",

        image: loopProductImage,

        material:
            "Ceramic / woven polymer",

        specification:
            "Everyday intelligence",
    },

    {
        number: "03",

        category: "SMART GLASSES",

        name: "N∆VO Vision",

        description:
            "A connected visual layer for information, communication and everyday life.",

        price:
            "₹14,777/-",

        icon: Glasses,

        productId: 4,

        type: "vision",

        image: visionProductImage,

        material:
            "Titanium / optical glass",

        specification:
            "Contextual interface",
    },

    {
        number: "04",

        category: "MOBILE COMPUTING",

        name: "N∆VO One",

        description:
            "A clean, intelligent computing experience built for the next everyday.",

        price:
            "₹19,777/-",

        icon: Smartphone,

        productId: 6,

        type: "one",

        image: oneProductImage,

        material:
            "Aluminium / ceramic",

        specification:
            "AI companion",
    },
];


/* =========================================================
   PRODUCT VISUAL
========================================================= */

function ProductVisual({
    product,
}) {

    const Icon = product.icon;


    return (

        <div
            className={`
                navo-product-visual
                navo-product-visual-${product.type}
            `}
        >

            {/* =================================================
                VISUAL BACKGROUND
            ================================================== */}

            <div
                className="navo-product-visual-background"
            />

            <div
                className="navo-product-visual-grid"
            />

            <div
                className="navo-product-visual-glow"
            />


            {/* =================================================
                PRODUCT LIGHT
            ================================================== */}

            <div
                className="
                    navo-product-light
                    navo-product-light-one
                "
            />

            <div
                className="
                    navo-product-light
                    navo-product-light-two
                "
            />


            {/* =================================================
                ORBIT SYSTEM
            ================================================== */}

            <div
                className="
                    navo-product-orbit
                    navo-product-orbit-one
                "
            />

            <div
                className="
                    navo-product-orbit
                    navo-product-orbit-two
                "
            />


            {/* =================================================
                PRODUCT OBJECT
            ================================================== */}

            <motion.div
                className={`
                    navo-product-object
                    navo-product-object-${product.type}
                `}

                initial={{
                    opacity: 0,
                    y: 18,
                    scale: 0.94,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}

                viewport={{
                    once: true,
                    amount: 0.25,
                }}

                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >

                {/* =================================================
                    REALISTIC PRODUCT IMAGE
                ================================================== */}

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    draggable={false}
                    className="absolute left-1/2 top-1/2 z-[4] h-[260px] w-[360px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
                />

                {/* =================================================
                    LEGACY CSS PRODUCT OBJECTS
                    Kept in this file intentionally so the original
                    2026 product system remains preserved. The
                    realistic image above is now the visible product.
                ================================================== */}

                {/* =================================================
                    AIR
                ================================================== */}

                {product.type === "air" && (

                    <div className="product-render-air" style={{ display: "none" }}>

                        <div
                            className="
                                product-air-case
                            "
                        >

                            <div
                                className="
                                    product-air-case-highlight
                            "
                            />

                            <div
                                className="
                                    product-air-case-inner
                            "
                            >

                                <span
                                    className="
                                        product-air-earbud
                                        product-air-earbud-left
                                    "
                                />

                                <span
                                    className="
                                        product-air-earbud
                                        product-air-earbud-right
                                    "
                                />

                            </div>

                        </div>

                    </div>

                )}


                {/* =================================================
                    LOOP
                ================================================== */}

                {product.type === "loop" && (

                    <div className="product-render-loop" style={{ display: "none" }}>

                        <div
                            className="
                                product-loop-band
                            "
                        />

                        <div
                            className="
                                product-loop-body
                            "
                        >

                            <div
                                className="
                                    product-loop-screen
                            "
                            >

                                <span>
                                    09:41
                                </span>

                                <small>
                                    N∆VO
                                </small>

                            </div>

                        </div>

                    </div>

                )}


                {/* =================================================
                    VISION
                ================================================== */}

                {product.type === "vision" && (

                    <div className="product-render-vision" style={{ display: "none" }}>

                        <div
                            className="
                                product-vision-lens
                                product-vision-lens-left
                            "
                        />

                        <div
                            className="
                                product-vision-bridge
                            "
                        />

                        <div
                            className="
                                product-vision-lens
                                product-vision-lens-right
                            "
                        />

                        <div
                            className="
                                product-vision-arm
                                product-vision-arm-left
                            "
                        />

                        <div
                            className="
                                product-vision-arm
                                product-vision-arm-right
                            "
                        />

                    </div>

                )}


                {/* =================================================
                    N∆VO ONE
                ================================================== */}

                {product.type === "one" && (

                    <div className="product-render-one" style={{ display: "none" }}>

                        <div
                            className="
                                product-one-body
                            "
                        >

                            <div
                                className="
                                    product-one-camera
                            "
                            >

                                <span />
                                <span />
                                <span />

                            </div>

                            <div
                                className="
                                    product-one-screen
                            "
                            >

                                <span>
                                    N∆VO
                                </span>

                                <strong>
                                    AI
                                </strong>

                                <small>
                                    2026
                                </small>

                            </div>

                            <div
                                className="
                                    product-one-reflection
                            "
                            />

                        </div>

                    </div>

                )}


                {/* =================================================
                    FALLBACK ICON
                ================================================== */}

                {![
                    "air",
                    "loop",
                    "vision",
                    "one",
                ].includes(product.type) && (

                        <Icon
                            className="
                            navo-product-fallback-icon
                        "
                            strokeWidth={1}
                        />

                    )}

            </motion.div>


            {/* =================================================
                VISUAL COORDINATES
            ================================================== */}

            <div
                className="
                    navo-product-coordinate
                "
            >

                N∆VO / 2026

            </div>


            {/* =================================================
                VISUAL NUMBER
            ================================================== */}

            <div
                className="
                    navo-product-visual-number
                "
            >

                {product.number}

            </div>

        </div>
    );
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
    product,
    featured = false,
}) {

    const navigate = useNavigate();


    const openProduct = () => {

        navigate(
            `/products/${product.productId}`
        );
    };


    return (

        <motion.article
            className={`
                navo-product-card
                ${featured
                    ? "navo-product-card-featured"
                    : ""
                }
                navo-product-card-${product.type}
            `}

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
                amount: 0.12,
            }}

            transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            {/* =================================================
                PRODUCT VISUAL
            ================================================== */}

            <ProductVisual
                product={product}
            />


            {/* =================================================
                PRODUCT INFORMATION
            ================================================== */}

            <div
                className="
                    navo-product-information
                "
            >

                <div
                    className="
                        navo-product-meta
                    "
                >

                    <span>
                        {product.number}
                    </span>

                    <span>
                        {product.category}
                    </span>

                </div>


                <h3>
                    {product.name}
                </h3>


                <p>
                    {product.description}
                </p>


                {/* =================================================
                    TECHNICAL META
                ================================================== */}

                <div
                    className="
                        navo-product-specs
                    "
                >

                    <span>
                        {product.material}
                    </span>

                    <span>
                        {product.specification}
                    </span>

                </div>


                {/* =================================================
                    PRODUCT FOOTER
                ================================================== */}

                <div
                    className="
                        navo-product-footer
                    "
                >

                    <span
                        className="
                            navo-product-price
                        "
                    >
                        {product.price}
                    </span>


                    <button
                        type="button"
                        onClick={openProduct}
                        className="
                            navo-product-explore
                        "
                    >

                        <span>
                            Explore
                        </span>

                        <ArrowUpRight
                            size={16}
                            strokeWidth={1.4}
                        />

                    </button>

                </div>

            </div>

        </motion.article>
    );
}


/* =========================================================
   PRODUCTS 2026 SECTION
========================================================= */

function Products2026() {

    return (

        <section
            className="
                navo-products-2026
            "
            id="products"
        >

            {/* =================================================
                BACKGROUND
            ================================================== */}

            <div
                className="
                    navo-products-background
                "
                aria-hidden="true"
            >

                <div
                    className="
                        navo-products-background-glow
                    "
                />

                <div
                    className="
                        navo-products-background-grid
                    "
                />

            </div>


            {/* =================================================
                HEADING
            ================================================== */}

            <div
                className="
                    navo-products-heading
                "
            >

                <motion.div
                    className="
                        navo-section-eyebrow
                    "

                    initial={{
                        opacity: 0,
                        y: 15,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: 0.6,
                    }}
                >

                    <span />

                    N∆VO / 2026

                </motion.div>


                <div
                    className="
                        navo-products-title-row
                    "
                >

                    <motion.h2
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: 0.8,
                        }}
                    >

                        Technology

                        <br />

                        <em>
                            for now.
                        </em>

                    </motion.h2>


                    <motion.p
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                    >

                        The present is already
                        <br />

                        becoming history.

                    </motion.p>

                </div>

            </div>


            {/* =================================================
                INTRODUCTION
            ================================================== */}

            <div
                className="
                    navo-products-intro
                "
            >

                <span>
                    2026
                </span>

                <div
                    className="
                        navo-intro-line
                    "
                />

                <p>
                    Explore the N∆VO collection —
                    designed for the technology
                    we live with today.
                </p>

            </div>


            {/* =================================================
                PRODUCT GRID
            ================================================== */}

            <div
                className="
                    navo-products-grid
                "
            >

                {featuredProducts.map(
                    (product, index) => (

                        <ProductCard
                            key={product.productId}
                            product={product}
                            featured={index === 0}
                        />

                    )
                )}

            </div>


            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}

            <div
                className="
                    navo-products-bottom
                "
            >

                <span>
                    N∆VO / COLLECTION 01
                </span>


                <p>
                    Premium technology,
                    <br />
                    without the premium barrier.
                </p>


                <a
                    href="/products"
                    className="
                        navo-products-collection-link
                    "
                >

                    <span>
                        View collection
                    </span>

                    <ArrowUpRight
                        size={17}
                        strokeWidth={1.4}
                    />

                </a>

            </div>

        </section>
    );
}


/* =========================================================
   EXPORT
========================================================= */

export default Products2026;