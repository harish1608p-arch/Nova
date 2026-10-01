import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
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
            toast.error("Please enter your password.");
            return false;
        }

        if (formData.password.length < 6) {
            toast.error("Password must contain at least 6 characters.");
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
            setTimeout(resolve, 900);
        });

        setIsLoading(false);

        toast.success("Welcome back to N∆VO.");

        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    return (
        <main className="navo-auth-page">
            <section className="navo-auth-shell">

                <div className="navo-auth-visual">
                    <div className="navo-auth-grid" />

                    <div className="navo-auth-orb">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="navo-auth-visual-top">
                        <span>N∆VO</span>
                        <span>ACCESS / 01</span>
                    </div>

                    <div className="navo-auth-visual-content">
                        <p className="navo-auth-eyebrow">
                            N∆VO / PRIVATE ACCESS
                        </p>

                        <h1>
                            ENTER
                            <br />
                            THE
                            <br />
                            SYSTEM.
                        </h1>

                        <p>
                            Your N∆VO account connects your products,
                            collection and future experiences.
                        </p>
                    </div>

                    <div className="navo-auth-visual-bottom">
                        <span>SECURE INTERFACE</span>
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
                            01 / 02
                        </span>
                    </div>


                    <div className="navo-auth-form-content">

                        <div className="navo-auth-heading">
                            <p className="navo-auth-label">
                                ACCOUNT ACCESS
                            </p>

                            <h2>Welcome back.</h2>

                            <p>
                                Sign in to continue your N∆VO experience.
                            </p>
                        </div>


                        <form
                            className="navo-auth-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="navo-form-field">
                                <label htmlFor="login-email">
                                    EMAIL
                                </label>

                                <input
                                    id="login-email"
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
                                    <label htmlFor="login-password">
                                        PASSWORD
                                    </label>

                                    <button
                                        type="button"
                                        className="navo-password-toggle"
                                        onClick={() =>
                                            setShowPassword(
                                                (previous) => !previous
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

                                <div className="navo-password-input">
                                    <input
                                        id="login-password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>


                            <div className="navo-login-options">

                                <label className="navo-checkbox">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                    />

                                    <span className="navo-checkbox-box" />

                                    <span>Remember me</span>
                                </label>


                                <button
                                    type="button"
                                    className="navo-forgot-button"
                                    onClick={() =>
                                        toast(
                                            "Password recovery will be connected to the backend later."
                                        )
                                    }
                                >
                                    Forgot password?
                                </button>

                            </div>


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

                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in

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
                            Don't have an account?

                            <Link to="/signup">
                                Create one
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

export default Login;