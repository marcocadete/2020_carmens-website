import React from "react"

// Styles
import styles from "./about.module.scss"

// Components
import VideoWithThumbnail from "../videoWithThumbnail/videoWithThumbnail"
import Skills from "../skills/skills"
import Languages from "../languages/languages"
import ContentNav from "../contentNav/contentNav"
import List from "../list/list"
import CallToAction from "../cta/cta"

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className={styles.info}>
              <div className="content">
                <h2 className="has-text-grey-dark">About Me</h2>
                <p>
                  I’m a self-taught graphic designer based in Germany. My
                  passion for Graphic design started 8 years ago when I
                  discovered Photoshop.
                </p>
                <p>
                  I have gained experience working in an in-house design studio,
                  a graphic design, and print studio, as a marketing coordinator
                  for an automotive company, as well as designing on a freelance
                  basis.
                </p>
                <p>
                  I maintain a healthy balance between functionality and form,
                  and I would consider my design style as minimalistic. My goal
                  is to guide an audience to act through communicating strategic
                  design solutions.
                </p>
                <div className={styles.textToHide}>
                  <p>
                    Understanding all the pain points of the project and
                    collaborating every step of the way is an important part of
                    my process.
                  </p>
                  <p>
                    I enjoy keeping up with the latest design trends and love
                    improving my skills in my free time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className={styles.video}>
              <VideoWithThumbnail
                videoSrcURL="https://www.youtube.com/embed/0Q68a65tjhI"
                videoTitle="Hi, I'm Carmen Cadete. 1 minute introduction."
              />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <div className={styles.textToShow}>
              <div className="content">
                <p>
                  Understanding all the pain points of the project and
                  collaborating every step of the way is an important part of my
                  process. I enjoy keeping up with the latest design trends and
                  love improving my skills in my free time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <div className={"content " + styles.meta}>
              <ContentNav
                menu={["Technical Skills", "Design Skills", "Languages"]}
              >
                <Skills />
                <List
                  listItems={[
                    "Graphic Design",
                    "Basic video editing",
                    "Website Design",
                    "Logo Design & branding",
                    "Printed & digital media",
                    "Image manipulation",
                    "Social media content management",
                  ]}
                />
                <Languages />
              </ContentNav>
            </div>
          </div>
          <div className="column is-6">
            <CallToAction href="mailto:carmencadete1@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
