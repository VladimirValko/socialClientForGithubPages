import React from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/slices/AuthSlice";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { ErrorMessage } from "@hookform/error-message";

type ValueType = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ValueType) => {
    const data = await dispatch(fetchRegister(values));
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      navigate("/", { replace: true });
    } else {
      console.log("Somthng goes wrong");
      alert("Your data is invalid, try again");
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h2 className="registerLogo">Socialism</h2>
          <p className="registerDescription">
            Connect with friends and the world around you on Socialism
          </p>
        </div>
        <div className="registerRight">
          <form className="registerBox">
            <input
              placeholder={`${
                errors?.username ? errors?.username?.message : "User Name"
              }`}
              className="registerInput"
              type="text"
              {...register("username", { required: "User name is required" })}
            />
            <input
              placeholder={`${
                errors?.email ? errors?.email?.message : "User Name"
              }`}
              className="registerInput"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email && <p className="invalid">Your email is invalid </p>}
            <input
              placeholder={`${
                errors?.password ? errors?.password?.message : "User Name"
              }`}
              className="registerInput"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            <button className="registerButton" onClick={handleSubmit(onSubmit)}>
              Sign Up
            </button>
            <button className="registerButton">
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
