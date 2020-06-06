import React from "react"
import { IconContext } from "react-icons"
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa"

// Styles
import styles from "./socialSharing.module.scss"

const SocialSharing = () => (
  // Fixed at the middle of side

  <div className={styles.social}>
    <IconContext.Provider value={{ size: "1.3em", className: styles.icons }}>
      <a href="http://localhost:8000/">
        <FaLinkedin />
      </a>
      <a href="http://localhost:8000/">
        <FaTwitter />
      </a>
      <a href="http://localhost:8000/">
        <FaFacebook />
      </a>
      <a href="http://localhost:8000/">
        <FaBehance />
      </a>
      <a href="http://localhost:8000/">
        <FaInstagram />
      </a>
    </IconContext.Provider>
  </div>
)

export default SocialSharing
