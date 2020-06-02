import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
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
        <div className="cc-mt-10 is-flex is-size-4">
          <div className="cc-mr-10 has-text-link">
            <a href="/">
              <FaFacebook />
            </a>
          </div>
          <div className="cc-mr-10 has-text-danger">
            <a href="/">
              <FaInstagram />
            </a>
          </div>
          <div className="cc-mr-10 has-text-info">
            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="cc-mr-10 has-text-info">
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
