import React from "react"
import PropTypes from "prop-types"

// Styles
import styles from "./video.module.scss"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={styles.video}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video

Video.propTypes = {
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
}
