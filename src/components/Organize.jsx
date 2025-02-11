import React from "react";
import Button from "./Button.jsx";

function Organize() {
    return (
        <div>
            <div className="container" style={{marginTop: "-8.5rem", marginBottom: "5rem"}}>
                <div className="d-flex flex-column mx-3 mx-lg-4">
                    <div>
                        <div className="fs-3 fw-bold mb-3 mb-lg-1">
                            WE CAN ORGANIZE EVERYTHING
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div
                            className="col-md-6 pe-md-3 pe-lg-2 mb-2 mb-lg-0"
                            style={{ textAlign: "justify" }}
                        >
                            Our intervention plan is the sum total of our
                            assessment and the family responses. In coordination
                            with a loved one, we work together to agree on a
                            specific set of actions that will support the
                            recovery.
                        </div>
                        <div className="col-md-6 pe-md-3 ps-lg-2">
                            <div style={{ textAlign: "justify" }}>
                                These actions may include telephone support,
                                sober companion services, drug and alcohol
                                screening, and many other services that are
                                detailed on this site.
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mt-1">
                        <Button
                            name="Needs Assessment"
                            description="We conduct a thorough pre-assessment which we use to choose the best intervention plan for you."
                        />
                        <Button
                            name="Treatment Planning & Placement"
                            description="Since every situation is unique, we make sure that the treatment is tailored to your specific needs."
                        />
                        <Button
                            name="Transportation & Logistics"
                            description="We will organize and take care of all transpotation and logistics so that you focus on recovery."
                        />
                        <Button
                            name="Insurance Advocacy"
                            description="We are knowledegable about insurance, and can help put your benefits to work for you."
                        />
                        <Button
                            name="Employment Advocacy"
                            description="We help with your employment situation so you can go back to providing for your loved ones."
                        />
                        <Button
                            name="Aftercare Planning"
                            description="We will build a customized follow-up plan to help you and your loved ones after the intervention has concluded."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organize;
