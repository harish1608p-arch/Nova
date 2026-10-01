import { useState } from "react";



import { Link, useNavigate, useParams } from "react-router-dom";



import {



    ArrowLeft,



    ArrowRight,



    ArrowUpRight,



    Heart,



    Minus,



    Plus,



    ShoppingBag,



} from "lucide-react";



import { motion, AnimatePresence } from "framer-motion";



import { useShop } from "../context/ShopContext";







import haloProductImage from "../assets/navo-products/Navo-Halo.png";



import arcProductImage from "../assets/navo-products/Navo-Arc.png";



import linkProductImage from "../assets/navo-products/Navo-Link.png";



import threadProductImage from "../assets/navo-products/Navo-Thread.png";



import fluxProductImage from "../assets/navo-products/Navo-Flux.png";



import nodeProductImage from "../assets/navo-products/Navo-Node.png";







import "./WearableDetails.css";







const wearableProducts = [



    {



        id: "wearable-halo",



        number: "01",



        category: "AMBIENT INTERFACE",



        type: "Ambient Interface",



        name: "N∆VO Halo",



        price: 12777,



        year: "2026",



        image: haloProductImage,



        description:



            "A discreet wellness wearable designed to keep your everyday health and activity information close.",



        features: [



            "Heart-rate tracking",



            "Sleep monitoring",



            "Daily activity tracking",



            "Movement insights",



        ],



    },



    {



        id: "wearable-arc",



        number: "02",



        category: "SPATIAL INTERFACE",



        type: "Spatial Interface",



        name: "N∆VO Arc",



        price: 15777,



        year: "2026",



        image: arcProductImage,



        description:



            "A movement-focused wearable designed to understand walking, steps and the way you move through your day.",



        features: [



            "Step tracking",



            "Walking distance",



            "Activity monitoring",



            "Movement awareness",



        ],



    },



    {



        id: "wearable-link",



        number: "03",



        category: "AI CLIP",



        type: "AI Clip",



        name: "N∆VO Link",



        price: 9777,



        year: "2026",



        image: linkProductImage,



        description:



            "A compact wearable interface designed to keep communication, notifications and AI interaction within reach.",



        features: [



            "Smart notifications",



            "Calls and messages",



            "AI interaction",



            "Device control",



        ],



    },



    {



        id: "wearable-thread",



        number: "04",



        category: "CONNECTED TEXTILE",



        type: "Connected Textile",



        name: "N∆VO Thread",



        price: 11777,



        year: "2026",



        image: threadProductImage,



        description:



            "A connected textile concept designed to understand everyday movement and turn activity into useful information.",



        features: [



            "Step tracking",



            "Movement tracking",



            "Activity monitoring",



            "Daily activity insights",



        ],



    },



    {



        id: "wearable-flux",



        number: "05",



        category: "HAPTIC INTERFACE",



        type: "Haptic Interface",



        name: "N∆VO Flux",



        price: 13777,



        year: "2026",



        image: fluxProductImage,



        description:



            "A performance-focused wearable designed to follow activity, exercise intensity and physical movement through the day.",



        features: [



            "Heart-rate tracking",



            "Workout intensity",



            "Movement tracking",



            "Activity duration",



        ],



    },



    {



        id: "wearable-node",



        number: "06",



        category: "MODULAR INTERFACE",



        type: "Modular Interface",



        name: "N∆VO Node",



        price: 10777,



        year: "2026",



        image: nodeProductImage,



        description:



            "A modular control interface designed to let you interact with connected N∆VO devices through simple gestures and actions.",



        features: [



            "Gesture control",



            "Device control",



            "Contextual actions",



            "N∆VO ecosystem control",



        ],



    },



];







function formatPrice(price) {



    return `₹${price.toLocaleString("en-IN")}/-`;



}







