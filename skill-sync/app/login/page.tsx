"use client";
import axios from "axios";
import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function LoginPage() {
  const [togglePassword, setTogglePass] = useState("password");

  // Handling form data
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      employeeId: formData.get("employeeId"),
      password: formData.get("password"),
    };

    try {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials:true
      });
      console.log(result.data);
    } catch (err) {
      console.error("Error in sending login form", err);
    }
  };

  //   handling show password or not
  const handleToggle = () => {
    if (togglePassword === "password") setTogglePass("text");
    else setTogglePass("password");
  };

  return (
    <form className={style.formContainer} onSubmit={handleForm}>
      <h3>Login Page</h3>
      <label>Email id</label>
      <input type="text" placeholder="enter your email id" name="email"></input>
      <label>Employee ID</label>
      <input
        type="text"
        placeholder="enter employee id"
        name="employeeId"
      ></input>
      <label>Password</label>
      <input
        type={togglePassword}
        placeholder="enter your password"
        name="password"
      ></input>
      <div className={style.togglePassword}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="checkbox" onClick={handleToggle}></input>
          <span>show password</span>
        </div>
        <Link href="">Forgot password ?</Link>
      </div>
      <button type="submit">submit</button>

      <div className={style.orContainer}>
        <span></span>
        <p>or</p>
        <span></span>
      </div>

      <button className={style.GoogleAccount} onClick={() => window.location.href = "http://localhost:5001/auth/google"} >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
        />
        Continue with Google
      </button>
    </form>
  );
}
