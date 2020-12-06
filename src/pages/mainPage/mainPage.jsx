import React from "react";

import newLogo from "../../assets/img/newLogo.png";
import illustration from "../../assets/img/illustration.png";
import first from "../../assets/img/1.png";
import second from "../../assets/img/2.png";
import third from "../../assets/img/3.png";
import fourth from "../../assets/img/4.png";
import fifth from "../../assets/img/5.png";
import six from "../../assets/img/6.png";
import logo2 from "../../assets/img/logo2.png";
import element3 from "../../assets/img/element3.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import line from "../../assets/img/line.png";
import profile from "../../assets/img/profile.png";
import linew from "../../assets/img/linew.png";
import ill1 from "../../assets/img/ill1.png";
import ill2 from "../../assets/img/ill2.png";

import { Link } from "react-router-dom";

import "./style.css";

const MainPage = () => {
  return (
    <div>
      {/* <a href="" className="area"></a> */}
      <div className="menu_ad">
        <div className="header__menu">
          <ul>
            <li className="active">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Find a doctor</a>
            </li>
            <li>
              <a href="">Apps</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <Link to="/zayavka"> Zayavka </Link>
            </li>
          </ul>

          <div className="header__feedback">
            <div className="header__feedback_icons d-flex justify-content-start align-items-center">
              <div className="icon">
                <img
                  src="img/facebook-f-brands-black.png"
                  alt=""
                  width="auto"
                  height="17.6"
                />
              </div>
              <div className="icon">
                <img
                  src="img/instagram-brands-black.png"
                  alt=""
                  width="auto"
                  height="17.6"
                />
              </div>
              <div className="icon">
                <img
                  src="img/twitter-brands-black.png"
                  alt=""
                  width="auto"
                  height="17.6"
                />
              </div>
            </div>
            <div
              className="header__feedback_address"
              style={{ color: "white" }}
            >
              © 2020 MegaOne. Made With Love by Themesindustry
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="navbar d-flex justify-content-between align-items-center">
            <div className="col-md-6 d-flex justify-content-between align-items-center">
              {/* <div className="header-newLogo" data-aos="fade-right"> */}
              <div className="header-logo">
                <img className="header_logo" src={newLogo} alt="newLogo" />
              </div>
              <div className="header__burger">
                <span></span>
              </div>
            </div>
            <div className="col-md-6 m-0 p-0 w-100">
              {/* <div className="header-menu" data-aos="fade-left"> */}
              <div className="header-menu">
                <ul>
                  <li className="active">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Find a doctor</a>
                  </li>
                  <li>
                    <a href="">Apps</a>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                  <li>
                    <Link to="/zayavka"> Zayavka </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section id="home">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                {/* <div className="home-article" data-aos="fade-up"> */}
                <div className="home-article">
                  <h2 className="home-title">Virtual healthcare for you</h2>
                  <p className="home-article">
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                  </p>
                  <button className="button">
                    <a href="">Consult today</a>
                  </button>
                </div>
              </div>
              {/* <div className="home-img col-md-6" data-aos="fade-up"> */}
              <div className="home-img col-md-6">
                <img src={illustration} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            {/* <div className="services-title text-center" data-aos="fade-up"> */}
            <div className="services-title text-center">
              <h3 style={{ fontWeight: 700, marginBottom: "26px" }}>
                Our services
              </h3>
              <img src={line} alt="" style={{ marginBottom: "33px" }} />
              <p className="article text-center m-0">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
            <div className="services-content">
              <div
                className="block col-md-12 d-flex justify-content-between"
                style={{ marginBottom: "40px" }}
              >
                {/* <div className="cart" data-aos="fade-right"> */}
                <div className="cart">
                  <img src={first} alt="" />
                  <h4 className="cart-title">Search doctor</h4>
                  <p className="article">
                    Choose your doctor from thousands of specialist, general,
                    and trusted hospitals
                  </p>
                </div>
                {/* <div className="cart" data-aos="fade-down"> */}
                <div className="cart">
                  <img src={second} alt="" />
                  <h4 className="cart-title">Online pharmacy</h4>
                  <p className="article">
                    Buy your medicines with our mobile application with a simple
                    delivery system
                  </p>
                </div>
                {/* <div className="cart" data-aos="fade-left"> */}
                <div className="cart">
                  <img src={third} alt="" />
                  <h4 className="cart-title">Consultation</h4>
                  <p className="article">
                    Free consultation with our trusted doctors and get the best
                    recomendations
                  </p>
                </div>
              </div>
              <div className="block col-md-12 d-flex justify-content-between">
                {/* <div className="cart" data-aos="fade-right"> */}
                <div className="cart">
                  <img src={fourth} alt="" />
                  <h4 className="cart-title">Details info</h4>
                  <p className="article">
                    Free consultation with our trusted doctors and get the best
                    recomendations
                  </p>
                </div>
                {/* <div className="cart" data-aos="fade-up"> */}
                <div className="cart">
                  <img src={fifth} alt="" />
                  <h4 className="cart-title">Emergency care</h4>
                  <p className="article">
                    You can get 24/7 urgent care for yourself or your children
                    and your lovely family
                  </p>
                </div>
                {/* <div className="cart" data-aos="fade-left"> */}
                <div className="cart">
                  <img src={six} alt="" />
                  <h4 className="cart-title">Tracking</h4>
                  <p className="article">
                    Track and save your medical history and health data{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="services-button text-center">
              {/* <button className="button-brd" data-aos="fade-up"> */}
              <button className="button-brd">
                <a href="">Learn more</a>
              </button>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="about-doctor">
              {/* <div className="col-md-6" data-aos="fade-right"> */}
              <div className="col-md-6">
                <div className="about-img">
                  <img src={ill1} alt="" />
                </div>
              </div>
              {/* <div
                className="col-md-6 text-left about-article"
                data-aos="fade-left"
              > */}
              <div className="col-md-6 text-left about-article">
                <div className="about-doctor__title text-left">
                  <h3 style={{ marginBottom: "26px" }}>
                    Leading healthcare providers
                  </h3>
                  <img src={line} alt="" />
                </div>
                <p className="article text-left">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone. To us, it’s not
                  just work. We take pride in the solutions we deliver
                </p>
                <button className="button-brd">
                  <a href="">Learn more</a>
                </button>
              </div>
            </div>

            <div className="about-app">
              {/* <div
                className="col-md-6 text-left about-article"
                data-aos="fade-right"
              > */}
              <div className="col-md-6 text-left about-article">
                <div className="about-doctor__title text-left">
                  <h3 style={{ marginBottom: "26px" }}>
                    Download our mobile apps
                  </h3>
                  <img src={line} alt="" />
                </div>
                <p className="article text-left">
                  Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely
                </p>
                <button className="button-brd">
                  <a href="">Download</a>
                </button>
              </div>

              {/* <div className="col-md-6" data-aos="fade-left"> */}
              <div className="col-md-6">
                <div className="about-img">
                  <img src={ill2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="comments" id="comments">
          <div className="container">
            {/* <div className="comments-block" data-aos="fade-up"> */}
            <div className="comments-block">
              <div className="comments-title text-center">
                <h3 style={{ marginBottom: "25px" }}>
                  What our customers are saying
                </h3>
                <img src={linew} alt="" />
              </div>

              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slide">
                      <div className="block_1">
                        <div className="comments-profile d-flex justify-content-start align-items-center">
                          <img src={profile} alt="" />
                          <div className="comments-profile__title">
                            <h4 className="profile__title_name">
                              Edward Newgate
                            </h4>
                            <span className="profile__title_job">
                              Founder Circle
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="block_2">
                        <p
                          className="article"
                          style={{ color: "white", textAlign: "center" }}
                        >
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide">
                      <div className="block_1">
                        <div className="comments-profile d-flex justify-content-start align-items-center">
                          <img src={profile} alt="" />
                          <div className="comments-profile__title">
                            <h4 className="profile__title_name">
                              Edward Newgate
                            </h4>
                            <span className="profile__title_job">
                              Founder Circle
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="block_2">
                        <p
                          className="article"
                          style={{ color: "white", textAlign: "center" }}
                        >
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide">
                      <div className="block_1">
                        <div className="comments-profile d-flex justify-content-start align-items-center">
                          <img src={profile} alt="" />
                          <div className="comments-profile__title">
                            <h4 className="profile__title_name">
                              Edward Newgate
                            </h4>
                            <span className="profile__title_job">
                              Founder Circle
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="block_2">
                        <p
                          className="article"
                          style={{ color: "white", textAlign: "center" }}
                        >
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
              <img src={element3} alt="" className="element3" />
              <img src={element3} alt="" className="element4" />
            </div>
          </div>
        </section>

        <section className="blog" style={{ paddingTop: "220px" }}>
          <div className="container">
            <div
              className="blog-title text-center"
              style={{ marginBottom: "80px" }}
            >
              {/* <h3
                style={{ fontWeight: 700, marginBottom: "26px" }}
                data-aos="fade-up"
              > */}
              <h3 style={{ fontWeight: 700, marginBottom: "26px" }}>
                Check out our latest article
              </h3>
              {/* <img
                src="img/line.png"
                alt=""
                style={{ marginBottom: "33px" }}
                data-aos="fade-up"
              /> */}
              <img src={line} alt="" style={{ marginBottom: "33px" }} />
            </div>
            <div className="card-deck">
              {/* <div className="card" data-aos="fade-up"> */}
              <div className="card">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Disease detection, check up in the laboratory
                  </h5>
                  <p className="card-text">
                    In this case, the role of the health laboratory is very
                    important to do a disease detection...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <a href="">
                        Read more<i className="fas fa-arrow-right"></i>
                      </a>
                    </small>
                  </p>
                </div>
              </div>
              {/* <div className="card" data-aos="fade-up"> */}
              <div className="card">
                <img
                  src={img2}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Herbal medicines that are safe for consumption
                  </h5>
                  <p className="card-text">
                    Herbal medicine is very widely used at this time because of
                    its very good for your health...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <a href="">
                        Read more<i className="fas fa-arrow-right"></i>
                      </a>
                    </small>
                  </p>
                </div>
              </div>
              {/* <div className="card" data-aos="fade-up"> */}
              <div className="card">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Natural care for healthy facial skin
                  </h5>
                  <p className="card-text">
                    A healthy lifestyle should start from now and also for your
                    skin health. There are some...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <a href="">
                        Read more<i className="fas fa-arrow-right"></i>
                      </a>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="foot text-center">
              {/* <button className="button-brd tesbtn ham" data-aos="fade-up"> */}
              <button className="button-brd tesbtn ham">
                <a href="">View all</a>
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="footer" data-aos="fade-up"> */}
      <footer className="footer">
        <img src={element3} alt="" className="foot1" />
        <img src={element3} alt="" className="foot2" />
        <div className="container">
          <div className="footer-content">
            <div className="col-md-3 text-left">
              <img
                className="header_logo"
                src={logo2}
                alt=""
                style={{ marginBottom: "17px" }}
              />
              <p
                className="article text-left"
                style={{ color: "white", marginBottom: "30px" }}
              >
                EasyHospital provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p className="article text-left" style={{ color: "white" }}>
                ©EasyHospital PTY LTD 2020. All rights reserved
              </p>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="active">Company</li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Find a doctor</a>
                </li>
                <li>
                  <a href="">Apps</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="active">Region</li>
                <li>
                  <a href="">Indonesia</a>
                </li>
                <li>
                  <a href="">Singapore</a>
                </li>
                <li>
                  <a href="">Hongkong</a>
                </li>
                <li>
                  <a href="">Canada</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="active">Help</li>
                <li>
                  <a href="">Help center</a>
                </li>
                <li>
                  <a href="">Contact support</a>
                </li>
                <li>
                  <a href="">Instruction</a>
                </li>
                <li>
                  <a href="">How it works</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default MainPage;
