import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    X,
    Minus,
    Plus,
    Trash2,
    ShoppingBag,
    ArrowUpRight,
} from "lucide-react";

import { useShop } from "../context/ShopContext";

import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
    const navigate = useNavigate();

    const {
        cart,
        cartCount,
        cartSubtotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    } = useShop();

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );

            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const formatPrice = (price) => {
        return `₹${price.toLocaleString("en-IN")}/-`;
    };

    const handleCheckout = () => {
        onClose();
        navigate("/checkout");
    };

    return (
        <>
            <div
                className="navo-drawer-backdrop"
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                className="navo-drawer navo-cart-drawer"
                aria-label="Shopping cart"
            >
                <div className="navo-drawer-header">
                    <div>
                        <p className="navo-drawer-eyebrow">
                            N∆VO / COLLECTION
                        </p>

                        <h2>
                            Cart
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="navo-drawer-close"
                        onClick={onClose}
                        aria-label="Close cart"
                    >
                        <X size={20} />
                    </button>
                </div>


                <div className="navo-drawer-meta">
                    <span>
                        {cartCount}{" "}
                        {cartCount === 1
                            ? "item"
                            : "items"}
                    </span>

                    {cart.length > 0 && (
                        <button
                            type="button"
                            onClick={clearCart}
                        >
                            Clear cart
                        </button>
                    )}
                </div>


                <div className="navo-drawer-content">

                    {cart.length === 0 ? (
                        <div className="navo-drawer-empty">

                            <div className="navo-empty-icon">
                                <ShoppingBag
                                    size={28}
                                />
                            </div>

                            <p className="navo-empty-label">
                                YOUR CART IS EMPTY
                            </p>

                            <h3>
                                Nothing here yet.
                            </h3>

                            <p>
                                Explore the N∆VO
                                collection and add
                                something to your cart.
                            </p>

                            <button
                                type="button"
                                className="navo-empty-action"
                                onClick={onClose}
                            >
                                Explore collection
                                <ArrowUpRight
                                    size={16}
                                />
                            </button>

                        </div>
                    ) : (
                        <div className="navo-cart-list">

                            {cart.map((item) => (
                                <article
                                    className="navo-cart-item"
                                    key={item.id}
                                >

                                    {/* PRODUCT IMAGE */}
                                    <div
                                        className={`navo-cart-product-visual ${item.className || ""
                                            }`}
                                    >
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={`${item.name} product`}
                                                className="navo-cart-product-image"
                                            />
                                        ) : (
                                            <span>
                                                N∆VO
                                            </span>
                                        )}
                                    </div>


                                    {/* PRODUCT INFORMATION */}
                                    <div className="navo-cart-item-info">

                                        <div className="navo-cart-item-top">

                                            <div>
                                                <p className="navo-cart-item-type">
                                                    {item.type}
                                                </p>

                                                <h3>
                                                    {item.name}
                                                </h3>
                                            </div>

                                            <button
                                                type="button"
                                                className="navo-cart-remove"
                                                onClick={() =>
                                                    removeFromCart(
                                                        item.id
                                                    )
                                                }
                                                aria-label={`Remove ${item.name} from cart`}
                                            >
                                                <Trash2
                                                    size={15}
                                                />
                                            </button>

                                        </div>


                                        <div className="navo-cart-item-bottom">

                                            <div className="navo-quantity-control">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus
                                                        size={13}
                                                    />
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus
                                                        size={13}
                                                    />
                                                </button>

                                            </div>

                                            <strong>
                                                {formatPrice(
                                                    item.price *
                                                    item.quantity
                                                )}
                                            </strong>

                                        </div>

                                    </div>

                                </article>
                            ))}

                        </div>
                    )}

                </div>


                {cart.length > 0 && (
                    <div className="navo-drawer-footer">

                        <div className="navo-cart-subtotal">
                            <span>
                                SUBTOTAL
                            </span>

                            <strong>
                                {formatPrice(
                                    cartSubtotal
                                )}
                            </strong>
                        </div>

                        <p className="navo-cart-note">
                            Taxes and shipping
                            calculated at checkout.
                        </p>

                        <button
                            type="button"
                            className="navo-cart-checkout"
                            onClick={handleCheckout}
                        >
                            Continue to checkout
                            <ArrowUpRight
                                size={18}
                            />
                        </button>

                    </div>
                )}

            </aside>
        </>
    );
}

export default CartDrawer;