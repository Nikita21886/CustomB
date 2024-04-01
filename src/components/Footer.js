import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>locations</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">Nepal</a>
                <a href="#">France</a>
                <a href="#">Canada</a>
            </div>

            <div class="box">
                <h3>Quick links</h3>
                <a class="active" href="#home">Home</a>
                <a href="#dishes">Dishes</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#order">Order</a>
            </div>

            <div class="box">
                <h3>contact info</h3>
                <a href="#">123-456-7890</a>
                <a href="#">999-888-4321</a>
                <a href="#">xyz@gmail.com</a>
                <a href="#">bcactis@gmail.com</a>
                <a href="#">karnal, haryana ,india</a>
            </div>

            <div class="box">
                <h3>Follow us</h3>
                <a href="#">youtube</a>
                <a href="#">Facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
            </div>
        </div>

        <div class="credit"> copyright @ 2024 by <span>custombite</span></div>
    </section>

            
        </div>)}