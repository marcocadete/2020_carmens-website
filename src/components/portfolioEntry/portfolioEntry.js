import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

// Styles
import styles from "./portfolioEntry.module.scss"

const PortfolioEntry = props => {
  return (
    <div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
      <article className={styles.article}>
        <BackgroundImage className={styles.image} fluid={props.image}>
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
        </BackgroundImage>
      </article>
    </div>
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
