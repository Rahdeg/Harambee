import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const contact = () => {
  return (
    <div className="contact-wrapper">
      <div>
        <h1>
          Have some questions?
          <br />
          get in touch with us today.
        </h1>
        <p>
          Thank you for your interest in our services. Please fill out the form
          or email us at 
          <a href="mailto:harambee@gmail.com"> harambee@gmail.com</a> and we will
          get back to you promptly.
        </p>

        <div className="location-wrapper">

          <div className="location" >
            <FontAwesomeIcon icon={faLocation} size="2x" ></FontAwesomeIcon>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://maps.google.com/?q=Block XVI 3 & 4 Victoria Island Oniru Estate, Eti-Osa 101241, Lagos">
              Block XVI 3 & 4 Victoria Island Oniru Estate, Eti-Osa 101241, Lagos
            </a>
          </div>

          <div className="location">
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"></FontAwesomeIcon>
            <a href="tel:09137285469">+2349137285469</a>
          </div>
          
          <div className="location">
            <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
            <a href="mailto:harambee@gmail.com">harambee@gmail.com</a>
          </div>
        </div>

      </div>

      <div>
        <div>
          <div className="harambee">harambee</div>
        </div>
        <form>
          <input className="name" type="text" placeholder="fullname" />
          <br />
          <input className="phone" type="text" placeholder="phone no." />
          <br />
          <input className="email" type="text" placeholder="email" />
          <br />
          <textarea
            className="message"
            rows="5"
            cols="40"
            placeholder="Message"
          />

          <button type="submit">Submit</button>
        </form>

        <div className="privacy">
          Your privacy is our top priority. Customer information shall not be
          sold, shared or traded.
        </div>
      </div>

      <div>
        <div>
          <p>If you were pleased with our services. kindly like and</p>
          <h3>Follow us on:</h3>
          <a href="#"><FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="3x"></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon></a>
        </div>
      </div>
    </div>
  );
};

export default contact;
