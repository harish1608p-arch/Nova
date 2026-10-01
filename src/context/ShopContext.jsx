import {



    createContext,



    useContext,



    useEffect,



    useMemo,



    useState,



} from "react";



import { toast } from "react-hot-toast";



import products from "../data/products";



import airProductImage from "../assets/navo-products/air.png";



import loopProductImage from "../assets/navo-products/loop.png";



import ringProductImage from "../assets/navo-products/ring.png";



import visionProductImage from "../assets/navo-products/vision.png";



import watchProductImage from "../assets/navo-products/watch.png";



import oneProductImage from "../assets/navo-products/one.png";



import studioProductImage from "../assets/navo-products/studio.png";



import proProductImage from "../assets/navo-products/pro.png";



const ShopContext = createContext(null);



const CART_STORAGE_KEY = "navo-cart";



const WISHLIST_STORAGE_KEY = "navo-wishlist";



const CART_UPDATED_EVENT = "navoCartUpdated";



const WISHLIST_UPDATED_EVENT = "navoWishlistUpdated";



/* =========================================================



   N∆VO — CART IMAGE MAP



========================================================= */



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



/* =========================================================



   SAFE LOCAL STORAGE



========================================================= */



const readStoredValue = (key, fallback) => {



    try {



        const storedValue = localStorage.getItem(key);



        if (!storedValue) {



            return fallback;



        }



        const parsedValue = JSON.parse(storedValue);



        return Array.isArray(parsedValue)



            ? parsedValue



            : fallback;



    } catch (error) {



        console.warn(



            `N∆VO: Could not read ${key} from localStorage.`,



            error



        );



        return fallback;



    }



};



const saveStoredValue = (key, value) => {



    try {



        localStorage.setItem(



            key,



            JSON.stringify(value)



        );



    } catch (error) {



        console.warn(



            `N∆VO: Could not save ${key}.`,



            error



        );



    }



};



/* =========================================================



   SHOP PROVIDER



========================================================= */



