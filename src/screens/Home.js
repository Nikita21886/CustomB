import React from "react";
import Navbar from '../components/Navbar'

export default function Home(){
    return(
        <div>
            <div><Navbar/></div>
            <div>
            <section class="home" id="home">
        <div class="swiper home-slider">
            <div class="swiper-wrapper wrapper">
                <div class="swiper-slide slide">
                    <div class="content">
                        <span>Our popular dishes</span>
                        <h3>Thali</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quas dignissimos eligendi
                            modi, blanditiis nesciunt id, esse officiis aliquam accusantium suscipit veritatis accusamus
                            autem earum! Quam sunt quis dicta repellat.</p>
                            <a href="login.html" class="btn add-to-cart">Login</a>
                            <a href="Signup.js" class="btn add-to-cart">Signup</a>
                        <a href="#" class="btn add-to-cart">Order Now</a>


                    </div>
                    <div class="image">
                        <img src="images/home1.png" alt=""></img>
                    </div>

                </div>

                <div class="swiper-slide slide">
                    <div class="content">
                        <span>Our dishes</span>
                        <h3>Chole Rice</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quas dignissimos eligendi
                            modi, blanditiis nesciunt id, esse officiis aliquam accusantium suscipit veritatis accusamus
                            autem earum! Quam sunt quis dicta repellat.</p>
                            <a href="login.html" class="btn add-to-cart">Login</a>
                        <a href="#" class="btn add-to-cart">Order Now</a>
                        

                    </div>
                    <div class="image">
                        <img src="images/home2.png" alt=""></img>
                    </div>

                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    </section>
            </div>
            

    <section class="about" id="about">
        <h3 class="sub-heading">About Us</h3>
        <h1 class="heading">Why Choose Us</h1>

        <div class="row">

            <div class="image">
                <img src="images/dish1.png" alt=""></img>

            </div>

            <div class="content">
                <h3>best food around</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque, numquam laboriosam molestias
                    quia ut autem, eos voluptatum sunt facere laborum! Fuga numquam rerum quisquam, veritatis cupiditate
                    quae nemo pariatur.</p>
                <div class="icon-container">
                    <div class="icons">
                        <i class="fas fa-shipping-fast"></i>
                        <span>
                            free delovery
                        </span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-dollar-sign"></i>
                        <span>
                            easy payment
                        </span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-headset"></i>
                        <span>
                            24/7 services
                        </span>
                    </div>
                </div>
                <a href="#" class="btn add-to-cart">learn more</a>
            </div>

        </div>
    </section>

    <section class="menu" id="menu">
        <h3 class="sub-heading">our menu</h3>
        <h1 class="heading">today's special</h1>

        <div class="box-container">
            <div class="box">
                <div class="image">
                    <img src="images/dal.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="images/home2.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="images/pan2.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="images/friedrice.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="images/gobiman.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="images/idle.png" alt=""></img>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>delicious food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur cum labore, recusandae
                        possimus corrupti fugiat alias autem. Minima ea hic sit. Quas ab ullam laborum omnis minima
                        nostrum ipsam.</p>
                    <a href="#" class="btn add-to-cart">add to cart</a>
                    <span class="price">Rs300.00</span>
                </div>
            </div>
        </div>
    </section>

    <section class="review" id="review">
        <h3 class="sub-heading">Customer's review</h3>
        <h1 class="heading">What they say</h1>

        <div class="review-slide">
            <div class="wrapper">
                <div class="slide">
                    <i class="fas fa-quote-right"></i>
                    <div class="user">
                        <img src="images/nikita.JPG" alt=""></img>
                        <div class="user-info">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>

                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis illum quasi accusamus
                        error similique porro sint molestiae odit minima quia exercitationem obcaecati aut, debitis nemo
                        earum assumenda, sequi ad!</p>
                </div>
            </div>
        </div>

    </section>

    <section class="order" id="order">

        <h3 class="sub-heading">Order now</h3>
        <h1 class="heading">free and fast</h1>

        <form action="">

            <div class="innerbox">
                <div class="input">
                    <span> Your name</span>
                    <input type="text" placeholder="enter your name"></input>
                </div>
                <div class="input">
                    <span> Your number</span>
                    <input type="number" placeholder="enter your number"></input>
                </div>
            </div>
            <div class="innerbox">
                <div class="input">
                    <span> Your order</span>
                    <input type="text" placeholder="enter food name"></input>
                </div>
                <div class="input">
                    <span> additional food item</span>
                    <input type="number" placeholder="extra with food"></input>
                </div>
            </div>
            <div class="innerbox">
                <div class="input">
                    <span> how much</span>
                    <input type="number" placeholder="how many orders"></input>
                </div>
                <div class="input">
                    <span> date and time</span>
                    <input type="datetime-local"></input>
                </div>
            </div>
            <div class="innerbox">
                <div class="input">
                    <span> Your address</span>
                    <textarea name="" placeholder="enter your add" id="" cols="30" rows="10"></textarea>

                </div>
                <div class="input">
                    <span> Your message</span>
                    <textarea name="" placeholder="enter your msg" id cols="30" rows="10"></textarea>
                </div>
            </div>

            <input type="submit" value="order now" class="btn add-to-cart"></input>

        </form>

    </section>
        </div>
        
    )
}