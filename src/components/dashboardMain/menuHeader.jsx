import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import bell from "../../assets/icons/bell.svg";

class AdminRightSideHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu2: false,
    };
  }

  showLanguageDropDown2 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu2: true }, () => {
      document.addEventListener("click", this.hideLanguageDropDown2);
    });
  };
  hideLanguageDropDown2 = () => {
    this.setState({ displayMenu2: false }, () => {
      document.removeEventListener("click", this.hideLanguageDropDown2);
    });
  };

  openNav = () => {
    // @ts-ignore
    document.getElementById("myNav").style.width = "300px";
  };

  closeNav = () => {
    // @ts-ignore
    document.getElementById("myNav").style.width = "0";
  };

  render() {
    const AdminLinks = ({ to, activeOnlyWhenExact, children }) => {
      return (
        <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => (
            <div className="">
              <Link to={to} className={match ? "active" : "adminLink"}>
                {children}
              </Link>
            </div>
          )}
        />
      );
    };

    return (
      <div className="container-fluid adminRightSideHeader bg-danger position-relative">
        <div className="adminRightSideHeaderFlex">
          <div className="adminRightSideHeaderFlexSubOne">
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={this.openNav}
            >
              &#9776;
            </span>
            <div id="myNav" className="overlay">
              <a
                href="#"
                className="closebtn text-decoration-none"
                onClick={this.closeNav}
              >
                &times;
              </a>
              <div className="overlay-content">
                <div className="dashboardMenuContents">
                  <div className="dashboardLeftBrand">
                    <Link to="/dashboard" onClick={this.closeNav}>
                      <div className="dashboardLeftBrandFlex">
                        <div className="">
                          <img src="/assets/img/logo.png" alt="" />
                          <span className="ml-2">Mountain Lead</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="dashboardLeftBrandSubFlex">
                    <div className="">
                      <div className="dashboardLeftBrandSubFlex1">
                        <div className="">
                          <i className="icon icon-66dashboardLinkIcon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="adminRightSideHeaderFlexSubTwo">
            <p className="title mb-0">
              <span className="titleBtn mr-2">БЕСПЛАТНО</span> Попробуйте PRO
              версию нашей системы в течении 14 дней бесплатно, без привязки
              кредитной карты
            </p>
          </div>
          <div className="ml-3">
            <div className="d-flex">
              <div className="notifications">
                <div className="d-flex align-items-center h-100">
                  <div className="mr-1">
                    <Link to="" className="text-decoration-none text-dark">
                      <div className="notificationsFlex">
                        <div className="">
                          <img src={bell} className="bell icon-bell" alt="" />
                          {/* <i
                            className={"bell icon icon-bell"}
                            // className={unReadNotifications.length === 0 ? "bellOut" : "bell"}
                          /> */}
                        </div>
                        <div className="">
                          <span className="">
                            <span className="pulse">
                              <span className="d-flex align-items-center justify-content-center h-100 w-100">
                                <span className="">5</span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  className="d-flex align-items-center position-relative h-100"
                  style={{ cursor: "pointer" }}
                  onClick={this.showLanguageDropDown2}
                >
                  <div className="userImg h-100">
                    <div className="">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        {this.state.displayMenu2 ? (
                          <div className="">
                            <div className="displayMenuFilter2 d-flex justify-content-start w-100 position-absolute">
                              <div className="filter2">
                                <div className="d-flex flex-column">
                                  <Link
                                    to="/profile/settings"
                                    className="text-dark text-decoration-none"
                                  >
                                    <div className="">
                                      <p className="mb-0 text-left pl-3">
                                        Мой профиль
                                      </p>
                                    </div>
                                  </Link>
                                  <div className="">
                                    <p className="mb-0 text-left pl-3">Выход</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="adminAdditionalHeaderUser d-flex">
                      <div className="">
                        <img
                          className="userImg"
                          src="https://www.wallpapertip.com/wmimgs/178-1781584_stylish-man-in-bow-tie-photo-fashion-men.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ml-2">
                        <p className="fullName mb-0">Владислав</p>
                        <p className="roleText mb-0">Менеджер</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminRightSideHeader;