export function ShopProvider({ children }) {



    const [cart, setCart] = useState(() =>



        readStoredValue(CART_STORAGE_KEY, [])



    );



    const [wishlist, setWishlist] = useState(() =>



        readStoredValue(WISHLIST_STORAGE_KEY, [])



    );



    /* =====================================================



       SAVE CART



    ===================================================== */



    useEffect(() => {



        saveStoredValue(



            CART_STORAGE_KEY,



            cart



        );



    }, [cart]);



    /* =====================================================



       SAVE WISHLIST



    ===================================================== */



    useEffect(() => {



        saveStoredValue(



            WISHLIST_STORAGE_KEY,



            wishlist



        );



    }, [wishlist]);



    /* =====================================================



       IMPORTANT CART SYNC



       This keeps the cart synchronized if more than one



       ShopProvider/UI instance exists in the application.



    ===================================================== */



    useEffect(() => {



        const handleCartUpdated = (event) => {



            if (Array.isArray(event.detail)) {



                setCart(event.detail);



                return;



            }



            setCart(



                readStoredValue(



                    CART_STORAGE_KEY,



                    []



                )



            );



        };



        const handleStorage = (event) => {



            if (event.key !== CART_STORAGE_KEY) {



                return;



            }



            setCart(



                readStoredValue(



                    CART_STORAGE_KEY,



                    []



                )



            );



        };



        window.addEventListener(



            CART_UPDATED_EVENT,



            handleCartUpdated



        );



        window.addEventListener(



            "storage",



            handleStorage



        );



        return () => {



            window.removeEventListener(



                CART_UPDATED_EVENT,



                handleCartUpdated



            );



            window.removeEventListener(



                "storage",



                handleStorage



            );



        };



    }, []);



    /* =====================================================



       IMPORTANT WISHLIST SYNC



    ===================================================== */



    useEffect(() => {



        const handleWishlistUpdated = (event) => {



            if (Array.isArray(event.detail)) {



                setWishlist(event.detail);



                return;



            }



            setWishlist(



                readStoredValue(



                    WISHLIST_STORAGE_KEY,



                    []



                )



            );



        };



        const handleStorage = (event) => {



            if (event.key !== WISHLIST_STORAGE_KEY) {



                return;



            }



            setWishlist(



                readStoredValue(



                    WISHLIST_STORAGE_KEY,



                    []



                )



            );



        };



        window.addEventListener(



            WISHLIST_UPDATED_EVENT,



            handleWishlistUpdated



        );



        window.addEventListener(



            "storage",



            handleStorage



        );



        return () => {



            window.removeEventListener(



                WISHLIST_UPDATED_EVENT,



                handleWishlistUpdated



            );



            window.removeEventListener(



                "storage",



                handleStorage



            );



        };



    }, []);



    /* =====================================================



       BROADCAST CART



    ===================================================== */



    const broadcastCart = (nextCart) => {



        saveStoredValue(



            CART_STORAGE_KEY,



            nextCart



        );



        window.dispatchEvent(



            new CustomEvent(



                CART_UPDATED_EVENT,



                {



                    detail: nextCart,



                }



            )



        );



    };



    /* =====================================================



       BROADCAST WISHLIST



    ===================================================== */



    const broadcastWishlist = (nextWishlist) => {



        saveStoredValue(



            WISHLIST_STORAGE_KEY,



            nextWishlist



        );



        window.dispatchEvent(



            new CustomEvent(



                WISHLIST_UPDATED_EVENT,



                {



                    detail: nextWishlist,



                }



            )



        );



    };



    /* =====================================================



       ADD TO CART



    ===================================================== */



    const addToCart = (
        product,
        quantity = 1
    ) => {
        if (!product) {
            return;
        }

        const safeQuantity = Math.max(
            1,
            Number(quantity) || 1
        );

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            toast.success(
                `${product.name} is already in your cart.`
            );
            return;
        }

        const productImage =
            product.image ||
            productImages[product.id] ||
            null;

        const nextCart = [
            ...cart,
            {
                ...product,
                image: productImage,
                quantity: safeQuantity,
            },
        ];

        setCart(nextCart);
        broadcastCart(nextCart);

        toast.success(
            safeQuantity > 1
                ? `${safeQuantity} × ${product.name} added to cart.`
                : `${product.name} added to cart.`
        );
    };



    /* =====================================================



       REMOVE FROM CART



    ===================================================== */



    const removeFromCart = (productId) => {



        setCart((previousCart) => {



            const nextCart =



                previousCart.filter(



                    (item) =>



                        item.id !== productId



                );



            broadcastCart(nextCart);



            return nextCart;



        });



        toast.success(



            "Product removed from cart."



        );



    };



    /* =====================================================



       INCREASE QUANTITY



    ===================================================== */



    const increaseQuantity = (productId) => {
        const nextCart = cart.map((item) =>
            item.id === productId
                ? {
                    ...item,
                    quantity:
                        Number(item.quantity) + 1,
                }
                : item
        );

        setCart(nextCart);
        broadcastCart(nextCart);
    };



    /* =====================================================



       DECREASE QUANTITY



    ===================================================== */



    const decreaseQuantity = (productId) => {
        const nextCart = cart
            .map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity:
                            Number(item.quantity) - 1,
                    }
                    : item
            )
            .filter(
                (item) =>
                    Number(item.quantity) > 0
            );

        setCart(nextCart);
        broadcastCart(nextCart);
    };



    /* =====================================================



       CLEAR CART



    ===================================================== */



    const clearCart = () => {



        const nextCart = [];



        setCart(nextCart);



        broadcastCart(nextCart);



    };



    /* =====================================================



       IS PRODUCT IN CART



    ===================================================== */



    const isInCart = (productId) => {



        return cart.some(



            (item) =>



                item.id === productId



        );



    };



    /* =====================================================



       ADD TO WISHLIST



    ===================================================== */



    const addToWishlist = (product) => {



        if (!product) {



            return;



        }



        setWishlist((previousWishlist) => {



            const alreadyExists =



                previousWishlist.some(



                    (item) =>



                        item.id === product.id



                );



            if (alreadyExists) {



                return previousWishlist;



            }



            const nextWishlist = [



                ...previousWishlist,



                {



                    ...product,



                    image:



                        product.image ||



                        productImages[



                        product.id



                        ] ||



                        null,



                },



            ];



            broadcastWishlist(



                nextWishlist



            );



            return nextWishlist;



        });



        toast.success(



            `${product.name} added to wishlist.`



        );



    };



    /* =====================================================



       REMOVE FROM WISHLIST



    ===================================================== */



    const removeFromWishlist = (



        productId



    ) => {



        setWishlist(



            (previousWishlist) => {



                const nextWishlist =



                    previousWishlist.filter(



                        (item) =>



                            item.id !==



                            productId



                    );



                broadcastWishlist(



                    nextWishlist



                );



                return nextWishlist;



            }



        );



        toast.success(



            "Product removed from wishlist."



        );



    };



    /* =====================================================



       TOGGLE WISHLIST



    ===================================================== */



    const toggleWishlist = (product) => {



        if (!product) {



            return;



        }



        const alreadyExists =



            wishlist.some(



                (item) =>



                    item.id === product.id



            );



        if (alreadyExists) {



            removeFromWishlist(



                product.id



            );



        } else {



            addToWishlist(product);



        }



    };



    /* =====================================================



       IS PRODUCT IN WISHLIST



    ===================================================== */



    const isInWishlist = (



        productId



    ) => {



        return wishlist.some(



            (item) =>



                item.id === productId



        );



    };



    /* =====================================================



       CART COUNT



    ===================================================== */



    const cartCount = useMemo(() => {



        return cart.reduce(



            (total, item) =>



                total +



                Number(



                    item.quantity



                ),



            0



        );



    }, [cart]);



    /* =====================================================



       WISHLIST COUNT



    ===================================================== */



    const wishlistCount =



        wishlist.length;



    /* =====================================================



       CART SUBTOTAL



    ===================================================== */



    const cartSubtotal = useMemo(() => {



        return cart.reduce(



            (total, item) =>



                total +



                Number(item.price || 0) *



                Number(



                    item.quantity || 0



                ),



            0



        );



    }, [cart]);



    /* =====================================================



       CONTEXT VALUE



    ===================================================== */



    const value = {



        products,



        cart,



        wishlist,



        cartCount,



        wishlistCount,



        cartSubtotal,



        addToCart,



        removeFromCart,



        increaseQuantity,



        decreaseQuantity,



        clearCart,



        isInCart,



        addToWishlist,



        removeFromWishlist,



        toggleWishlist,



        isInWishlist,



    };



    /* =====================================================



       PROVIDER



    ===================================================== */



    return (



        <ShopContext.Provider



            value={value}



        >



            {children}



        </ShopContext.Provider>



    );



}



/* =========================================================



   USE SHOP



========================================================= */



export function useShop() {



    const context =



        useContext(ShopContext);



    if (!context) {



        throw new Error(



            "useShop must be used inside ShopProvider."



        );



    }



    return context;



}



/* =========================================================



   DEFAULT EXPORT



========================================================= */



export default ShopContext;
