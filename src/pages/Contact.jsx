import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Check,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import { toast } from "react-hot-toast";

import "./Contact.css";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function Contact() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const validate = () => {
        const nextErrors = {};

        if (!form.name.trim()) {
            nextErrors.name = "Name is required.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (!form.subject.trim()) {
            nextErrors.subject = "Subject is required.";
        }

        if (!form.message.trim()) {
            nextErrors.message = "Message is required.";
        } else if (form.message.trim().length < 10) {
            nextErrors.message = "Please enter at least 10 characters.";
        }

        return nextErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = validate();

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            toast.error("Please check the highlighted fields.");
            return;
        }

        setIsSending(true);

        window.setTimeout(() => {
            setIsSending(false);
            setForm(initialForm);
            setErrors({});
            toast.success("Message received. N∆VO will be in touch.");
        }, 850);
    };

    return (
        <section className="navo-contact" id="contact">
            <div className="contact-background" aria-hidden="true">
                <div className="contact-grid" />
                <div className="contact-glow contact-glow-one" />
                <div className="contact-glow contact-glow-two" />
            </div>

            <div className="contact-container">
                <motion.div
                    className="contact-top"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="contact-eyebrow">
                        <span />
                        N∆VO / CONTACT
                    </div>

                    <div className="contact-status">
                        <span />
                        CONNECTION OPEN
                    </div>
                </motion.div>

                <motion.div
                    className="contact-hero"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="contact-index">06</div>

                    <div className="contact-title">
                        <span>LET'S</span>
                        <span>CONNECT.</span>
                    </div>

                    <div className="contact-hero-copy">
                        <p>
                            Have a question, collaboration idea or something
                            worth building together?
                        </p>

                        <span>
                            N∆VO LAB
                            <br />
                            BENGALURU / INDIA
                        </span>
                    </div>
                </motion.div>

                <div className="contact-layout">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.75 }}
                    >
                        <div className="contact-info-heading">
                            <span>01</span>
                            <div>
                                <small>START A CONVERSATION</small>
                                <h2>
                                    Tell us what
                                    <br />
                                    you're thinking.
                                </h2>
                            </div>
                        </div>

                        <p className="contact-info-description">
                            Whether it is a product question, partnership,
                            creative collaboration or an idea from the Future
                            Lab, send it our way.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:hello@navo.example">
                                <span className="contact-detail-icon">
                                    <Mail size={17} strokeWidth={1.4} />
                                </span>

                                <span>
                                    <small>EMAIL</small>
                                    hello@navo.example
                                </span>

                                <ArrowUpRight size={16} strokeWidth={1.4} />
                            </a>

                            <div className="contact-detail">
                                <span className="contact-detail-icon">
                                    <MapPin size={17} strokeWidth={1.4} />
                                </span>

                                <span>
                                    <small>LAB</small>
                                    Bengaluru, India
                                </span>
                            </div>
                        </div>

                        <div className="contact-note">
                            <span>RESPONSE TIME</span>
                            <p>Usually within 1–2 business days.</p>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-form-header">
                            <span>02</span>
                            <small>SEND A MESSAGE</small>
                        </div>

                        <div className="contact-fields">
                            <label className={errors.name ? "has-error" : ""}>
                                <span>YOUR NAME</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                />
                                {errors.name && (
                                    <em>{errors.name}</em>
                                )}
                            </label>

                            <label className={errors.email ? "has-error" : ""}>
                                <span>EMAIL ADDRESS</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <em>{errors.email}</em>
                                )}
                            </label>

                            <label className={errors.subject ? "has-error" : ""}>
                                <span>SUBJECT</span>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What can we help with?"
                                />
                                {errors.subject && (
                                    <em>{errors.subject}</em>
                                )}
                            </label>

                            <label className={errors.message ? "has-error" : ""}>
                                <span>MESSAGE</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what's on your mind..."
                                    rows="6"
                                />
                                {errors.message && (
                                    <em>{errors.message}</em>
                                )}
                            </label>
                        </div>

                        <div className="contact-form-footer">
                            <p>
                                This is a frontend contact form. No message is
                                sent to a real backend yet.
                            </p>

                            <button
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <>
                                        Sending
                                        <span className="contact-spinner" />
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <Send size={16} strokeWidth={1.4} />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>

                <motion.div
                    className="contact-lab"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-lab-mark">N∆VO</div>

                    <div className="contact-lab-copy">
                        <small>N∆VO FUTURE LAB</small>
                        <h3>
                            Some conversations
                            <br />
                            start before the technology exists.
                        </h3>
                    </div>

                    <div className="contact-lab-meta">
                        <span>LAB / 01</span>
                        <span>2040+</span>
                    </div>
                </motion.div>

                <div className="contact-bottom">
                    <span>06 — N∆VO / CONTACT</span>

                    <p>
                        Have an idea?
                        <br />
                        Start the conversation.
                    </p>

                    <a href="/about">
                        About N∆VO
                        <ArrowUpRight size={16} strokeWidth={1.4} />
                    </a>
                </div>

                <div className="contact-scroll">
                    <ArrowDown size={15} strokeWidth={1} />
                    <span>CONTINUE</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
