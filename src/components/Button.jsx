import React, { useEffect, useState } from "react";

function Button(props) {
    const [styleObject, setStyleObject] = useState({});
    const [isclicked, setIsClicked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const staticState = {
        backgroundColor: "white",
        color: "black",
        border: "3px solid #67d3b2",
        minHeight: "5.5rem",
        maxHeight: "5.5rem",
    };

    const hoverState = {
        backgroundColor: "black",
        color: "#67d3b2",
        minHeight: "5.5rem",
        maxHeight: "5.5rem",
    };

    // clicked with hover
    const clickedState = {
        backgroundColor: "black",
        color: "#67d3b2",
        minHeight: "5.5rem",
        maxHeight: "5.5rem",
    };

    // when the component loads, useEffect hook sets the "styleObject" to "staticState"
    useEffect(() => {
        setStyleObject(staticState);
    }, []);

    function handleHover() {
        setIsHover(true);

        if (isclicked === false) {
            setStyleObject(hoverState);
        } else {
            setStyleObject(clickedState);
        }
    }

    function handleMouseOut() {
        setIsHover(false);
        setStyleObject(staticState);
    }

    function handleClick() {
        // first time click
        if (isclicked === false && isHover === true) {
            setIsClicked(true);
        } else if (isclicked === false && isHover === false) {
            setIsClicked(true);
            setStyleObject(staticState);
            setIsHover(false);
        }
        // second time click
        else {
            setIsClicked(false);
            setStyleObject(staticState);
        }
    }

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <button
                className="w-100 fw-bold"
                style={styleObject}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseOut}
                onClick={handleClick}
            >
                {!isclicked ? (
                    <div className="px-5 button-text">{props.name}</div>
                ) : (
                    <div style={{ fontSize: "0.75rem" }}>
                        <div className="px-5">{props.name}</div>
                        <div
                            className={
                                isHover
                                    ? "text-white fw-normal mt-2 px-2"
                                    : "text-black fw-normal mt-2 px-2"
                            }
                        >
                            {props.description}
                        </div>
                    </div>
                )}
            </button>
        </div>
    );
}

export default Button;
