import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import {
    ArrowLeft,
    ArrowUpRight,
    Heart,
    Search,
    ShoppingBag,
    SlidersHorizontal,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

import products, { categories } from "../data/products";

import "./Products.css";


/* =========================================================
   PRODUCT VISUAL

   Product images have been removed.
   The visual area now keeps only the existing
   background grid, glow and coordinate information.
========================================================= */

function ProductVisual({ product }) {
    return (
        <div
            className={`products-card-visual ${product.className || ""
                }`}
        >
            <div className="products-visual-grid" />

            <div className="products-visual-glow" />

            <span className="products-coordinate">
                N∆VO / {product.year}
            </span>
        </div>
    );
}


/* =========================================================
   PRODUCTS PAGE
========================================================= */

function Products() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const {
        addToCart,
        toggleWishlist,
        isInWishlist,
    } = useShop();


    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "All" ||
                product.category === activeCategory;

            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                !search ||
                product.name.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search) ||
                product.type.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    const formatPrice = (price) => {
        return `₹${price.toLocaleString("en-IN")}/-`;
    };


    return (
        <main className="products-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="products-hero">

                <div className="products-hero-grid" />

                <div className="products-hero-container">

                    {/* =================================================
                        BREADCRUMB
                    ================================================= */}

                    <motion.div
                        className="products-breadcrumb"
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >

                        <Link to="/">
                            <ArrowLeft
                                size={15}
                                strokeWidth={1.4}
                            />

                            N∆VO
                        </Link>

                        <span>/</span>

                        <span>Products</span>

                    </motion.div>


                    {/* =================================================
                        HERO CONTENT
                    ================================================= */}

                    <motion.div
                        className="products-hero-content"
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.75,
                            delay: 0.1,
                        }}
                    >

                        <div className="products-eyebrow">

                            <span />

                            N∆VO / 2026 COLLECTION

                        </div>


                        <h1>
                            Technology,
                            <br />
                            <em>for now.</em>
                        </h1>


                        <p>
                            Intelligent products designed around
                            <br />
                            the way technology fits into everyday life.
                        </p>

                    </motion.div>


                    {/* =================================================
                        HERO META
                    ================================================= */}

                    <motion.div
                        className="products-hero-meta"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                    >

                        <span>
                            COLLECTION 01
                        </span>

                        <span>
                            2026 → NOW
                        </span>

                        <span>
                            {products.length} PRODUCTS
                        </span>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                PRODUCTS CONTENT
            ===================================================== */}

            <section className="products-content">

                <div className="products-content-container">


                    {/* =================================================
                        TOOLBAR
                    ================================================= */}

                    <motion.div
                        className="products-toolbar"
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
                            duration: 0.6,
                        }}
                    >


                        {/* =================================================
                            SEARCH
                        ================================================= */}

                        <div className="products-search">

                            <Search
                                size={18}
                                strokeWidth={1.4}
                            />

                            <input
                                type="text"
                                placeholder="Search products"
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                            />

                            {searchTerm && (
                                <button
                                    type="button"
                                    className="products-search-clear"
                                    onClick={() => setSearchTerm("")}
                                >
                                    Clear
                                </button>
                            )}

                        </div>


                        {/* =================================================
                            FILTER
                        ================================================= */}

                        <button
                            type="button"
                            className="products-filter-button"
                        >

                            <SlidersHorizontal
                                size={17}
                                strokeWidth={1.4}
                            />

                            Filter

                        </button>

                    </motion.div>


                    {/* =================================================
                        CATEGORY FILTER
                    ================================================= */}

                    <div className="products-categories">

                        <div className="products-category-label">
                            CATEGORY
                        </div>

                        <div className="products-category-list">

                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={
                                        activeCategory === category
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                >
                                    {category}
                                </button>
                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        RESULTS
                    ================================================= */}

                    <div className="products-results-bar">

                        <span>
                            {filteredProducts.length}{" "}
                            {filteredProducts.length === 1
                                ? "product"
                                : "products"}
                        </span>

                        <span>
                            {activeCategory === "All"
                                ? "ALL COLLECTION"
                                : activeCategory.toUpperCase()}
                        </span>

                    </div>


                    {/* =================================================
                        PRODUCT GRID
                    ================================================= */}

                    {filteredProducts.length > 0 ? (

                        <div className="products-grid">

                            {filteredProducts.map((product, index) => (

                                <motion.article
                                    key={product.id}
                                    className="products-card"
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
                                        amount: 0.1,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.05,
                                    }}
                                >


                                    {/* =================================================
                                        PRODUCT VISUAL
                                    ================================================= */}

                                    <div className="products-card-top">

                                        <ProductVisual
                                            product={product}
                                        />


                                        {/* =================================================
                                            WISHLIST
                                        ================================================= */}

                                        <button
                                            type="button"
                                            className={`products-wishlist ${isInWishlist(product.id)
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleWishlist(product)
                                            }
                                            aria-label={`Add ${product.name} to wishlist`}
                                        >

                                            <Heart
                                                size={18}
                                                strokeWidth={1.4}
                                                fill={
                                                    isInWishlist(product.id)
                                                        ? "currentColor"
                                                        : "none"
                                                }
                                            />

                                        </button>


                                        {/* =================================================
                                            CARD NUMBER
                                        ================================================= */}

                                        <span className="products-card-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                    </div>


                                    {/* =================================================
                                        PRODUCT INFORMATION
                                    ================================================= */}

                                    <div className="products-card-info">

                                        <div className="products-card-meta">

                                            <span>
                                                {product.category}
                                            </span>

                                            <span>
                                                {product.year}
                                            </span>

                                        </div>


                                        <h2>
                                            {product.name}
                                        </h2>


                                        <div className="products-card-type">
                                            {product.type}
                                        </div>


                                        <p>
                                            {product.description}
                                        </p>


                                        {/* =================================================
                                            CARD FOOTER
                                        ================================================= */}

                                        <div className="products-card-bottom">

                                            <strong>
                                                {formatPrice(product.price)}
                                            </strong>


                                            <div className="products-card-actions">


                                                {/* =================================================
                                                    EXPLORE BUTTON
                                                ================================================= */}

                                                <button
                                                    type="button"
                                                    className="products-explore-button"
                                                    onClick={() =>
                                                        navigate(
                                                            `/products/${product.id}`
                                                        )
                                                    }
                                                >

                                                    Explore

                                                    <ArrowUpRight
                                                        size={16}
                                                        strokeWidth={1.4}
                                                    />

                                                </button>


                                                {/* =================================================
                                                    ADD TO CART
                                                ================================================= */}

                                                <button
                                                    type="button"
                                                    className="products-cart-button"
                                                    onClick={() =>
                                                        addToCart(product)
                                                    }
                                                >

                                                    <ShoppingBag
                                                        size={16}
                                                        strokeWidth={1.5}
                                                    />

                                                    <span>
                                                        Add to Cart
                                                    </span>

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </motion.article>

                            ))}

                        </div>

                    ) : (


                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <motion.div
                            className="products-empty"
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >

                            <Search
                                size={32}
                                strokeWidth={1}
                            />

                            <h2>
                                No products found.
                            </h2>

                            <p>
                                Try another search term or category.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("All");
                                }}
                            >
                                Reset filters
                            </button>

                        </motion.div>

                    )}


                    {/* =================================================
                        BOTTOM CTA
                    ================================================= */}

                    <motion.div
                        className="products-bottom-cta"
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
                            duration: 0.7,
                        }}
                    >

                        <div>

                            <span>
                                N∆VO / COLLECTION 01
                            </span>

                            <h2>
                                Premium technology,
                                <br />
                                <em>
                                    without the premium barrier.
                                </em>
                            </h2>

                        </div>


                        <Link to="/#future">

                            Explore Future

                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.3}
                            />

                        </Link>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}


export default Products;