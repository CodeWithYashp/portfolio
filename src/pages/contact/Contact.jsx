import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section--title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact--container container grid">
        <div className="contact--data">
          <h3 className="contact--title">Don't Be Shy !</h3>

          <p className="contact--description">
            Feel free to connect with me and explore the exciting world of web
            development! Let's turn your ideas into stunning online realities
          </p>

          <div className="contact--info">
            <div className="info--item">
              <FaEnvelopeOpen className="info--icon" />
              <div>
                <span className="info--title">Mail Me</span>
                <h4 className="info--desc">ypandey.5602@gmail.com</h4>
              </div>
            </div>

            <div className="info--item">
              <FaPhoneSquareAlt className="info--icon" />
              <div>
                <span className="info--title">Call Me</span>
                <h4 className="info--desc">+91 9782527528</h4>
              </div>
            </div>
          </div>

          <div className="contact--socials">
            <a
              href="https://github.com/CodeWithYashp"
              className="contact--social-link"
              target="__blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-sharma-22200b201/"
              className="contact--social-link"
              target="__blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/yash_pandey__/"
              className="contact--social-link"
              target="__blank"
            >
              <FaInstagram />
            </a>

            <a
              href="https://leetcode.com/CodeWithYashp/"
              className="contact--social-link"
              target="__blank"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        <form className="contact--form">
          <div className="form--input-group">
            <div className="form--input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form--control"
              />
            </div>

            <div className="form--input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form--control"
              />
            </div>

            <div className="form--input-div">
              <input
                type="text"
                placeholder="Subject"
                className="form--control"
              />
            </div>
          </div>

          <div className="form--input-div">
            <textarea
              placeholder="Your Message"
              className="form--control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button--icon contact--button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
