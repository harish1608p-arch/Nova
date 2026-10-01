import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    ArrowUpRight,
    Loader2,
    Check,
} from "lucide-react";
import { toast } from "react-hot-toast";

import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error("Please enter your full name.");
            return false;
        }

        if (formData.name.trim().length < 2) {
            toast.error("Please enter a valid name.");
            return false;
        }

        if (!formData.email.trim()) {
            toast.error("Please enter your email.");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }

        if (!formData.password) {
            toast.error("Please create a password.");
            return false;
        }

        if (formData.password.length < 8) {
            toast.error(
                "Password must contain at least 8 characters."
            );
            return false;
        }

        if (!/[A-Z]/.test(formData.password)) {
            toast.error(
                "Password must contain at least one uppercase letter."
            );
            return false;
        }

        if (!/[0-9]/.test(formData.password)) {
            toast.error(
                "Password must contain at least one number."
            );
            return false;
        }

        if (
            formData.password !== formData.confirmPassword
        ) {
            toast.error("Passwords do not match.");
            return false;
        }

        if (!formData.terms) {
            toast.error(
                "Please accept the terms to continue."
            );
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

        setIsLoading(false);

        toast.success("Your N∆VO account has been created.");

        setTimeout(() => {
            navigate("/login");
        }, 600);
    };

    return (
        <main className="navo-auth-page navo-signup-page">
            <section className="navo-auth-shell">

                <div className="navo-auth-visual navo-signup-visual">
                    <div className="navo-auth-grid" />

                    <div className="navo-signup-lines">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="navo-auth-visual-top">
                        <span>N∆VO</span>
                        <span>ACCESS / 02</span>
                    </div>

                    <div className="navo-signup-orbit">
                        <div />
                        <div />
                        <div />
                    </div>

                    <div className="navo-auth-visual-content">
                        <p className="navo-auth-eyebrow">
                            N∆VO / NEW MEMBER
                        </p>

                        <h1>
                            JOIN
                            <br />
                            THE
                            <br />
                            FUTURE.
                        </h1>

                        <p>
                            Create your N∆VO identity and enter
                            a technology ecosystem designed
                            around what comes next.
                        </p>
                    </div>

                    <div className="navo-auth-visual-bottom">
                        <span>NEW ACCOUNT</span>
                        <span>2026 / N∆VO</span>
                    </div>
                </div>


                <div className="navo-auth-form-panel">

                    <div className="navo-auth-form-header">
                        <Link
                            to="/"
                            className="navo-auth-logo"
                        >
                            N∆VO
                        </Link>

                        <span className="navo-auth-index">
                            02 / 02
                        </span>
                    </div>


                    <div className="navo-auth-form-content navo-signup-content">

                        <div className="navo-auth-heading">
                            <p className="navo-auth-label">
                                CREATE ACCOUNT
                            </p>

                            <h2>Become N∆VO.</h2>

                            <p>
                                Create your account to continue.
                            </p>
                        </div>


                        <form
                            className="navo-auth-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="navo-form-field">
                                <label htmlFor="signup-name">
                                    FULL NAME
                                </label>

                                <input
                                    id="signup-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    autoComplete="name"
                                />
                            </div>


                            <div className="navo-form-field">
                                <label htmlFor="signup-email">
                                    EMAIL
                                </label>

                                <input
                                    id="signup-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                />
                            </div>


                            <div className="navo-form-field">
                                <div className="navo-form-label-row">
                                    <label htmlFor="signup-password">
                                        PASSWORD
                                    </label>

                                    <button
                                        type="button"
                                        className="navo-password-toggle"
                                        onClick={() =>
                                            setShowPassword(
                                                (previous) =>
                                                    !previous
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <>
                                                <EyeOff size={15} />
                                                Hide
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={15} />
                                                Show
                                            </>
                                        )}
                                    </button>
                                </div>

                                <input
                                    id="signup-password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                />

                                <div className="navo-password-hint">
                                    8+ characters · 1 uppercase ·
                                    1 number
                                </div>
                            </div>


                            <div className="navo-form-field">
                                <div className="navo-form-label-row">
                                    <label htmlFor="signup-confirm-password">
                                        CONFIRM PASSWORD
                                    </label>

                                    <button
                                        type="button"
                                        className="navo-password-toggle"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (previous) =>
                                                    !previous
                                            )
                                        }
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <>
                                                <EyeOff size={15} />
                                                Hide
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={15} />
                                                Show
                                            </>
                                        )}
                                    </button>
                                </div>

                                <input
                                    id="signup-confirm-password"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    value={
                                        formData.confirmPassword
                                    }
                                    onChange={handleChange}
                                    placeholder="Repeat your password"
                                    autoComplete="new-password"
                                />
                            </div>


                            <label className="navo-terms-checkbox">

                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />

                                <span className="navo-terms-box">
                                    <Check size={12} />
                                </span>

                                <span>
                                    I agree to the N∆VO terms
                                    and privacy policy.
                                </span>

                            </label>


                            <button
                                type="submit"
                                className="navo-auth-submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2
                                            size={18}
                                            className="navo-spinner"
                                        />

                                        Creating account...
                                    </>
                                ) : (
                                    <>
                                        Create account

                                        <ArrowUpRight size={18} />
                                    </>
                                )}
                            </button>

                        </form>


                        <div className="navo-auth-divider">
                            <span />
                            <small>OR</small>
                            <span />
                        </div>


                        <p className="navo-auth-switch">
                            Already have an account?

                            <Link to="/login">
                                Sign in
                                <ArrowUpRight size={15} />
                            </Link>
                        </p>

                    </div>


                    <div className="navo-auth-footer">
                        <span>© 2026 N∆VO</span>

                        <span>
                            FUTURE / TECHNOLOGY / DESIGN
                        </span>
                    </div>

                </div>

            </section>
        </main>
    );
}

export default Signup;