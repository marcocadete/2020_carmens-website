import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import { FaPlay } from "react-icons/fa"

// Styles
import styles from "./videoWithThumbnail.module.scss"

const VideoWithThumbnail = ({ videoSrcURL, videoTitle, ...props }) => {
  const [showVideo, setShowVideo] = useState(false)

  const toggleVideoDisplay = () => {
    setShowVideo(!showVideo)
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "video-img.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className={showVideo ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className={styles.video}>
            <iframe
              className={styles.responsiveIframe}
              src={videoSrcURL}
              title={videoTitle}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
        <button
          onClick={toggleVideoDisplay}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
      <div className={styles.imgContainer}>
        <Img
          className={styles.image}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <div className={styles.playButtonContainer}>
          <button onClick={toggleVideoDisplay} className={styles.playButton}>
            <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
              <div>
                <FaPlay />
              </div>
            </IconContext.Provider>
          </button>
        </div>

        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}
export default VideoWithThumbnail

VideoWithThumbnail.propTypes = {
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
}
