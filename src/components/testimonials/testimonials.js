import React from "react"
import { FaTag } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import styles from "./testimonials.module.scss"

// Components
import Testimonial from "../testimonial/testimonial"

const Testimonials = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressData {
        testimonials {
          nodes {
            testimonial {
              occupation
              content
              author
              image {
                sourceUrl
              }
            }
            id
          }
        }
      }
    }
  `)
  const listOftestimonialNodes = data.wordpressData.testimonials.nodes

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h2 className="has-text-primary">Happy clients are saying...</h2>
              {/* <h3 className="has-text-white">Happy clients are saying...</h3> */}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className={styles.testimonialContainer}>
              {listOftestimonialNodes.map(node => (
                <Testimonial
                  key={node.id}
                  author={node.testimonial.author}
                  occupation={node.testimonial.occupation}
                  content={node.testimonial.content}
                  imageUrl={node.testimonial.image.sourceUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
