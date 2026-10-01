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

        const storedValue =
            localStorage.getItem(key);

        if (!storedValue) {
            return fallback;
        }

        const parsedValue =
            JSON.parse(storedValue);

        return parsedValue ?? fallback;

    } catch (error) {

        console.warn(
            `N∆VO: Could not read ${key} from localStorage.`,
            error
        );

        return fallback;
    }
};


/* =========================================================
   SHOP PROVIDER
========================================================= */

export function ShopProvider({ children }) {

    /* -------------------------------------------------------
       CART
       Restore cart when the app starts.
    ------------------------------------------------------- */

    const [cart, setCart] = useState(() =>
        readStoredValue(
            "navo-cart",
            []
        )
    );


    /* -------------------------------------------------------
       WISHLIST
       Restore wishlist when the app starts.
    ------------------------------------------------------- */

    const [wishlist, setWishlist] = useState(() =>
        readStoredValue(
            "navo-wishlist",
            []
        )
    );


    /* =======================================================
       SAVE CART
    ======================================================= */

    useEffect(() => {

        try {

            localStorage.setItem(
                "navo-cart",
                JSON.stringify(cart)
            );

        } catch (error) {

            console.warn(
                "N∆VO: Could not save cart.",
                error
            );

        }

    }, [cart]);


    /* =======================================================
       SAVE WISHLIST
    ======================================================= */

    useEffect(() => {

        try {

            localStorage.setItem(
                "navo-wishlist",
                JSON.stringify(wishlist)
            );

        } catch (error) {

            console.warn(
                "N∆VO: Could not save wishlist.",
                error
            );

        }

    }, [wishlist]);


    /* =======================================================
       ADD TO CART
    ======================================================= */

    const addToCart = (
        product,
        quantity = 1
    ) => {

        if (!product) {
            return;
        }


        const safeQuantity =
            Math.max(
                1,
                Number(quantity) || 1
            );


        /*
         * Standard N∆VO products do not currently
         * contain an image field in products.js.
         *
         * Wearables already contain image.
         *
         * This fallback guarantees that the cart
         * always receives the correct product image.
         */

        const productImage =
            product.image ||
            productImages[product.id] ||
            null;


        setCart((previousCart) => {

            const existingProduct =
                previousCart.find(
                    (item) =>
                        item.id === product.id
                );


            if (existingProduct) {

                return previousCart.map(
                    (item) =>
                        item.id === product.id
                            ? {
                                ...item,

                                /*
                                 * Keep the real product
                                 * image even if the product
                                 * originally had none.
                                 */
                                image:
                                    item.image ||
                                    productImage,

                                quantity:
                                    item.quantity +
                                    safeQuantity,
                            }
                            : item
                );
            }


            return [
                ...previousCart,

                {
                    ...product,

                    image: productImage,

                    quantity:
                        safeQuantity,
                },
            ];

        });


        toast.success(
            safeQuantity > 1
                ? `${safeQuantity} × ${product.name} added to cart.`
                : `${product.name} added to cart.`
        );

    };


    /* =======================================================
       REMOVE FROM CART
    ======================================================= */

    const removeFromCart = (
        productId
    ) => {

        setCart(
            (previousCart) =>
                previousCart.filter(
                    (item) =>
                        item.id !== productId
                )
        );


        toast.success(
            "Product removed from cart."
        );

    };


    /* =======================================================
       INCREASE QUANTITY
    ======================================================= */

    const increaseQuantity = (
        productId
    ) => {

        setCart(
            (previousCart) =>
                previousCart.map(
                    (item) =>
                        item.id === productId
                            ? {
                                ...item,

                                quantity:
                                    item.quantity + 1,
                            }
                            : item
                )
        );

    };


    /* =======================================================
       DECREASE QUANTITY
    ======================================================= */

    const decreaseQuantity = (
        productId
    ) => {

        setCart(
            (previousCart) =>
                previousCart
                    .map(
                        (item) =>
                            item.id === productId
                                ? {
                                    ...item,

                                    quantity:
                                        item.quantity -
                                        1,
                                }
                                : item
                    )
                    .filter(
                        (item) =>
                            item.quantity > 0
                    )
        );

    };


    /* =======================================================
       CLEAR CART
    ======================================================= */

    const clearCart = () => {

        setCart([]);

    };


    /* =======================================================
       IS PRODUCT IN CART
    ======================================================= */

    const isInCart = (
        productId
    ) => {

        return cart.some(
            (item) =>
                item.id === productId
        );

    };


    /* =======================================================
       ADD TO WISHLIST
    ======================================================= */

    const addToWishlist = (
        product
    ) => {

        if (!product) {
            return;
        }


        setWishlist(
            (previousWishlist) => {

                const alreadyExists =
                    previousWishlist.some(
                        (item) =>
                            item.id === product.id
                    );


                if (alreadyExists) {
                    return previousWishlist;
                }


                return [
                    ...previousWishlist,

                    {
                        ...product,

                        image:
                            product.image ||
                            productImages[product.id] ||
                            null,
                    },
                ];

            }
        );


        toast.success(
            `${product.name} added to wishlist.`
        );

    };


    /* =======================================================
       REMOVE FROM WISHLIST
    ======================================================= */

    const removeFromWishlist = (
        productId
    ) => {

        setWishlist(
            (previousWishlist) =>
                previousWishlist.filter(
                    (item) =>
                        item.id !== productId
                )
        );


        toast.success(
            "Product removed from wishlist."
        );

    };


    /* =======================================================
       TOGGLE WISHLIST
    ======================================================= */

    const toggleWishlist = (
        product
    ) => {

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


    /* =======================================================
       IS PRODUCT IN WISHLIST
    ======================================================= */

    const isInWishlist = (
        productId
    ) => {

        return wishlist.some(
            (item) =>
                item.id === productId
        );

    };


    /* =======================================================
       CART COUNT
    ======================================================= */

    const cartCount = useMemo(
        () => {

            return cart.reduce(
                (total, item) =>
                    total + item.quantity,

                0
            );

        },
        [cart]
    );


    /* =======================================================
       WISHLIST COUNT
    ======================================================= */

    const wishlistCount =
        wishlist.length;


    /* =======================================================
       CART SUBTOTAL
    ======================================================= */

    const cartSubtotal = useMemo(
        () => {

            return cart.reduce(
                (total, item) =>
                    total +
                    item.price *
                    item.quantity,

                0
            );

        },
        [cart]
    );


    /* =======================================================
       CONTEXT VALUE
    ======================================================= */

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


    /* =======================================================
       PROVIDER
    ======================================================= */

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
