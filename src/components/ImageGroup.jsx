import React from "react";

function ImageGroup() {
    return (
        <div
            className="image-group container d-none d-md-block"
            style={{ position: "relative", top: "-50px" }}
        >
            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mx-3 mx-lg-4 gap-3">
                <div>
                    <div className="w-100">
                        <img
                            src="/images/group/heroImage1.png"
                            className="img-fluid shadow-sm"
                            style={{ maxHeight: "180px" }}
                            alt="Image 1"
                        />
                    </div>
                </div>
                <div>
                    <div className="w-100">
                        <img
                            src="../../public/images/group/heroImage2.png"
                            className="img-fluid shadow-sm"
                            style={{ maxHeight: "180px" }}
                            alt="Image 2"
                        />
                    </div>
                </div>
                <div>
                    <div className="w-100">
                        <img
                            src="../../public/images/group/heroImage3.png"
                            className="img-fluid shadow-sm"
                            style={{ maxHeight: "180px" }}
                            alt="Image 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGroup;
