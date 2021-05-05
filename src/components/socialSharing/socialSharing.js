import React from "react"
import { IconContext } from "react-icons"
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"

// Styles
import styles from "./socialSharing.module.scss"

const SocialSharing = () => (
  // Fixed at the middle of side

  <div className={styles.social}>
    <IconContext.Provider value={{ size: "1.3em", className: styles.icons }}>
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
    </IconContext.Provider>
  </div>
)

export default SocialSharing
