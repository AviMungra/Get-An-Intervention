import React from "react";

function Footer() {
    return (
        <div className="bg-dark mt-5">
            <div className="container">
                <footer className="d-flex flex-column flex-lg-row justify-content-between align-items-center py-4 py-md-5 text-light fw-light mx-3 mx-lg-4">
                    <div className="col-lg-4">
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-1 mb-3 mb-lg-0">
                            <span>© 2024 Get An Intervention, Inc.</span>
                            <span>All Rights Reserved.</span>
                        </div>
                    </div>

                    <ul className="nav col-lg-4 d-flex justify-content-end list-unstyled mt-lg-0">
                        <li className="ms-1 me-1">
                            <a className="link-underline-dark text-light fw-light" href="/">
                                <div>Privacy Policy</div>
                            </a>
                        </li>
                        <li><div>|</div></li>
                        <li className="ms-1 me-1">
                            <a className="link-underline-dark text-light fw-light" href="/">
                                <div>Terms of Use</div>
                            </a>
                        </li>
                        <li><div>|</div></li>
                        <li className="ms-1">
                            <a className="link-underline-dark text-light fw-light" href="/">
                                <div>Sitemap</div>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
