import React from "react";
import newLogo from "../../assets/img/newLogo.png";
import { makeStyles } from "@material-ui/core/styles";

import bir from "../../assets/icons/bir.jpg";
import ikki from "../../assets/icons/ikki.jpg";
import uch from "../../assets/icons/uch.jpg";
import tort from "../../assets/icons/tort.jpg";
import besh from "../../assets/icons/bech.jpg";
import olti from "../../assets/icons/bir.jpg";
import yetti from "../../assets/icons/yetti.jpg";

import "./leftBar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="">
          <img className="header_logo leftBarImg" src={newLogo} alt="" />
        </div>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <ul>
            <li className="leftBarList mb-4">
              <img src={bir} alt="" /> Dashboard
            </li>
            <li className="leftBarList mb-4">
              <img src={ikki} alt="" /> Appointments
            </li>
            <li className="leftBarList mb-4">
              <img src={uch} alt="" /> Doctors
            </li>
            <li className="leftBarList mb-4">
              <img src={tort} alt="" /> Departments
            </li>
            <li className="leftBarList mb-4">
              <img src={besh} alt="" /> Patients
            </li>
            <li className="leftBarList mb-4">
              <img src={yetti} alt="" /> Registration
            </li>
            {/* <li className="leftBarList mb-4"></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
