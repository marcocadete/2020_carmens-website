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
      <a>
        <FaLinkedin />
      </a>
      <a>
        <FaTwitter />
      </a>
      <a>
        <FaFacebook />
      </a>
      <a>
        <FaBehance />
      </a>
      <a>
        <FaInstagram />
      </a>
    </IconContext.Provider>
  </div>
)

export default SocialSharing
