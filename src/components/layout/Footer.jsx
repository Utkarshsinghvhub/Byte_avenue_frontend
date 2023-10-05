import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Bite Avenue</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Bite Avenue</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://instagram.com/Bite Avenue">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/utkarsh.rajput000/?next=%2F">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Utkarshsinghvhub">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
