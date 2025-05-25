"use client";
import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function LoginPage() {
  const [togglePassword, setTogglePass] = useState("password");


//   handling show password or not
const handleToggle = () => {
    if(togglePassword === 'password')  setTogglePass('text');
    else setTogglePass('password');
}

  return (
    <form className={style.formContainer}>
      <h3>Login Page</h3>
      <label>Email id</label>
      <input type="text" placeholder="enter your email id"></input>
      <label>Employee ID</label>
      <input type="text" placeholder="enter employee id"></input>
      <label>Password</label>
      <input type={togglePassword} placeholder="enter your password"></input>
      <div className={style.togglePassword}>
        <div style={{ display: 'flex' ,justifyContent:'center',alignItems:'center'}}>
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

      <button className={style.GoogleAccount}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
        />
        Continue with Google
      </button>
    </form>
  );
}
