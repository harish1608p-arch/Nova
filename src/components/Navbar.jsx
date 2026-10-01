/* =========================================================



   N∆VO — NAVBAR



   Responsive Navigation



   Desktop / Tablet / Mobile



\========================================================= */







import { useState } from "react";



import { Link, useLocation, useNavigate } from "react-router-dom";



import { useShop } from "../context/ShopContext";



import products from "../data/products";







import {



    Menu,



    X,



    Search,



    Heart,



    ShoppingBag,



} from "lucide-react";







import {



    motion,



    AnimatePresence,



} from "framer-motion";







import CartDrawer from "./CartDrawer";



import WishlistDrawer from "./WishlistDrawer";







import "./Navbar.css";



const MotionLink = motion(Link);











/* =========================================================



   NAVBAR COMPONENT



\========================================================= */







function Navbar() {







    /* -------------------------------------------------------



       MOBILE MENU STATE



    \\------------------------------------------------------- */







    const [menuOpen, setMenuOpen] = useState(false);







    /* -------------------------------------------------------



       SEARCH STATE



    \\------------------------------------------------------- */







    const [searchOpen, setSearchOpen] = useState(false);



    const [searchTerm, setSearchTerm] = useState("");







    const navigate = useNavigate();







    /* -------------------------------------------------------



       CART / WISHLIST STATE



    \\------------------------------------------------------- */







    const {



        cartCount,



        wishlistCount,



    } = useShop();







    const [cartOpen, setCartOpen] = useState(false);



    const [wishlistOpen, setWishlistOpen] = useState(false);











    /* -------------------------------------------------------



       CURRENT ROUTE



    \\------------------------------------------------------- */







    const location = useLocation();







    const isHomePage =



        location.pathname === "/";











    /* -------------------------------------------------------



       NAVIGATION ITEMS



    \\------------------------------------------------------- */







    const navigationItems = [



        {



            label: "Timeline",







            href: isHomePage



                ? "#timeline"



                : "/#timeline",



        },







        {



            label: "Products",







            href: isHomePage



                ? "#products"



                : "/products",



        },







        {



            label: "Wearables",







            href: isHomePage



                ? "#wearables"



                : "/#wearables",



        },







        {



            label: "Vault",







            href: isHomePage



                ? "#vault"



                : "/#vault",



        },







        {



            label: "Future",







            href: isHomePage



                ? "#future"



                : "/#future",



        },







        {



            label: "About",



            href: "/about",



        },







        {



            label: "Contact",



            href: "/contact",



        },







        {



            label: "Login",



            href: "/login",



        },







        {



            label: "Sign Up",



            href: "/signup",



        },



    ];











    /* -------------------------------------------------------



       CLOSE MOBILE MENU



    \\------------------------------------------------------- */







    const closeMenu = () => {



        setMenuOpen(false);



    };











    /* -------------------------------------------------------



       TOGGLE MOBILE MENU



    \\------------------------------------------------------- */







    const toggleMenu = () => {



        setMenuOpen((previousState) => !previousState);



    };







    /* -------------------------------------------------------



       SEARCH



    \\------------------------------------------------------- */







    const openSearch = () => {



        setSearchOpen(true);



        setSearchTerm("");



        setCartOpen(false);



        setWishlistOpen(false);



        setMenuOpen(false);



    };







    const closeSearch = () => {



        setSearchOpen(false);



        setSearchTerm("");



    };







    const handleSearchSubmit = (event) => {



        event.preventDefault();







        const value = searchTerm.trim();







        if (!value) {



            return;



        }







        const match = products.find((product) => {



            const query = value.toLowerCase();







            return (



                product.name.toLowerCase().includes(query) ||



                product.category.toLowerCase().includes(query) ||



                product.type.toLowerCase().includes(query)



            );



        });







        if (match) {



            closeSearch();



            navigate(`/products/${match.id}`);



            return;



        }







        navigate(`/products?search=${encodeURIComponent(value)}`);



        closeSearch();



    };







    const searchResults = products



        .filter((product) => {



            const query = searchTerm.toLowerCase().trim();







            if (!query) {



                return false;



            }







            return (



                product.name.toLowerCase().includes(query) ||



                product.category.toLowerCase().includes(query) ||



                product.type.toLowerCase().includes(query) ||



                product.description.toLowerCase().includes(query)



            );



        })



        .slice(0, 5);







    /* -------------------------------------------------------



       OPEN WISHLIST



    \\------------------------------------------------------- */







    const openWishlist = () => {



        setWishlistOpen(true);



        setCartOpen(false);



        setMenuOpen(false);



    };







    /* -------------------------------------------------------



       OPEN CART



    \\------------------------------------------------------- */







    const openCart = () => {



        setCartOpen(true);



        setWishlistOpen(false);



        setMenuOpen(false);



    };







    /* -------------------------------------------------------



       CLOSE WISHLIST



    \\------------------------------------------------------- */







    const closeWishlist = () => {



        setWishlistOpen(false);



    };







    /* -------------------------------------------------------



       CLOSE CART



    \\------------------------------------------------------- */







    const closeCart = () => {



        setCartOpen(false);



    };











    /* -------------------------------------------------------



       RENDER



    \\------------------------------------------------------- */







    return (







        <header className="navo-navbar">







            {/* =================================================



                NAVBAR INNER



            \================================================== */}







            <div className="navo-navbar-inner">











                {/* =================================================



                    N∆VO LOGO



                \================================================== */}







                <Link

                    to="/"

                    className="navo-logo"



                    onClick={closeMenu}



                    aria-label="N∆VO Home"



                >







                    <span className="navo-logo-letter">



                        N



                    </span>







                    <span className="navo-logo-symbol">



                        ∆



                    </span>







                    <span className="navo-logo-letter">



                        VO



                    </span>







                </Link>











                {/* =================================================



                    DESKTOP NAVIGATION







                    IMPORTANT:



                    This navigation is hidden on tablet/mobile.



                    Mobile users access the same navigation through



                    the hamburger menu.



                \================================================== */}







                <nav



                    className="navo-desktop-nav"



                    aria-label="Primary navigation"



                >







                    {navigationItems.map((item) => (







                        <Link

                            key={item.label}

                            to={item.href}

                            onClick={closeMenu}

                        >



                            {item.label}



                        </Link>







                    ))}







                </nav>











                {/* =================================================



                    NAVIGATION ACTIONS



                \================================================== */}







                <div className="navo-nav-actions">











                    {/* =============================================



                        SEARCH







                        Desktop only.



                    \\============================================== */}







                    <button



                        className="



                            navo-icon-button



                            navo-search-button



                        "



                        aria-label="Search"



                        type="button"



                        onClick={openSearch}



                    >







                        <Search



                            size={19}



                            strokeWidth={1.6}



                        />







                    </button>











                    {/* =============================================



                        WISHLIST







                        Desktop only.



                    \\============================================== */}







                    <button



                        className="



                            navo-icon-button



                            navo-wishlist-button



                            desktop-action



                        "



                        aria-label="Wishlist"



                        type="button"



                        onClick={openWishlist}



                    >







                        <Heart



                            size={19}



                            strokeWidth={1.6}



                            fill={



                                wishlistCount > 0



                                    ? "currentColor"



                                    : "none"



                            }



                        />







                        {wishlistCount > 0 && (



                            <span className="navo-nav-count">



                                {wishlistCount}



                            </span>



                        )}







                    </button>











                    {/* =============================================



                        CART







                        Desktop only.



                    \\============================================== */}







                    <button



                        className="



                            navo-icon-button



                            navo-cart-button



                            desktop-action



                        "



                        aria-label="Cart"



                        type="button"



                        onClick={openCart}



                    >







                        <ShoppingBag



                            size={19}



                            strokeWidth={1.6}



                        />







                        {cartCount > 0 && (



                            <span className="navo-nav-count">



                                {cartCount}



                            </span>



                        )}







                    </button>











                    {/* =============================================



                        MOBILE MENU BUTTON







                        This is the ONLY navigation control shown



                        on tablet/mobile.



                    \\============================================== */}







                    <button



                        className="navo-menu-button"



                        onClick={toggleMenu}



                        aria-label={



                            menuOpen



                                ? "Close navigation menu"



                                : "Open navigation menu"



                        }



                        aria-expanded={menuOpen}



                        type="button"



                    >







                        {menuOpen ? (







                            <X



                                size={25}



                                strokeWidth={1.5}



                            />







                        ) : (







                            <Menu



                                size={25}



                                strokeWidth={1.5}



                            />







                        )}







                    </button>







                </div>







            </div>











            {/* =====================================================



                SEARCH OVERLAY



            \====================================================== */}







            <AnimatePresence>



                {searchOpen && (



                    <motion.div



                        className="navo-search-overlay"



                        initial={{ opacity: 0 }}



                        animate={{ opacity: 1 }}



                        exit={{ opacity: 0 }}



                    >



                        <button



                            type="button"



                            className="navo-search-overlay-backdrop"



                            onClick={closeSearch}



                            aria-label="Close search"



                        />







                        <motion.div



                            className="navo-search-panel"



                            initial={{



                                opacity: 0,



                                y: -24,



                            }}



                            animate={{



                                opacity: 1,



                                y: 0,



                            }}



                            exit={{



                                opacity: 0,



                                y: -24,



                            }}



                            transition={{



                                duration: 0.25,



                            }}



                        >



                            <div className="navo-search-panel-header">



                                <span>N∆VO / SEARCH</span>







                                <button



                                    type="button"



                                    className="navo-search-close"



                                    onClick={closeSearch}



                                    aria-label="Close search"



                                >



                                    <X



                                        size={20}



                                        strokeWidth={1.5}



                                    />



                                </button>



                            </div>







                            <form



                                className="navo-search-form"



                                onSubmit={handleSearchSubmit}



                            >



                                <Search



                                    size={22}



                                    strokeWidth={1.4}



                                />







                                <input



                                    type="search"



                                    value={searchTerm}



                                    onChange={(event) =>



                                        setSearchTerm(event.target.value)



                                    }



                                    placeholder="Search N∆VO products..."



                                    autoFocus



                                    aria-label="Search N∆VO products"



                                />







                                <button



                                    type="submit"



                                    aria-label="Submit search"



                                >



                                    <span>Search</span>



                                    <span>↗</span>



                                </button>



                            </form>







                            <div className="navo-search-results">



                                {!searchTerm.trim() ? (



                                    <div className="navo-search-empty">



                                        <span>SEARCH THE COLLECTION</span>



                                        <p>



                                            Try Air, Loop, Ring, Vision,



                                            Watch, One, Studio or Pro.



                                        </p>



                                    </div>



                                ) : searchResults.length > 0 ? (



                                    searchResults.map((product) => (



                                        <button



                                            key={product.id}



                                            type="button"



                                            className="navo-search-result"



                                            onClick={() => {



                                                closeSearch();



                                                navigate(



                                                    `/products/${product.id}`



                                                );



                                            }}



                                        >



                                            <span className="navo-search-result-index">



                                                {String(product.id).padStart(



                                                    2,



                                                    "0"



                                                )}



                                            </span>







                                            <span className="navo-search-result-info">



                                                <strong>



                                                    {product.name}



                                                </strong>



                                                <small>



                                                    {product.category}



                                                </small>



                                            </span>







                                            <span className="navo-search-result-arrow">



                                                ↗



                                            </span>



                                        </button>



                                    ))



                                ) : (



                                    <div className="navo-search-empty">



                                        <span>NO MATCH FOUND</span>



                                        <p>



                                            Press Enter to open the Products



                                            collection with this search.



                                        </p>



                                    </div>



                                )}



                            </div>



                        </motion.div>



                    </motion.div>



                )}



            </AnimatePresence>







            {/* =====================================================



                MOBILE NAVIGATION







                Timeline / Products / Wearables / Vault / Future



                are displayed here after clicking the hamburger.



            \====================================================== */}







            <AnimatePresence>







                {menuOpen && (







                    <motion.div



                        className="navo-mobile-menu"







                        initial={{



                            opacity: 0,



                            height: 0,



                        }}







                        animate={{



                            opacity: 1,



                            height: "auto",



                        }}







                        exit={{



                            opacity: 0,



                            height: 0,



                        }}







                        transition={{



                            duration: 0.3,



                            ease: "easeOut",



                        }}



                    >







                        <div className="navo-mobile-menu-inner">











                            {/* =====================================



                                PRIMARY MOBILE NAVIGATION



                            \\====================================== */}







                            {navigationItems.map(



                                (item, index) => (







                                    <MotionLink

                                        key={item.label}

                                        to={item.href}

                                        onClick={closeMenu}







                                        initial={{



                                            opacity: 0,



                                            x: -15,



                                        }}







                                        animate={{



                                            opacity: 1,



                                            x: 0,



                                        }}







                                        transition={{



                                            delay:



                                                index * 0.05,







                                            duration: 0.25,



                                        }}



                                    >







                                        <span className="navo-mobile-index">



                                            {String(index + 1).padStart(



                                                2,



                                                "0"



                                            )}



                                        </span>







                                        <span className="navo-mobile-label">



                                            {item.label}



                                        </span>







                                    </MotionLink>







                                )



                            )}











                            {/* =====================================



                                MOBILE DIVIDER



                            \\====================================== */}







                            <div



                                className="navo-mobile-divider"



                            />











                            {/* =====================================



                                WISHLIST



                            \\====================================== */}







                            <button



                                type="button"



                                className="navo-mobile-shop-action"



                                onClick={openWishlist}



                            >







                                <span className="navo-mobile-index">



                                    +



                                </span>







                                <span className="navo-mobile-label">



                                    Wishlist



                                </span>







                                {wishlistCount > 0 && (



                                    <span className="navo-mobile-count">



                                        {wishlistCount}



                                    </span>



                                )}







                            </button>











                            {/* =====================================



                                CART



                            \\====================================== */}







                            <button



                                type="button"



                                className="navo-mobile-shop-action"



                                onClick={openCart}



                            >







                                <span className="navo-mobile-index">



                                    +



                                </span>







                                <span className="navo-mobile-label">



                                    Cart



                                </span>







                                {cartCount > 0 && (



                                    <span className="navo-mobile-count">



                                        {cartCount}



                                    </span>



                                )}







                            </button>







                        </div>







                    </motion.div>







                )}







            </AnimatePresence>







            {/* =====================================================



                CART / WISHLIST DRAWERS



            \====================================================== */}







            <WishlistDrawer



                isOpen={wishlistOpen}



                onClose={closeWishlist}



            />







            <CartDrawer



                isOpen={cartOpen}



                onClose={closeCart}



            />







        </header>



    );



}











/* =========================================================



   EXPORT



\========================================================= */







export default Navbar;