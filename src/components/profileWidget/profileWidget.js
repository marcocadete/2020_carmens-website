import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaYoutube,
} from "react-icons/fa"
// Styles
import styles from "./profileWidget.module.scss"

// Components
import Avatar from "../avatar/avatar"

const ProfileWidget = () => {
  return (
    <div className={styles.profile}>
      <div>
        <Avatar />
        <h2 className="cc-mt-10 has-text-weight-semibold is-size-4">
          Carmen Cadete
        </h2>
        <p className="cc-mt-5">
          I'm a freelance graphic designer based in Germany.
        </p>
        <div className="cc-mt-15 is-flex is-size-4">
          <div className="cc-mr-10 cc-color-behance">
            <a href="https://www.behance.net/carmencadete1">
              <FaBehance />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-facebook">
            <a href="https://www.facebook.com/carmencadetedesign">
              <FaFacebook />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-instagram">
            <a href="https://www.instagram.com/carmen.cadete">
              <FaInstagram />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-linkedin">
            <a href="https://www.linkedin.com/in/carmen-cadete">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-twitter">
            <a href="https://twitter.com/CarmzyParmzy">
              <FaTwitter />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-youtube">
            <a href="https://www.youtube.com/channel/UCY5ItuO-G3VAij6uk86gjKg">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileWidget
