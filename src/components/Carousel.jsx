import React from "react";
import CarouselSlide from "./CarouselSlide";

function Carousel() {
    return <div className="container mt-4 mt-md-0" style={{position: "relative", top: "-175px"}}>
            <div id="carouselIndicators" data-bs-theme="dark" className="carousel slide mx-3 mx-lg-4">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner bg-black-50 py-5">
                    <div className="carousel-item active">
                        <CarouselSlide imageNumber="1" name="Abbie Harvey" description="My boyfriend suffered from drug addiction. We had broken up several times and there were times when I thought it was all over. He is really great when he's sober and now I get to be a part of his life in a more healthy way, which is what I really wanted." />
                    </div>
                    <div className="carousel-item">
                        <CarouselSlide imageNumber="2" name="Xavier Woodley" description="When my wife started shopping heavily, I was very angry at her, We used to fight about money almost every day because of it, and I didn't think her arguments made much sense at all. Now I can see she was doing it because she was hurting. This intervention program was the best call I ever made. " />
                    </div>
                    <div className="carousel-item">
                        <CarouselSlide imageNumber="3" name="Pascal Calhoun" description="When my best friend started taking me out to bars, I just thought she was a social drinker. It took me two years to find out that she had a serious problem. Without the Alcohol Intervention program, I don't think I could have been able to help her the way I did." />
                    </div>
                    <div className="carousel-item">
                        <CarouselSlide imageNumber="4" name="Stephanie Michael" description="My son was only 15 years old when he landed himself in a lock-up, I didn't know where to turn. I consider myself very lucky to have stumbled on this program. I am relieved that there are people out there who are really willing to help." />
                    </div>
                    <div className="carousel-item">
                        <CarouselSlide imageNumber="5" name="Abbie Harvey" description="I could tell my daughter was in real serious trouble when her grades dropped from A to D. I will never forget the way she struggled to answer simple questions. Now we actually talk about the things that are bothering her instead of ignoring them or trying to cover them up. Thank you for the help -- I needed it!" />
                    </div>
                </div>
            </div>

    </div>;
}

export default Carousel;
