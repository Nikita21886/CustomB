import React from "react"
import {Link} from "react-router-dom"
export default function Login(){
    return(
        <div>

<form id="loginForm" class="form">
      <h2>Login</h2>
      <input type="email" id="loginEmail" placeholder="Email" required></input>
      <input type="password" id="loginPassword" placeholder="Password" required></input>
      <button type="submit">Login</button>
    </form>
    <div id="forgotPassword" class="forgot-password">
      <a href="#" onclick="showForgotPasswordForm()">Forgot Password?</a>
    </div>
    <form id="forgotPasswordForm" class="form" style="display: none;">
      
      <input type="email" id="forgotEmail" placeholder="Email" required></input>
      <button type="submit">Submit</button>
    </form>
    </div>


    )}
    