import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Products2026 from "./sections/Products2026";
import Wearables from "./sections/Wearables";
import Timeline from "./sections/Timeline";
import Vault from "./sections/Vault";
import Future from "./sections/Future";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import WearableDetails from "./pages/WearableDetails";
import VaultDetails from "./pages/VaultDetails";

import "./App.css";


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Products2026 />

        <Wearables />

        <Timeline />

        <Vault />

        <Future />
      </main>
    </>
  );
}


/* =========================================================
   PRODUCTS PAGE
========================================================= */

function ProductsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Products />
      </main>
    </>
  );
}


/* =========================================================
   PRODUCT DETAILS PAGE
========================================================= */

function ProductDetailsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProductDetails />
      </main>
    </>
  );
}


/* =========================================================
   WEARABLE DETAILS PAGE
========================================================= */

function WearableDetailsPage() {
  return (
    <>
      <Navbar />

      <main>
        <WearableDetails />
      </main>
    </>
  );
}


/* =========================================================
   VAULT DETAILS PAGE
========================================================= */

function VaultDetailsPage() {
  return (
    <>
      <Navbar />

      <main>
        <VaultDetails />
      </main>
    </>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <About />
      </main>
    </>
  );
}


/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Contact />
      </main>
    </>
  );
}


/* =========================================================
   LOGIN PAGE
========================================================= */

function LoginPage() {
  return (
    <>
      <Navbar />

      <main>
        <Login />
      </main>
    </>
  );
}


/* =========================================================
   SIGNUP PAGE
========================================================= */

function SignupPage() {
  return (
    <>
      <Navbar />

      <main>
        <Signup />
      </main>
    </>
  );
}


/* =========================================================
   CHECKOUT PAGE
========================================================= */

function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main>
        <Checkout />
      </main>
    </>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <div className="navo-app">

      <Routes>

        {/* =================================================
           HOME
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =================================================
           PRODUCTS
        ================================================= */}

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />


        {/* =================================================
           WEARABLES
        ================================================= */}

        <Route
          path="/wearables/:id"
          element={<WearableDetailsPage />}
        />


        {/* =================================================
           THE VAULT
        ================================================= */}

        <Route
          path="/vault/:id"
          element={<VaultDetailsPage />}
        />


        {/* =================================================
           INFORMATION
        ================================================= */}

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />


        {/* =================================================
           AUTHENTICATION
        ================================================= */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />


        {/* =================================================
           CHECKOUT
        ================================================= */}

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

      </Routes>

    </div>
  );
}

export default App;