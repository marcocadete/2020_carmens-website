import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

// Styles
import styles from "./portfolioEntry.module.scss"

const PortfolioEntry = props => {
  return (
    <article className={styles.article}>
      <Img className={styles.image} fixed={props.image} />
      <div className={"content " + styles.info}>
        <h2 className="is-size-6">
          <Link to={`/portfolio/${props.slug}`}>{props.title}</Link>
        </h2>
        <div
          className="is-size-7"
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        />
        <Link className={styles.viewBtn} to={`/portfolio/${props.slug}`}>
          View Portfolio
        </Link>
      </div>
      <div className={styles.overlay}></div>

      {/* <BackgroundImage className={styles.image} fixed={props.image}>
        <div className={"content " + styles.info}>
          <h2>
            <Link to={`/portfolio/${props.slug}`}>{props.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          <Link className={styles.viewBtn} to={`/portfolio/${props.slug}`}>
            View Portfolio
          </Link>
        </div>
        <div className={styles.overlay}></div>
      </BackgroundImage> */}
    </article>
  )
}

export default PortfolioEntry

PortfolioEntry.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.string,
}
