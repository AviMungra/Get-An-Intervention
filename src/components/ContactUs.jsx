import React from "react";

function ContactUs() {
    return (
        <div className="contact-us">
            <div
                className="container"
                style={{ position: "relative", top: "-8.5rem", zIndex: "1" }}
            >
                <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 mx-3 mx-lg-4 py-4 px-3 px-lg-1 text-center align-middle bg-color text-white text-decoration-underline shadow-sm">
                    <div>
                        Talk to Eric to Find{" "}
                        <span className="fw-bold">Your</span> Treatment Options
                        <span className="d-none d-md-inline ps-2">|</span>
                    </div>
                    <div className="mt-2 mt-md-0">
                        <span className="fw-bold">891.504.6283</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
