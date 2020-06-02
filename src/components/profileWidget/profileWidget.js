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
        <h2 className="cc-mt-5 has-text-weight-semibold">Carmen Cadete</h2>
        <p className="cc-mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>
        <div className="cc-mt-10 is-flex is-size-6">
          <div className="cc-mr-10 has-text-link">
            <FaFacebook />
          </div>
          <div className="cc-mr-10 has-text-danger">
            <FaInstagram />
          </div>
          <div className="cc-mr-10 has-text-info">
            <FaLinkedinIn />
          </div>
          <div className="cc-mr-10 has-text-info">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileWidget
