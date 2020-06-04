import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>
        <div className="cc-mt-15 is-flex is-size-4">
          <div className="cc-mr-10 cc-color-behance">
            <a href="/">
              <FaBehance />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-facebook">
            <a href="/">
              <FaFacebook />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-instagram">
            <a href="/">
              <FaInstagram />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-linkedin">
            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="cc-mr-10 cc-color-twitter">
            <a href="/">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileWidget
