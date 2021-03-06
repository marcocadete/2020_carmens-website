import React from "react"
import { BsChatQuote } from "react-icons/bs"
import { IconContext } from "react-icons"
import PropTypes from "prop-types"

// Styles
import styles from "./testimonial.module.scss"

const Testimonial = props => {
  return (
    <div className={styles.container} style={props.style}>
      <figure className={styles.testimonial}>
        <div className={styles.figWrapper}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={props.imageUrl}
              alt={props.author}
            />
            <figcaption className={styles.figCaption}>
              <cite className={styles.author}>{props.author}</cite>
              <cite className={"is-size-7 " + styles.occupation}>
                {props.occupation}
              </cite>
            </figcaption>
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "3em", color: "#323232" }}>
                <BsChatQuote />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <blockquote>{props.content}</blockquote>
      </figure>
    </div>
  )
}

export default Testimonial

Testimonial.protoTypes = {
  author: PropTypes.string,
  occupation: PropTypes.string,
  content: PropTypes.content,
  imageUrl: PropTypes.imageUrl,
}
