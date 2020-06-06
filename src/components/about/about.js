import React from "react"

// Styles
import styles from "./about.module.scss"

// Components
import VideoWithThumbnail from "../videoWithThumbnail/videoWithThumbnail"

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className={styles.info}>
              <div className="content">
                <h2 className="has-text-grey-dark">About Me</h2>
                <h3 className="has-text-grey-dark">
                  Why hire me for your next project?
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <VideoWithThumbnail
              videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
              videoTitle="Official Music Video on YouTube"
              videoImage="profile-thumbnail.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
