import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import zay_img from "../../assets/img/zay_img.png";

export const Zayavka = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const formData = new FormData();
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  };
  const onSubmit = (data) => (
    formData.append("phone", data.phone),
    formData.append("shifoxona", data.shifoxona),
    formData.append("address", data.address),
    formData.append("email", data.email),
    fetch("https://b026c7b95733.ngrok.io/api/postorder", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=AaB03x" +
          "--AaB03x" +
          "Content-Disposition: file" +
          "Content-Type: png" +
          "Content-Transfer-Encoding: binary" +
          "...data... " +
          "--AaB03x--",
        Accept: "application/json",
        type: "formData",
      },
      body: formData,
    }).then(
      function (res) {
        res.ok === false ? history.push("/") : alert("Qaytadan urinib ko'ring");
        console.log(res);
      },
      function (e) {
        alert("Iltimos qaytadan urinib ko'ring!");
      }
    )
  );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 10px #ccc",
          //   width: "50%",
          margin: "auto 0",
          padding: "25px",
        }}
      >
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 style={{ color: "#007BFF" }}> Buyurtma qoldirish</h2>
              <div className="input-group mb-3 mt-5">
                <input
                  ref={register({ required: true })}
                  name="shifoxona"
                  type="text"
                  class="form-control"
                  placeholder="Shifoxona"
                  aria-label=""
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <div className="input-group mb-3 mt-5">
                <input
                  ref={register({ required: true })}
                  name="phone"
                  type="text"
                  class="form-control"
                  placeholder="Tel.nomer"
                  aria-label=""
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <div className="input-group mb-3 mt-5">
                <input
                  ref={register({ required: true })}
                  name="address"
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  aria-label=""
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <div className="input-group mb-3 mt-5">
                <input
                  ref={register({ required: true })}
                  name="email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label=""
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit(onSubmit)}
              >
                Primary
              </button>
            </form>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "70px",
              }}
            >
              <img
                src={zay_img}
                style={{ width: "320px", height: "320px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Zayavka;
