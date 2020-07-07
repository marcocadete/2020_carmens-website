import React from "react"
import { IconContext } from "react-icons"
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa"

import logo from "../../images/footer-logo.png"

// Styles
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <img src={logo} width="112" height="28" alt="logo" />
          </div>
          <div className="column is-4">
            <div className="content">
              <h2 className="is-size-1 has-text-white has-text-weight-semibold">
                Let's Chat?
              </h2>
            </div>
          </div>
          <div className="column is-4">
            <a
              href="mailto:carmen@cadete.me"
              className="button is-rounded is-outlined is-primary is-large"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <div className="cc-mt-30">
              <div className={styles.social}>
                <IconContext.Provider
                  value={{ size: "1.3em", className: styles.icons }}
                >
                  <a href="https://www.linkedin.com/in/carmen-cadete">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/CarmzyParmzy">
                    <FaTwitter />
                  </a>
                  <a href="https://www.facebook.com/carmencadetedesign">
                    <FaFacebook />
                  </a>
                  <a href="https://www.behance.net/carmencadete1">
                    <FaBehance />
                  </a>
                  <a href="https://www.instagram.com/carmen.cadete">
                    <FaInstagram />
                  </a>
                  <a href="https://www.youtube.com/channel/UCY5ItuO-G3VAij6uk86gjKg">
                    <FaYoutube/>
                  </a>
                </IconContext.Provider>
              </div>
              Copyright © {new Date().getFullYear()} carmencadete.com. All
              rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
