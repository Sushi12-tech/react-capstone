import React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  

  const handleSignUp = () => {
    let isErrors = false;
    if (formValues.name.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        name: "Name is Required",
      }));
      isErrors = true;
    }
    else{
      setErrors((prev)=> ({
        ...prev, name: null
      }))
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        username: "UserName is Required",
      }));
      isErrors = true;
    }
     else{
      setErrors((prev)=> ({
        ...prev, username: null
      }))
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is Required",
      }));
      isErrors =  true;
    }else if(!formValues.email.includes("@")){
      setErrors((prev)=> ({
        ...prev,
        email:"Invalid Email format. Must include '@'"
      }));
      isErrors =  true;
    }
     else{
      setErrors((prev)=> ({
        ...prev, email: null
      }))
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        mobile: "Mobile is Required",
      }));
      isErrors = true;
    }
     else{
      setErrors((prev)=> ({
        ...prev, mobile: null
      }))
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and condition",
      }));
      isErrors = true;
    }
     else{
      setErrors((prev)=> ({
        ...prev, checkbox: null
      }))
    }
    if (!isErrors) {
      localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/movies");
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <img
          src="./assets/landing_image.png"
          alt="Landing_page"
          style={{
            position: "relative",
            width: "50%",
          }}
        />
        <p
          style={{
            position: "absolute",
            bottom: "165px",
            left: "30px",
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "900",
            fontSize: "55px",
            width: "695px",
          }}
        >
          Discover new things on Superapp
        </p>
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 15,
              width: "50%",
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Single Day",
                color: "#72DB73",
                fontSize: "60px",
                fontWeight: "400",
              }}
            >
              Super app
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "DM Sans",
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              Create your new account
            </p>

            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input-field"
              value={formValues.name}
              onChange={handleChange} //we write value for 'two-way binding' b/w react and browser
            />
            {errors.name ? (
              <p style={{ color: "red", fontFamily: "Roboto" }}>
                {errors.name}
              </p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="UserName"
              name="username"
              className="input-field"
              value={formValues.username}
              onChange={handleChange}
            />
            {errors.username ? (
              <p style={{ color: "red", fontFamily: "Roboto" }}>{errors.username}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input-field"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <p style={{ color: "red", fontFamily: "Roboto" }}>{errors.email}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              className="input-field"
              value={formValues.mobile}
              onChange={handleChange}
            />
            {errors.mobile ? (
              <p style={{ color: "red", fontFamily: "Roboto" }}>{errors.mobile}</p>
            ) : (
              <></>
            )}
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value={formValues.checkbox}
                onChange={handleChange}
              />
              <span style={{ width: "10px" }}></span>
              <label
                htmlFor="checkbox"
                style={{
                  color: "#7C7C7C",
                  fontFamily: "DM Sans",
                }}
              >
                Share my registration data with Superapp
              </label>
            </div>
            {errors.checkbox ? (
              <p style={{ color: "red", fontFamily: "Roboto" }}>{errors.checkbox}</p>
            ) : (
              <></>
            )}
            <button
              style={{
                height: "45px",
                borderRadius: "28px",
                backgroundColor: "#72DB73",
                fontFamily: "Roboto",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "25px",
                border: "none",
              }}
              onClick={handleSignUp}
            >
              SIGN UP
            </button>
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "15px",
                color: "#7C7C7C",
              }}
            >
              By clicking on Sign up. you agree to Superapp{" "}
              <span style={{ color: "#72DB73" }}>
                Terms and Conditions of Use
              </span>
            </p>
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "15px",
                color: "#7C7C7C",
              }}
            >
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span style={{ color: "#72DB73" }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
