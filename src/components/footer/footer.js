import React from "react"
import { IconContext } from "react-icons"
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa"

import logo from "../../images/footer-logo.png"
import webDevLogo from "../../images/mc-logo.png"

// Styles
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="content">
              <h2 className="is-size-3 has-text-white has-text-weight-semibold">
                Ready to chat?
              </h2>
              <p className="has-text-white">
                Let's bring your idea to life. I work with clients all over the
                world.
              </p>
              <p>
                <a
                  href="mailto:carmencadete1@gmail.com"
                  className="has-text-primary"
                >
                  <FaEnvelope /> carmencadete1@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="column is-4">
            <div className={styles.middleColumn}>
              <div className="content">
                <h2 className="is-size-3 has-text-white has-text-weight-semibold">
                  Connect with me
                </h2>
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
                      <FaYoutube />
                    </a>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <img src={logo} width="112" height="28" alt="logo" />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4 is-offset-4">
            <div className="cc-mt-30">
              Copyright © {new Date().getFullYear()} carmencadete.com. All
              rights reserved
            </div>
          </div>
          <div className="column is-4">
            <div className="cc-mt-25">
              <a href="https://www.marcocadete.com">
                Website developed by{" "}
                <img
                  src={webDevLogo}
                  width="18"
                  height="18"
                  style={{ marginTop: "5px" }}
                  alt="Site developers logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
