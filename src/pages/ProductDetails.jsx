import { useState } from "react";


import { useParams, Link } from "react-router-dom";


import {


    ArrowLeft,


    ArrowRight,


    ArrowUpRight,


    Heart,
    ShoppingBag,


} from "lucide-react";


import { motion, AnimatePresence } from "framer-motion";


import products from "../data/products";

import { wearables } from "../sections/Wearables";


import airProductImage from "../assets/navo-products/air.png";


import loopProductImage from "../assets/navo-products/loop.png";


import ringProductImage from "../assets/navo-products/ring.png";


import visionProductImage from "../assets/navo-products/vision.png";


import watchProductImage from "../assets/navo-products/watch.png";


import oneProductImage from "../assets/navo-products/one.png";


import studioProductImage from "../assets/navo-products/studio.png";


import proProductImage from "../assets/navo-products/pro.png";


import { useShop } from "../context/ShopContext";


import "./ProductDetails.css";


function ProductVisual({ product, view }) {


    const productImages = {


        1: airProductImage,


        2: loopProductImage,


        3: ringProductImage,


        4: visionProductImage,


        5: watchProductImage,


        6: oneProductImage,


        7: studioProductImage,


        8: proProductImage,


    };


    const productImage = productImages[product.id] || product.image;


    const productViewImages = {


        1: {


            1: productImages[1],


            2: "/navo-products/air-left.png",


            3: "/navo-products/air-back.png",


        },


        2: {


            1: productImages[2],


            2: "/navo-products/loop-left.png",


            3: "/navo-products/loop-back.png",


        },


        3: {


            1: productImages[3],


            2: "/navo-products/ring-left.png",


            3: "/navo-products/ring-back.png",


        },


        4: {


            1: productImages[4],


            2: "/navo-products/vision-left.png",


            3: "/navo-products/vision-back.png",


        },


        5: {


            1: productImages[5],


            2: "/navo-products/watch-left.png",


            3: "/navo-products/watch-back.png",


        },


        6: {


            1: productImages[6],


            2: "/navo-products/one-left.png",


            3: "/navo-products/one-back.png",


        },


        7: {


            1: productImages[7],


            2: "/navo-products/studio-left.png",


            3: "/navo-products/studio-back.png",


        },


        8: {


            1: productImages[8],


            2: "/navo-products/pro-left.png",


            3: "/navo-products/pro-back.png",


        },


    };


    const currentProductImage =


        productViewImages[product.id]?.[view] || productImage;


    return (


        <div


            className={`details-visual details-visual-${view} ${product.className || ""}`}

        >


            <div className="details-visual-grid" />


            <div className="details-visual-glow" />


            <div className="details-orbit details-orbit-one" />


            <div className="details-orbit details-orbit-two" />


            <div className="details-orbit details-orbit-three" />


            <div className="details-product-stage">


                <img


                    src={currentProductImage}


                    alt={`${product.name} view ${view}`}


                    className={`details-product-image details-product-image-${product.id} details-product-image-view-${view}`}


                    onError={(event) => {


                        event.currentTarget.onerror = null;


                        event.currentTarget.src = productImage;


                    }}


                />


            </div>


            <div className="details-visual-label">


                N∆VO / {product.year}


            </div>


            <div className="details-visual-index">0{view} / 03</div>


        </div>


    );


}


