import { useEffect } from "react";
import {
    X,
    Heart,
    ShoppingBag,
    Trash2,
    ArrowUpRight,
} from "lucide-react";

import { useShop } from "../context/ShopContext";

import "./WishlistDrawer.css";

/* =========================================================
   N∆VO — WISHLIST DRAWER
========================================================= */

function WishlistDrawer({ isOpen, onClose }) {
    const {
        wishlist,
        wishlistCount,
        toggleWishlist,
        addToCart,
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

        document.addEventListener("keydown", handleEscape);

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
        return `₹${Number(price || 0).toLocaleString("en-IN")}/-`;
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toggleWishlist(product);
    };

    return (
        <>
            <div
                className="navo-drawer-backdrop"
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                className="navo-drawer navo-wishlist-drawer"
                aria-label="Wishlist"
            >
                <div className="navo-drawer-header">
                    <div>
                        <p className="navo-drawer-eyebrow">
                            N∆VO / SAVED
                        </p>

                        <h2>Wishlist</h2>
                    </div>

                    <button
                        type="button"
                        className="navo-drawer-close"
                        onClick={onClose}
                        aria-label="Close wishlist"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="navo-drawer-meta">
                    <span>
                        {wishlistCount}{" "}
                        {wishlistCount === 1 ? "ITEM" : "ITEMS"}
                    </span>

                    <span className="navo-wishlist-status">
                        SAVED FOR LATER
                    </span>
                </div>

                <div className="navo-drawer-content">
                    {wishlist.length === 0 ? (
                        <div className="navo-drawer-empty">
                            <div className="navo-empty-icon">
                                <Heart size={28} />
                            </div>

                            <p className="navo-empty-label">
                                YOUR WISHLIST IS EMPTY
                            </p>

                            <h3>
                                Save what inspires you.
                            </h3>

                            <p>
                                Add products to your wishlist
                                and return to them whenever
                                you're ready.
                            </p>

                            <button
                                type="button"
                                className="navo-empty-action"
                                onClick={onClose}
                            >
                                Explore collection
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    ) : (
                        <div className="navo-wishlist-list">
                            {wishlist.map((item) => (
                                <article
                                    className="navo-wishlist-item"
                                    key={item.id}
                                >
                                    {/* =================================================
                                       REAL PRODUCT IMAGE
                                    ================================================= */}

                                    <div
                                        className={`navo-wishlist-product-visual ${item.className || ""
                                            }`}
                                    >
                                        {item.image ? (
                                            <img
                                                className="navo-wishlist-product-image"
                                                src={item.image}
                                                alt={item.name}
                                                loading="eager"
                                            />
                                        ) : (
                                            <div
                                                className="navo-wishlist-image-fallback"
                                                aria-hidden="true"
                                            >
                                                <span>
                                                    N∆VO
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="navo-wishlist-item-info">
                                        <div className="navo-wishlist-item-top">
                                            <div>
                                                <p className="navo-wishlist-item-type">
                                                    {item.type ||
                                                        item.category ||
                                                        "N∆VO PRODUCT"}
                                                </p>

                                                <h3>
                                                    {item.name}
                                                </h3>

                                                <strong>
                                                    {formatPrice(
                                                        item.price
                                                    )}
                                                </strong>
                                            </div>

                                            <button
                                                type="button"
                                                className="navo-wishlist-remove"
                                                onClick={() =>
                                                    toggleWishlist(
                                                        item
                                                    )
                                                }
                                                aria-label={`Remove ${item.name} from wishlist`}
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </div>

                                        <div className="navo-wishlist-item-bottom">
                                            <button
                                                type="button"
                                                className="navo-wishlist-cart-button"
                                                onClick={() =>
                                                    handleAddToCart(
                                                        item
                                                    )
                                                }
                                            >
                                                <ShoppingBag
                                                    size={15}
                                                />

                                                Add to cart

                                                <ArrowUpRight
                                                    size={14}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}

export default WishlistDrawer;
