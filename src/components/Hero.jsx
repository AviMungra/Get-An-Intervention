import React from "react";

function Hero() {
    return (
        <div
            className="hero-section col-xxl-8 py-5 d-flex align-items-center"
            style={{
                position: "relative",
                top: "-6rem",
                left: "0px",
                zIndex: "0",
            }}
        >
            <div className="container text-white">
                <div className="row align-items-center py-5 mx-lg-4 ms-2 ms-md-1 ms-lg-2">
                    <div className="hero-text col-12 col-md-10 col-lg-8 pe-4">
                        <h1 className="fw-light lh-1 mb-3 d-flex flex-column flex-lg-row gap-3">
                            <div>
                                GET <span className="fw-normal">AN</span>{" "}
                            </div>
                            <div>
                                <span className="fw-bold">INTERVENTION</span>
                            </div>
                        </h1>
                        <p className="pe-md-5" style={{ textAlign: "justify" }}>
                            When dealing with addiction, every situation is
                            unique. We have proven intervention strategies that
                            can help you or your loved ones get back on track.
                            Contact us to see how we can help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