function WearableDetails() {



    const { id } = useParams();



    const navigate = useNavigate();







    // The route uses short slugs such as /wearables/arc,



    // while the data keeps the internal IDs as wearable-arc.



    const wearableId = `wearable-${id}`;







    const product = wearableProducts.find(



        (item) => item.id === wearableId



    );







    const [activeView, setActiveView] = useState(1);



    const [quantity, setQuantity] = useState(1);







    const {



        addToCart,



        toggleWishlist,



        isInWishlist,



    } = useShop();







    if (!product) {



        return (



            <section className="wearable-details-not-found">



                <span>N∆VO / ERROR 404</span>



                <h1>Wearable not found.</h1>



                <Link to="/">Return to N∆VO</Link>



            </section>



        );



    }







    const liked = isInWishlist(product.id);







    const previousProduct = () => {



        const currentIndex = wearableProducts.findIndex(



            (item) => item.id === product.id



        );



        const previousIndex =



            currentIndex === 0



                ? wearableProducts.length - 1



                : currentIndex - 1;







        navigate(`/wearables/${wearableProducts[previousIndex].id.replace("wearable-", "")}`);



    };







    const nextProduct = () => {



        const currentIndex = wearableProducts.findIndex(



            (item) => item.id === product.id



        );



        const nextIndex =



            currentIndex === wearableProducts.length - 1



                ? 0



                : currentIndex + 1;







        navigate(`/wearables/${wearableProducts[nextIndex].id.replace("wearable-", "")}`);



    };







    const decreaseQuantity = () => {



        setQuantity((current) => Math.max(1, current - 1));



    };







    const increaseQuantity = () => {



        setQuantity((current) => current + 1);



    };







    const handleAddToCart = () => {



        addToCart(product, quantity);



    };







    return (



        <section className="wearable-details-page">



            <div className="wearable-details-background" aria-hidden="true">



                <div className="wearable-details-grid" />



                <div className="wearable-details-glow" />



            </div>







            <div className="wearable-details-container">



                <div className="wearable-details-topbar">



                    <Link to="/" className="wearable-details-back">



                        <ArrowLeft size={16} strokeWidth={1.4} />



                        Back to N∆VO



                    </Link>







                    <span>N∆VO / WEARABLE {product.number}</span>



                </div>







                <div className="wearable-details-main">



                    <motion.div



                        className="wearable-details-gallery"



                        initial={{ opacity: 0, x: -24 }}



                        animate={{ opacity: 1, x: 0 }}



                        transition={{ duration: 0.7 }}



                    >



                        <AnimatePresence mode="wait">



                            <motion.div



                                key={`${product.id}-${activeView}`}



                                className={`wearable-details-visual wearable-details-view-${activeView}`}



                                initial={{ opacity: 0, scale: 0.985 }}



                                animate={{ opacity: 1, scale: 1 }}



                                exit={{ opacity: 0, scale: 1.01 }}



                                transition={{ duration: 0.35 }}



                            >



                                <div className="wearable-details-visual-grid" />



                                <div className="wearable-details-orbit wearable-details-orbit-one" />



                                <div className="wearable-details-orbit wearable-details-orbit-two" />







                                <img



                                    src={product.image}



                                    alt={`${product.name} product render`}



                                    className={`wearable-details-product-image wearable-details-product-${product.number}`}



                                />







                                {activeView === 2 && (



                                    <div className="wearable-details-tech">



                                        <span>01 / {product.features[0]}</span>



                                        <span>02 / {product.features[1]}</span>



                                        <span>03 / {product.features[2]}</span>



                                    </div>



                                )}







                                {activeView === 3 && (



                                    <div className="wearable-details-spec-card">



                                        <span>CONCEPT SYSTEM</span>



                                        <strong>{product.category}</strong>



                                        <small>DESIGNED BY N∆VO / 2026</small>



                                    </div>



                                )}







                                <span className="wearable-details-coordinate">



                                    N∆VO / {product.year}



                                </span>







                                <span className="wearable-details-index">



                                    0{activeView} / 03



                                </span>



                            </motion.div>



                        </AnimatePresence>







                        <div className="wearable-details-gallery-controls">



                            <button



                                type="button"



                                onClick={() => setActiveView((current) => current === 1 ? 3 : current - 1)}



                                aria-label="Previous view"



                            >



                                <ArrowLeft size={15} strokeWidth={1.4} />



                            </button>







                            <div className="wearable-details-view-buttons">



                                {[1, 2, 3].map((view) => (



                                    <button



                                        key={view}



                                        type="button"



                                        className={activeView === view ? "active" : ""}



                                        onClick={() => setActiveView(view)}



                                    >



                                        0{view}



                                    </button>



                                ))}



                            </div>







                            <button



                                type="button"



                                onClick={() => setActiveView((current) => current === 3 ? 1 : current + 1)}



                                aria-label="Next view"



                            >



                                <ArrowRight size={15} strokeWidth={1.4} />



                            </button>



                        </div>



                    </motion.div>







                    <motion.div



                        className="wearable-details-info"



                        initial={{ opacity: 0, x: 24 }}



                        animate={{ opacity: 1, x: 0 }}



                        transition={{ duration: 0.7, delay: 0.08 }}



                    >



                        <div className="wearable-details-eyebrow">



                            <span>{product.number}</span>



                            <span>{product.category}</span>



                        </div>







                        <h1>{product.name}</h1>







                        <p className="wearable-details-description">



                            {product.description}



                        </p>







                        <div className="wearable-details-focus">



                            <span>DESIGNED FOR</span>



                            <strong>



                                {product.number === "01" && "Wellness, sleep & everyday activity"}



                                {product.number === "02" && "Walking, steps & movement"}



                                {product.number === "03" && "Communication, AI & control"}



                                {product.number === "04" && "Movement, activity & connected clothing"}



                                {product.number === "05" && "Exercise, heart rate & performance"}



                                {product.number === "06" && "Gestures, control & connected devices"}



                            </strong>



                        </div>







                        <div className="wearable-details-price">



                            {formatPrice(product.price)}



                        </div>







                        <div className="wearable-details-availability">



                            <span />



                            Concept system / 2026



                        </div>







                        <div className="wearable-details-actions">



                            <div className="wearable-details-quantity">



                                <button type="button" onClick={decreaseQuantity} aria-label="Decrease quantity">



                                    <Minus size={15} strokeWidth={1.4} />



                                </button>



                                <span>{quantity}</span>



                                <button type="button" onClick={increaseQuantity} aria-label="Increase quantity">



                                    <Plus size={15} strokeWidth={1.4} />



                                </button>



                            </div>







                            <button



                                type="button"



                                className="wearable-details-add"



                                onClick={handleAddToCart}



                            >



                                <ShoppingBag size={17} strokeWidth={1.4} />



                                Add to cart



                            </button>







                            <button



                                type="button"



                                className={`wearable-details-wishlist ${liked ? "active" : ""}`}



                                onClick={() => toggleWishlist(product)}



                                aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}



                            >



                                <Heart size={18} strokeWidth={1.35} fill={liked ? "currentColor" : "none"} />



                            </button>



                        </div>







                        <div className="wearable-details-meta-list">



                            <div>



                                <span>Category</span>



                                <strong>Wearables</strong>



                            </div>



                            <div>



                                <span>Product type</span>



                                <strong>{product.type}</strong>



                            </div>



                            <div>



                                <span>Release</span>



                                <strong>{product.year}</strong>



                            </div>



                            <div>



                                <span>Collection</span>



                                <strong>N∆VO / Experimental</strong>



                            </div>



                        </div>







                        <div className="wearable-details-feature-list">



                            <span>WHAT IT DOES</span>



                            {product.features.map((feature) => (



                                <div key={feature}>



                                    <span>{feature}</span>



                                    <ArrowUpRight size={14} strokeWidth={1.3} />



                                </div>



                            ))}



                        </div>







                        <div className="wearable-details-product-nav">



                            <button type="button" onClick={previousProduct}>



                                <ArrowLeft size={14} />



                                Previous wearable



                            </button>



                            <button type="button" onClick={nextProduct}>



                                Next wearable



                                <ArrowRight size={14} />



                            </button>



                        </div>



                    </motion.div>



                </div>



            </div>



        </section>



    );



}







export default WearableDetails;
