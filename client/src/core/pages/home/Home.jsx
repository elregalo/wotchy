import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import BannerImage from "../../assets/images/banner/banner.png";

const Home = () => {
  return (
    <main className="main">
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <img src={BannerImage} alt="" className="home__img" />
          </div>

          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <SiFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <SiInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <SiTwitter />
            </a>
          </div>

          <div className="home__data">
            <h1 className="home__title">
              Guess Genesis <br /> Quartz Blue Dial
            </h1>
            <p className="home__description">
              <li>Stainless Steel</li> <br /> <li>Water Resistant</li>
            </p>
            <span className="home__price">R2 500</span>

            <div className="home__btns">
              <Link to="/shop" className="button button--gray button--small">
                Shop
              </Link>
              <Button className="button home__button">Add to cart</Button>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default Home;
