import React from "react";

function CarouselSlide(props) {
    return (
        <div className="container px-0 px-lg-5">
            <div className="row mx-lg-5">

                <div className="col-12 col-md-4 slide-image">
                    <img src={"/images/testimonial/Testimonial " + props.imageNumber + ".jpg"} className="w-100 shadow-sm" alt="testimonial-image" />
                </div>

                <div className="col-12 col-md-8 bg-body-secondary px-4 pt-4 px-md-5 ps-md-4 ps-lg-5 pt-lg-5 pb-0 shadow-sm">

                    <p className="fw-bold lh-1 pt-2 pt-lg-3 mb-2 text-center text-md-start" style={{ color: "#67d3b2" }}>
                        {props.name}
                    </p>

                    <span style={{position: "relative", zIndex: 2, top: "-10px", left: "-20px"}}>
                        <img src="/images/testimonial/“.png" alt="quote" />
                    </span>

                    <p className="text-white px-2 mb-0 px-md-0" style={{ textAlign: "justify", position: "relative", top: "-25px" }}>
                        {props.description}

                    <span style={{position: "relative", zIndex: 2, top: "-10px", left: "-18px"}}>
                        <img src="/images/testimonial/”.png" alt="quote" />
                    </span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default CarouselSlide;
