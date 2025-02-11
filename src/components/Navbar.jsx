import React from "react";

function Navbar() {
    return (
        <div
            className="bg-transparent"
            style={{
                position: "relative",
                top: "0px",
                left: "0px",
                zIndex: "2",
            }}
        >
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark py-3 ms-3 mx-lg-4">
                    <a
                        href="/"
                        className="navbar-brand text-white text-decoration-none"
                    >
                        <span className="fw-light fs-6 d-flex flex-column flex-md-row gap-2">
                            <div>
                                GET <span className="fw-normal">AN</span>
                            </div>
                            <div>
                                <span className="fw-bold">INTERVENTION</span>
                            </div>
                        </span>
                    </a>
                    <button
                        className="navbar-toggler fs-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="offcanvas offcanvas-end text-bg-dark"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title text-white mt-3"
                                id="offcanvasNavbarLabel"
                            >
                                Menu
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a
                                        href="/"
                                        className="nav-link text-white text-decoration-underline fw-medium"
                                    >
                                        <small>HOME</small>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/"
                                        className="nav-link text-white fw-light px-lg-2"
                                    >
                                        <small>ABOUT</small>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/"
                                        className="nav-link text-white fw-light"
                                    >
                                        <small>CONTACT</small>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-lg-inline">
                                    <span className="nav-link px-0 text-white">
                                        <small>|</small>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="text-color nav-link fw-medium pe-0">
                                        <small>
                                            CALL NOW FOR A CONSULT 891.504.6283
                                        </small>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
