import { useState } from "react";

import { motion } from "framer-motion";

import {

    ArrowLeft,

    ArrowRight,

    ArrowUpRight,

    ShoppingBag,

    Heart,

} from "lucide-react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useShop } from "../context/ShopContext";



import "./VaultDetails.css";



/*

=========================================================

N∆VO — THE VAULT / DETAILS



IMPORTANT:

\- Archive product photographs are NOT rendered on this page.

\- Image URLs are kept only in the data so the cart can use

  them when the archive item is added.

\- Vault remains an archive experience, but Add to Cart works.

=========================================================

*/



const vaultItems = [

    {

        id: "vault-walkman",

        slug: "walkman",

        year: "1997",

        name: "Walkman",

        category: "Portable Audio",

        type: "Classic Portable Audio",

        description:

            "Portable music became personal, physical and unmistakably human.",

        price: 4997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/Walkman.jpg",

        className: "vault-detail-walkman",

    },

    {

        id: "vault-game-console",

        slug: "game-console",

        year: "1998",

        name: "Game Console",

        category: "Gaming",

        type: "Classic Game Console",

        description:

            "Dedicated hardware turned living rooms into interactive worlds.",

        price: 6997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/N64-Console-Set.jpg",

        className: "vault-detail-console",

    },

    {

        id: "vault-ipod",

        slug: "ipod",

        year: "2000",

        name: "iPod",

        category: "Digital Audio",

        type: "Classic Digital Audio",

        description:

            "Thousands of songs became something you could carry in your pocket.",

        price: 5997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/IPod_1Gen.jpg",

        className: "vault-detail-ipod",

    },

    {

        id: "vault-digital-camera",

        slug: "digital-camera",

        year: "2003",

        name: "Digital Camera",

        category: "Photography",

        type: "Compact Digital Camera",

        description:

            "Photography moved from film and development into instant digital capture.",

        price: 7997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/Canon_PowerShot_A70\_(front).JPG",

        className: "vault-detail-camera",

    },

    {

        id: "vault-iphone",

        slug: "iphone",

        year: "2007",

        name: "iPhone",

        category: "Mobile",

        type: "First-Generation Smartphone",

        description:

            "A new generation of mobile computing placed a connected interface in every hand.",

        price: 12997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/iPhone.jpg",

        className: "vault-detail-phone",

    },

    {

        id: "vault-ipad",

        slug: "ipad",

        year: "2010",

        name: "iPad",

        category: "Computing",

        type: "First-Generation Tablet",

        description:

            "A larger touch interface blurred the boundary between computer and handheld device.",

        price: 14997,

        image:

            "https\://commons.wikimedia.org/wiki/Special:Redirect/file/IPad-WiFi-1stGen.jpg",

        className: "vault-detail-tablet",

    },

];



function ArchiveScanner({ product }) {

    return (

        <div className={`vault-details-visual ${product.className}`}>

            <div className="vault-details-grid" aria-hidden="true" />



            <div className="vault-details-orbit orbit-one" />

            <div className="vault-details-orbit orbit-two" />



            <div className="vault-details-glow" />



            <div className="vault-details-scanner">

                <span className="scanner-corner scanner-corner-tl" />

                <span className="scanner-corner scanner-corner-tr" />

                <span className="scanner-corner scanner-corner-bl" />

                <span className="scanner-corner scanner-corner-br" />



                <div className="scanner-object">

                    <img

                        className="vault-details-product-image"

                        src={product.image}

                        alt={product.name}

                        loading="eager"

                    />

                </div>



                <span className="scanner-label scanner-label-top">

                    ARCHIVE OBJECT

                </span>



                <span className="scanner-label scanner-label-left">

                    {product.year} / 01

                </span>



                <span className="scanner-label scanner-label-right">

                    SCAN 100%

                </span>



                <span className="scanner-label scanner-label-bottom">

                    {product.name.toUpperCase()}

                </span>



                <span className="scanner-beam" />

            </div>



            <span className="vault-details-coordinate">

                N∆VO / {product.year}

            </span>

        </div>

    );

}



function VaultDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {

        addToCart,

        toggleWishlist,

        isInWishlist,

    } = useShop();



    const currentIndex = vaultItems.findIndex(

        (item) => item.slug === id

    );



    const product =

        currentIndex >= 0 ? vaultItems[currentIndex] : null;



    if (!product) {

        return (

            <section className="vault-details vault-details-not-found">

                <div className="vault-details-container">

                    <span className="vault-details-section-label">

                        N∆VO / THE VAULT

                    </span>



                    <h1>Archive entry not found.</h1>



                    <Link

                        to="/#vault"

                        className="vault-details-back-link"

                    >

                        <ArrowLeft size={16} strokeWidth={1.4} />

                        Back to Vault

                    </Link>

                </div>

            </section>

        );

    }



    const previous =

        vaultItems[

        (currentIndex - 1 + vaultItems.length) %

        vaultItems.length

        ];



    const next =

        vaultItems[(currentIndex + 1) % vaultItems.length];



    const cartProduct = {

        ...product,

        collection: "N∆VO / Archive",

        archiveItem: true,

    };
    const handleAddToCart = () => {
        addToCart(cartProduct, 1);
    };



    return (

        <section className="vault-details">

            <div className="vault-details-container">



                <motion.div

                    className="vault-details-topbar"

                    initial={{ opacity: 0, y: -12 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.5 }}

                >

                    <Link

                        to="/#vault"

                        className="vault-details-breadcrumb"

                    >

                        Vault

                        <span>/</span>

                        {product.year}

                        <span>/</span>

                        {product.name}

                    </Link>



                    <span className="vault-details-counter">

                        0{currentIndex + 1} / 0{vaultItems.length}

                    </span>

                </motion.div>



                <div className="vault-details-layout">



                    <motion.div

                        className="vault-details-copy"

                        initial={{ opacity: 0, x: -25 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{

                            duration: 0.7,

                            delay: 0.05,

                        }}

                    >

                        <span className="vault-details-eyebrow">

                            N∆VO / ARCHIVE

                        </span>



                        <span className="vault-details-year">

                            {product.year}

                        </span>



                        <h1>{product.name}</h1>



                        <p className="vault-details-description">

                            {product.description}

                        </p>



                        <div className="vault-details-meta">

                            <div>

                                <span>Category</span>

                                <strong>{product.category}</strong>

                            </div>



                            <div>

                                <span>Year</span>

                                <strong>{product.year}</strong>

                            </div>



                            <div>

                                <span>Type</span>

                                <strong>{product.type}</strong>

                            </div>

                        </div>



                        <div className="vault-details-purchase">

                            <div className="vault-details-price">

                                <span>ARCHIVE EDITION</span>



                                <strong>

                                    ₹

                                    {product.price.toLocaleString(

                                        "en-IN"

                                    )}

                                    /-

                                </strong>

                            </div>



                            <div className="vault-details-actions">
                                <button

                                    type="button"

                                    className="vault-details-cart-button"

                                    onClick={handleAddToCart}

                                >

                                    <ShoppingBag

                                        size={17}

                                        strokeWidth={1.5}

                                    />

                                    Add to cart

                                </button>



                                <button

                                    type="button"

                                    className={

                                        isInWishlist(product.id)

                                            ? "vault-details-wishlist active"

                                            : "vault-details-wishlist"

                                    }

                                    onClick={() => toggleWishlist(cartProduct)}

                                    aria-label="Add to wishlist"

                                >

                                    <Heart

                                        size={19}

                                        strokeWidth={1.5}

                                        fill={

                                            isInWishlist(product.id)

                                                ? "currentColor"

                                                : "none"

                                        }

                                    />

                                </button>

                            </div>

                        </div>



                        <p className="vault-details-purchase-note">

                            Frontend archive-store concept.

                            Adding this archive item to the cart is

                            available for the project checkout flow.

                        </p>



                        <Link

                            to="/#vault"

                            className="vault-details-explore-link"

                        >

                            <span>Back to Vault</span>

                            <ArrowUpRight

                                size={16}

                                strokeWidth={1.4}

                            />

                        </Link>

                    </motion.div>



                    <motion.div

                        initial={{

                            opacity: 0,

                            scale: 0.96,

                        }}

                        animate={{

                            opacity: 1,

                            scale: 1,

                        }}

                        transition={{

                            duration: 0.8,

                            delay: 0.08,

                        }}

                    >

                        <ArchiveScanner product={product} />

                    </motion.div>



                    <motion.nav

                        className="vault-details-index"

                        initial={{

                            opacity: 0,

                            x: 18,

                        }}

                        animate={{

                            opacity: 1,

                            x: 0,

                        }}

                        transition={{

                            duration: 0.6,

                            delay: 0.15,

                        }}

                        aria-label="Vault archive"

                    >

                        {vaultItems.map((item, index) => (

                            <button

                                type="button"

                                key={item.slug}

                                className={

                                    index === currentIndex

                                        ? "active"

                                        : ""

                                }

                                onClick={() =>

                                    navigate(

                                        `/vault/${item.slug}`

                                    )

                                }

                            >

                                <span>{item.year}</span>

                                <strong>{item.name}</strong>

                            </button>

                        ))}

                    </motion.nav>

                </div>



                <motion.div

                    className="vault-details-bottom"

                    initial={{

                        opacity: 0,

                        y: 18,

                    }}

                    animate={{

                        opacity: 1,

                        y: 0,

                    }}

                    transition={{

                        duration: 0.6,

                        delay: 0.2,

                    }}

                >

                    <button

                        type="button"

                        className="vault-details-page-nav"

                        onClick={() =>

                            navigate(

                                `/vault/${previous.slug}`

                            )

                        }

                    >

                        <ArrowLeft

                            size={15}

                            strokeWidth={1.3}

                        />



                        <span>

                            Previous

                            <strong>{previous.name}</strong>

                        </span>

                    </button>



                    <span className="vault-details-position">

                        0{currentIndex + 1} / 0{vaultItems.length}

                    </span>



                    <button

                        type="button"

                        className="vault-details-page-nav vault-details-next"

                        onClick={() =>

                            navigate(`/vault/${next.slug}`)

                        }

                    >

                        <span>

                            Next

                            <strong>{next.name}</strong>

                        </span>



                        <ArrowRight

                            size={15}

                            strokeWidth={1.3}

                        />

                    </button>



                    <Link

                        to="/#vault"

                        className="vault-details-return"

                    >

                        Back to Vault

                        <ArrowUpRight

                            size={15}

                            strokeWidth={1.3}

                        />

                    </Link>

                </motion.div>



            </div>

        </section>

    );

}



export default VaultDetails;
