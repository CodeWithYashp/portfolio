import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home--img" />

      <div className="home--content">
        <div className="home--data">
          <h1 className="home--title">
            <span>I'm Yash Sharma.</span>
            <br />
            Web Designer
          </h1>

          <p className="home--description">
            Crafting digital experiences that turn 'Hello World' into 'Hello
            WOW' – because I don't just code websites, I architect captivating
            online realms.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button--icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color--block"></div>
    </section>
  );
};

export default Home;