function ProductDetails() {


    const { id } = useParams();


    const baseProduct = products.find(


        (item) => String(item.id) === String(id)


    );


    const wearableProduct = wearables.find(


        (item) => String(item.id) === String(id)


    );


    const product =


        baseProduct ||


        (wearableProduct


            ? {


                ...wearableProduct,


                number: wearableProduct.number,


                type: wearableProduct.category,


                category: "Wearables",


                year: 2026,


                longDescription: wearableProduct.description,


                features: [


                    "Ambient interface",


                    "Connected experience",


                    "N∆VO wearable system",


                ],


            }


            : null);


    const [activeView, setActiveView] = useState(1);


    const {
        cart,
        addToCart,
        toggleWishlist,
        isInWishlist,
    } = useShop();
    const cartItem = product
        ? cart.find((item) => item.id === product.id)
        : null;


    const liked = product ? isInWishlist(product.id) : false;


    const goToPreviousView = () => {


        setActiveView((current) => (current === 1 ? 3 : current - 1));


    };


    const goToNextView = () => {


        setActiveView((current) => (current === 3 ? 1 : current + 1));


    };


    const handleAddToCart = () => {
        if (cartItem) {
            return;
        }

        addToCart(product, 1);
    };


    if (!product) {


        return (


            <section className="product-details-not-found">


                <div>


                    <span>N∆VO / ERROR 404</span>


                    <h1>Product not found.</h1>


                    <Link to="/products">


                        Return to products


                        <ArrowUpRight size={17} />


                    </Link>


                </div>


            </section>


        );


    }


    return (


        <section className="product-details-page">


            <div className="product-details-main">


                <motion.div


                    className="product-details-gallery"


                    initial={{ opacity: 0, x: -25 }}


                    animate={{ opacity: 1, x: 0 }}


                    transition={{ duration: 0.7 }}

                >


                    <AnimatePresence mode="wait">


                        <motion.div


                            key={`${product.id}-${activeView}`}


                            initial={{ opacity: 0, scale: 0.98 }}


                            animate={{ opacity: 1, scale: 1 }}


                            exit={{ opacity: 0, scale: 1.01 }}


                            transition={{ duration: 0.35 }}


                            className="product-details-visual-wrapper"

                        >


                            <ProductVisual


                                product={product}


                                view={activeView}


                            />


                        </motion.div>


                    </AnimatePresence>


                    <div className="product-details-gallery-controls">


                        <button


                            type="button"


                            className="gallery-nav-button"


                            onClick={goToPreviousView}


                            aria-label="Previous product view"

                        >

                            <ArrowLeft size={16} strokeWidth={1.5} />


                        </button>


                        <div className="product-details-thumbnails">


                            {[1, 2, 3].map((view) => (


                                <button


                                    key={view}


                                    type="button"


                                    className={activeView === view ? "active" : ""}


                                    onClick={() => setActiveView(view)}


                                    aria-label={`View ${view}`}


                                    aria-current={


                                        activeView === view ? "true" : undefined


                                    }

                                >

                                    <span>0{view}</span>


                                </button>


                            ))}


                        </div>


                        <button


                            type="button"


                            className="gallery-nav-button"


                            onClick={goToNextView}


                            aria-label="Next product view"

                        >

                            <ArrowRight size={16} strokeWidth={1.5} />


                        </button>


                    </div>


                </motion.div>


                <motion.div


                    className="product-details-info"


                    initial={{ opacity: 0, x: 25 }}


                    animate={{ opacity: 1, x: 0 }}


                    transition={{ duration: 0.7, delay: 0.1 }}

                >


                    <div className="product-details-eyebrow">


                        <span>{product.number || String(product.id).padStart(2, "0")}</span>


                        <span>{product.type}</span>


                    </div>


                    <h1>{product.name}</h1>


                    <p className="product-details-description">


                        {product.longDescription || product.description}


                    </p>


                    <div className="product-details-price">


                        ₹{product.price.toLocaleString("en-IN")}/-


                    </div>


                    <div className="product-details-availability">


                        <span />


                        Available for order


                    </div>


                    <div className="product-details-actions">


                        <button


                            type="button"


                            className="add-to-cart-button"


                            onClick={handleAddToCart}

                        >

                            <ShoppingBag size={17} strokeWidth={1.5} />


                            Add to cart


                        </button>


                        <button


                            type="button"


                            className={


                                liked


                                    ? "wishlist-button active"


                                    : "wishlist-button"


                            }


                            onClick={() => toggleWishlist(product)}


                            aria-label="Add to wishlist"

                        >

                            <Heart


                                size={19}


                                strokeWidth={1.5}


                                fill={liked ? "currentColor" : "none"}


                            />


                        </button>


                    </div>


                    <div className="product-details-specs">


                        <div className="product-spec-row">


                            <span>Category</span>


                            <span>{product.category}</span>


                        </div>


                        <div className="product-spec-row">


                            <span>Product type</span>


                            <span>{product.type}</span>


                        </div>


                        <div className="product-spec-row">


                            <span>Release</span>


                            <span>{product.year}</span>


                        </div>


                        <div className="product-spec-row">


                            <span>Collection</span>


                            <span>N∆VO / {product.year}</span>


                        </div>


                    </div>


                </motion.div>


            </div>


            <section className="product-story">


                <div className="product-story-heading">


                    <span>01 — TECHNOLOGY</span>


                    <h2>


                        Designed around


                        <br />


                        <em>you.</em>


                    </h2>


                </div>


                <div className="product-feature-grid">


                    {(product.features || []).map((feature, index) => (


                        <motion.article


                            key={feature}


                            initial={{ opacity: 0, y: 20 }}


                            whileInView={{ opacity: 1, y: 0 }}


                            viewport={{ once: true, amount: 0.25 }}


                            transition={{ duration: 0.5, delay: index * 0.06 }}

                        >

                            <span>0{index + 1}</span>


                            <h3>{feature}</h3>


                            <ArrowUpRight size={17} strokeWidth={1.5} />


                        </motion.article>


                    ))}


                </div>


            </section>


            <section className="product-details-bottom">


                <div>


                    <span>N∆VO / {product.year}</span>


                    <h2>


                        Technology,


                        <br />


                        <em>in reverse.</em>


                    </h2>


                </div>


                <Link to="/products">


                    Explore the collection


                    <ArrowUpRight size={18} strokeWidth={1.5} />


                </Link>


            </section>


        </section>


    );


}


export default ProductDetails;
