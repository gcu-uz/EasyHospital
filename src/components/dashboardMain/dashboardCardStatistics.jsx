import React, { Component } from "react";
import "./style.scss";

import trafik from "../../assets/img/trafik.svg";
import money from "../../assets/img/money.svg";
import addImage from "../../assets/img/add-image.svg";
import target from "../../assets/img/target.svg";

class DashboardCardStatistics extends Component {
  render() {
    return (
      <div className="dashboardCardStatistics">
        <div className="w-100 d-flex justify-content-between flex-wrap">
          <div className="red-block dash-block">
            <span className="title">Трафик</span>
            <img className="float-right" src={trafik} alt="" />
            <br />
            <span className="number">15 697</span>
            <br />
            <br />
            <br />
            <p className="mb-0">
              <img src="/assets/svg/ArrowDown.svg" alt="" /> 12% С прошлого
              месяца
            </p>
          </div>
          <div className="blue-block dash-block">
            <span className="title">Лиды</span>
            <img className="float-right" src={target} alt="" />
            <br />
            <span className="number">8 1342</span>
            <br />
            <br />
            <br />
            <p className="mb-0">
              <img src="/assets/svg/ArrowUp.svg" alt="" /> 12% С прошлого месяца
            </p>
          </div>
          <div className="green-block dash-block">
            <span className="title">Заявки</span>
            <img className="float-right" src={addImage} alt="" />
            <br />
            <span className="number">2 477</span>
            <br />
            <br />
            <br />
            <p className="mb-0">
              <img src="/assets/svg/ArrowUp.svg" alt="" /> 31% С прошлого месяца
            </p>
          </div>
          <div className="orange-block dash-block">
            <span className="title">Общий доход</span>
            <img className="float-right" src={money} alt="" />
            <br />
            <span className="number">356 400 ₽</span>
            <br />
            <br />
            <br />
            <p className="mb-0">
              <img src="/assets/svg/ArrowUp.svg" alt="" /> 20% С прошлого месяца
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardCardStatistics;
