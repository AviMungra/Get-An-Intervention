import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import ContactUs from "./ContactUs.jsx";
import ImageGroup from "./ImageGroup.jsx";
import Understand from "./Understand.jsx";
import Carousel from "./Carousel.jsx";
import Organize from "./Organize.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <div className="bg-secondary-subtle" style={{paddingBottom: "10rem"}}>
                <Hero />
                <ContactUs />
                <ImageGroup />
                <Understand />
            </div>
            <Carousel />
            <Organize />
            <Footer />
        </div>
    );
}

export default App;
