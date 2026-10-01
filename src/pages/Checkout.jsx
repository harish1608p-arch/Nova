import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Lock,
    MapPin,
    CreditCard,
    UserRound,
    Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useShop } from "../context/ShopContext";

import "./Checkout.css";

function formatPrice(price) {
    return `₹${price.toLocaleString("en-IN")}/-`;
}

const initialAddress = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
};

function Checkout() {
    const navigate = useNavigate();

    const {
        cart,
        cartCount,
        cartSubtotal,
        clearCart,
    } = useShop();

    const [checkoutMode, setCheckoutMode] = useState("access");
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState(initialAddress);
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [errors, setErrors] = useState({});
    const [orderNumber, setOrderNumber] = useState("");

    const shipping = 0;
    const total = cartSubtotal + shipping;

    const itemLabel = useMemo(
        () => (cartCount === 1 ? "item" : "items"),
        [cartCount]
    );

    const updateAddress = (event) => {
        const { name, value } = event.target;

        setAddress((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    const validateAddress = () => {
        const nextErrors = {};

        if (!address.fullName.trim()) {
            nextErrors.fullName = "Full name is required.";
        }

        if (!/^[6-9]\d{9}$/.test(address.mobile.trim())) {
            nextErrors.mobile =
                "Enter a valid 10-digit mobile number.";
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                address.email.trim()
            )
        ) {
            nextErrors.email =
                "Enter a valid email address.";
        }

        if (!address.address.trim()) {
            nextErrors.address =
                "Delivery address is required.";
        }

        if (!address.city.trim()) {
            nextErrors.city = "City is required.";
        }

        if (!address.state.trim()) {
            nextErrors.state = "State is required.";
        }

        if (!/^\d{6}$/.test(address.pinCode.trim())) {
            nextErrors.pinCode =
                "Enter a valid 6-digit PIN code.";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const continueToPayment = (event) => {
        event.preventDefault();

        if (!validateAddress()) {
            return;
        }

        setStep(2);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const placeOrder = (event) => {
        event.preventDefault();

        const generatedOrder = `NAVO-${Date.now()
            .toString()
            .slice(-8)}`;

        setOrderNumber(generatedOrder);
        setStep(3);
        clearCart();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (checkoutMode === "access") {
        return (
            <section className="navo-checkout">
                <div className="navo-checkout-background" />

                <div className="navo-checkout-container navo-checkout-access">
                    <div className="navo-checkout-topbar">
                        <Link
                            to="/"
                            className="navo-checkout-back"
                        >
                            <ArrowLeft size={16} />
                            Back to N∆VO
                        </Link>

                        <span>
                            N∆VO / CHECKOUT
                        </span>
                    </div>

                    <motion.div
                        className="navo-checkout-access-content"
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.65,
                        }}
                    >
                        <span className="navo-checkout-eyebrow">
                            CHECKOUT / 00
                        </span>

                        <h1>
                            How would you
                            <br />
                            like to continue?
                        </h1>

                        <p className="navo-checkout-intro">
                            Sign in for a connected
                            checkout experience, or
                            continue as a guest.
                        </p>

                        <div className="navo-checkout-choice-grid">
                            <motion.button
                                type="button"
                                className="navo-checkout-choice navo-checkout-choice-primary"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => {
                                    navigate("/login", {
                                        state: {
                                            returnTo:
                                                "/checkout",
                                        },
                                    });
                                }}
                            >
                                <span className="navo-choice-icon">
                                    <UserRound size={22} />
                                </span>

                                <span className="navo-choice-content">
                                    <small>
                                        ACCOUNT
                                    </small>

                                    <strong>
                                        Login to continue
                                    </strong>

                                    <span>
                                        Use your saved
                                        information and
                                        checkout faster.
                                    </span>
                                </span>

                                <ArrowRight
                                    size={18}
                                />
                            </motion.button>

                            <motion.button
                                type="button"
                                className="navo-checkout-choice"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => {
                                    setCheckoutMode(
                                        "guest"
                                    );
                                }}
                            >
                                <span className="navo-choice-icon">
                                    <MapPin size={22} />
                                </span>

                                <span className="navo-choice-content">
                                    <small>
                                        NO ACCOUNT
                                    </small>

                                    <strong>
                                        Continue as guest
                                    </strong>

                                    <span>
                                        Enter your delivery
                                        details and continue
                                        to payment.
                                    </span>
                                </span>

                                <ArrowRight
                                    size={18}
                                />
                            </motion.button>
                        </div>

                        <div className="navo-checkout-secure-note">
                            <Lock size={14} />
                            Secure checkout · Frontend
                            experience
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    if (step === 3) {
        return (
            <section className="navo-checkout">
                <div className="navo-checkout-background" />

                <div className="navo-checkout-container navo-checkout-success-page">
                    <motion.div
                        className="navo-checkout-success"
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <div className="navo-success-icon">
                            <Check size={26} />
                        </div>

                        <span className="navo-checkout-eyebrow">
                            N∆VO / ORDER CONFIRMED
                        </span>

                        <h1>
                            Your order is
                            <br />
                            <em>on its way.</em>
                        </h1>

                        <p>
                            Thank you for choosing N∆VO.
                            Your collection is being
                            prepared.
                        </p>

                        <div className="navo-order-number">
                            <span>ORDER</span>
                            <strong>
                                #{orderNumber}
                            </strong>
                        </div>

                        <button
                            type="button"
                            className="navo-checkout-primary-button"
                            onClick={() =>
                                navigate("/")
                            }
                        >
                            Continue exploring N∆VO
                            <ArrowRight size={17} />
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="navo-checkout">
            <div className="navo-checkout-background" />

            <div className="navo-checkout-container">
                <div className="navo-checkout-topbar">
                    <button
                        type="button"
                        className="navo-checkout-back"
                        onClick={() => {
                            if (step === 2) {
                                setStep(1);
                            } else {
                                setCheckoutMode(
                                    "access"
                                );
                            }
                        }}
                    >
                        <ArrowLeft size={16} />
                        Back
                    </button>

                    <span>
                        N∆VO / CHECKOUT
                    </span>
                </div>

                <div className="navo-checkout-layout">
                    <main className="navo-checkout-main">
                        <div className="navo-checkout-heading">
                            <span className="navo-checkout-eyebrow">
                                CHECKOUT / 0{step}
                            </span>

                            <h1>
                                {step === 1
                                    ? "Delivery."
                                    : "Payment."}
                            </h1>

                            <p>
                                {step === 1
                                    ? "Where should we send your N∆VO collection?"
                                    : "Choose how you would like to complete this frontend checkout."}
                            </p>
                        </div>

                        <div className="navo-checkout-progress">
                            <div
                                className={
                                    step >= 1
                                        ? "active"
                                        : ""
                                }
                            >
                                <span>01</span>
                                Address
                            </div>

                            <span className="navo-progress-line" />

                            <div
                                className={
                                    step >= 2
                                        ? "active"
                                        : ""
                                }
                            >
                                <span>02</span>
                                Payment
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.form
                                    key="address"
                                    className="navo-checkout-form"
                                    onSubmit={
                                        continueToPayment
                                    }
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: 15,
                                    }}
                                >
                                    <div className="navo-form-section">
                                        <div className="navo-form-section-heading">
                                            <span>
                                                01
                                            </span>
                                            <div>
                                                <h2>
                                                    Contact
                                                </h2>
                                                <p>
                                                    Delivery
                                                    contact
                                                    information.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="navo-form-grid">
                                            <label>
                                                <span>
                                                    Full name
                                                </span>

                                                <input
                                                    name="fullName"
                                                    value={
                                                        address.fullName
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    placeholder="Your full name"
                                                />

                                                {errors.fullName && (
                                                    <small>
                                                        {
                                                            errors.fullName
                                                        }
                                                    </small>
                                                )}
                                            </label>

                                            <label>
                                                <span>
                                                    Mobile number
                                                </span>

                                                <input
                                                    name="mobile"
                                                    value={
                                                        address.mobile
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    inputMode="numeric"
                                                    maxLength={
                                                        10
                                                    }
                                                    placeholder="10-digit mobile number"
                                                />

                                                {errors.mobile && (
                                                    <small>
                                                        {
                                                            errors.mobile
                                                        }
                                                    </small>
                                                )}
                                            </label>

                                            <label className="full">
                                                <span>
                                                    Email
                                                </span>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={
                                                        address.email
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    placeholder="you@example.com"
                                                />

                                                {errors.email && (
                                                    <small>
                                                        {
                                                            errors.email
                                                        }
                                                    </small>
                                                )}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="navo-form-section">
                                        <div className="navo-form-section-heading">
                                            <span>
                                                02
                                            </span>
                                            <div>
                                                <h2>
                                                    Delivery address
                                                </h2>
                                                <p>
                                                    Tell us where
                                                    to deliver
                                                    your order.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="navo-form-grid">
                                            <label className="full">
                                                <span>
                                                    Address
                                                </span>

                                                <textarea
                                                    name="address"
                                                    value={
                                                        address.address
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    rows="3"
                                                    placeholder="House number, street and area"
                                                />

                                                {errors.address && (
                                                    <small>
                                                        {
                                                            errors.address
                                                        }
                                                    </small>
                                                )}
                                            </label>

                                            <label>
                                                <span>
                                                    Apartment /
                                                    House
                                                </span>

                                                <input
                                                    name="apartment"
                                                    value={
                                                        address.apartment
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    placeholder="Optional"
                                                />
                                            </label>

                                            <label>
                                                <span>
                                                    City
                                                </span>

                                                <input
                                                    name="city"
                                                    value={
                                                        address.city
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    placeholder="Bengaluru"
                                                />

                                                {errors.city && (
                                                    <small>
                                                        {
                                                            errors.city
                                                        }
                                                    </small>
                                                )}
                                            </label>

                                            <label>
                                                <span>
                                                    State
                                                </span>

                                                <input
                                                    name="state"
                                                    value={
                                                        address.state
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    placeholder="Karnataka"
                                                />

                                                {errors.state && (
                                                    <small>
                                                        {
                                                            errors.state
                                                        }
                                                    </small>
                                                )}
                                            </label>

                                            <label>
                                                <span>
                                                    PIN code
                                                </span>

                                                <input
                                                    name="pinCode"
                                                    value={
                                                        address.pinCode
                                                    }
                                                    onChange={
                                                        updateAddress
                                                    }
                                                    inputMode="numeric"
                                                    maxLength={
                                                        6
                                                    }
                                                    placeholder="560001"
                                                />

                                                {errors.pinCode && (
                                                    <small>
                                                        {
                                                            errors.pinCode
                                                        }
                                                    </small>
                                                )}
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="navo-checkout-primary-button"
                                    >
                                        Continue to payment
                                        <ArrowRight size={17} />
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="payment"
                                    className="navo-checkout-form"
                                    onSubmit={
                                        placeOrder
                                    }
                                    initial={{
                                        opacity: 0,
                                        x: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                >
                                    <div className="navo-form-section">
                                        <div className="navo-form-section-heading">
                                            <span>
                                                01
                                            </span>
                                            <div>
                                                <h2>
                                                    Payment method
                                                </h2>
                                                <p>
                                                    Select a
                                                    frontend
                                                    payment
                                                    option.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="navo-payment-options">
                                            <button
                                                type="button"
                                                className={
                                                    paymentMethod ===
                                                        "upi"
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setPaymentMethod(
                                                        "upi"
                                                    )
                                                }
                                            >
                                                <Smartphone
                                                    size={
                                                        20
                                                    }
                                                />
                                                <span>
                                                    <strong>
                                                        UPI
                                                    </strong>
                                                    <small>
                                                        Google
                                                        Pay,
                                                        PhonePe,
                                                        etc.
                                                    </small>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className={
                                                    paymentMethod ===
                                                        "card"
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setPaymentMethod(
                                                        "card"
                                                    )
                                                }
                                            >
                                                <CreditCard
                                                    size={
                                                        20
                                                    }
                                                />
                                                <span>
                                                    <strong>
                                                        Card
                                                    </strong>
                                                    <small>
                                                        Credit or
                                                        debit
                                                        card
                                                    </small>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className={
                                                    paymentMethod ===
                                                        "cod"
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setPaymentMethod(
                                                        "cod"
                                                    )
                                                }
                                            >
                                                <MapPin
                                                    size={
                                                        20
                                                    }
                                                />
                                                <span>
                                                    <strong>
                                                        Cash on
                                                        Delivery
                                                    </strong>
                                                    <small>
                                                        Pay when
                                                        your
                                                        order
                                                        arrives
                                                    </small>
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {paymentMethod !==
                                        "cod" && (
                                            <div className="navo-form-section">
                                                <div className="navo-form-section-heading">
                                                    <span>
                                                        02
                                                    </span>
                                                    <div>
                                                        <h2>
                                                            Payment details
                                                        </h2>
                                                        <p>
                                                            Demo
                                                            fields
                                                            only —
                                                            no real
                                                            payment
                                                            is
                                                            processed.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="navo-demo-payment">
                                                    <div>
                                                        <label>
                                                            {paymentMethod ===
                                                                "upi"
                                                                ? "UPI ID"
                                                                : "Card number"}
                                                            <input
                                                                placeholder={
                                                                    paymentMethod ===
                                                                        "upi"
                                                                        ? "name@upi"
                                                                        : "1234 5678 9012 3456"
                                                                }
                                                            />
                                                        </label>
                                                    </div>

                                                    {paymentMethod ===
                                                        "card" && (
                                                            <div className="navo-form-grid">
                                                                <label>
                                                                    <span>
                                                                        Expiry
                                                                    </span>
                                                                    <input placeholder="MM / YY" />
                                                                </label>

                                                                <label>
                                                                    <span>
                                                                        CVV
                                                                    </span>
                                                                    <input
                                                                        type="password"
                                                                        placeholder="•••"
                                                                        maxLength={
                                                                            3
                                                                        }
                                                                    />
                                                                </label>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        )}

                                    <div className="navo-payment-note">
                                        <Lock size={14} />
                                        This is a
                                        frontend-only
                                        payment experience.
                                    </div>

                                    <button
                                        type="submit"
                                        className="navo-checkout-primary-button"
                                    >
                                        Place order
                                        <Check size={17} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </main>

                    <aside className="navo-checkout-summary">
                        <div className="navo-summary-heading">
                            <span>
                                YOUR COLLECTION
                            </span>
                            <strong>
                                {cartCount} {itemLabel}
                            </strong>
                        </div>

                        <div className="navo-summary-items">
                            {cart.map((item) => (
                                <div
                                    className="navo-summary-item"
                                    key={item.id}
                                >
                                    <div className="navo-summary-image">
                                        {item.image ? (
                                            <img
                                                src={
                                                    item.image
                                                }
                                                alt={
                                                    item.name
                                                }
                                            />
                                        ) : (
                                            <span>
                                                N∆VO
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <span>
                                            {item.type}
                                        </span>

                                        <strong>
                                            {item.name}
                                        </strong>

                                        <small>
                                            Qty{" "}
                                            {item.quantity}
                                        </small>
                                    </div>

                                    <strong>
                                        {formatPrice(
                                            item.price *
                                            item.quantity
                                        )}
                                    </strong>
                                </div>
                            ))}
                        </div>

                        <div className="navo-summary-totals">
                            <div>
                                <span>Subtotal</span>
                                <strong>
                                    {formatPrice(
                                        cartSubtotal
                                    )}
                                </strong>
                            </div>

                            <div>
                                <span>Shipping</span>
                                <strong>
                                    Free
                                </strong>
                            </div>

                            <div className="total">
                                <span>Total</span>
                                <strong>
                                    {formatPrice(total)}
                                </strong>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
