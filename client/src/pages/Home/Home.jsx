import React from "react";
// import "./Home.css";
import Header from "../../components/Header/Header";
// import Navbar from "../../components/Navbar/Navbar";
import SlideTop from "../../components/SlideTop/SlideTop";
import SlideBrand from "../../components/SlideBrand/SlideBrand";
import SlideContent from "../../components/SlideContent/SlideContent";
import TopThreeGpu from "../../components/TopThreeGpu/TopThreeGpu";
import TopTwoCpu from "../../components/TopTwoCpu/TopTwoCpu";
import Footer from "../../components/Footer/Footer";
import CardSlide from "../../components/CardSlide/CardSlide"

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="grid-container">
                    <div className="header-container">
                        <Header />
                        <div className="con-slide-top">
                            <SlideTop />
                        </div>
                    </div>

                    <div className="container">
                        <div className="content-container">
                            <div className="content-item">
                                <SlideBrand />
                            </div>
                            <div className="card-slide-test">
                                    <CardSlide/>
                            </div>
                            <div className="content-item">
                                <SlideContent />
                            </div>
                            <div className="content-item">
                                <TopThreeGpu />
                            </div>
                            <div className="content-item">
                                <TopTwoCpu />
                            </div>
                            <div className="content-item">
                                {" "}
                                <SlideContent />
                            </div>
                            <div className="content-item">
                                {" "}
                                <SlideContent />
                            </div>
                        </div>
                    </div>

                    <div className="footer-container">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
