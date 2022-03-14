import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <header className='header'>
      <a href="#" className="logo">
        <i className='fas fa-shopping-basket'></i> Wow shop
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#speciality">Offer</a>
        <a href="#home">products</a>
        <a href="#home">Wishlist</a>
        <a href="#home">Cart</a>
        <a href="#home">Login</a>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn">
          <a href="#"></a>
        </div>
        <div className="fas fa-user" id="login-btn">
          <a href="#"></a>
        </div>
      </div>
    </header>

  

    <section className="home" id="home">
      <div className="content">
        <h3>Food made with <span>love</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          libero nostrum veniam facere tempore nisi.
        </p>
        <a href="#" className="btn">shop now</a>
      </div>
    </section>



    
     <h1 className="heading"><span>Categories</span></h1>
     <section className='category-section'>
      <div class="card category-card category-card1">
        <h3 class="card-title category-title">Italian </h3>
      </div>
      <div class="card category-card category-card2">
        <h3 class="card-title category-title">Chineese </h3>
      </div>
      <div class="card category-card category-card3">
        <h3 class="card-title category-title">Spanish </h3>
      </div>
      <div class="card category-card category-card4">
        <h3 class="card-title category-title">North-Indian </h3>
      </div>
      <div class="card category-card category-card5">
        <h3 class="card-title category-title">South-Indian </h3>
      </div>
    </section>


    <section className="products" id="products">
      
      <Link to='/products'><p className="btn product-btn">View All</p></Link>
    </section>

    
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="https://twitter.com/MuskanChhatras1">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com/MuskanChhatrasal">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/muskan-chhatrasal/">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
        </div>
      </div>

      <div className="credit">by <span>Muskan</span> | all rights reserved</div>
    </section>

    </div>
  )
}

export default Home