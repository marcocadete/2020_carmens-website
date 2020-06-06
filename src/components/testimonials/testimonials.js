import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

// Styles
import styles from "./testimonials.module.scss"

// Components
import Testimonial from "../testimonial/testimonial"

const Testimonials = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

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
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {listOftestimonialNodes.map(node => (
            <Testimonial
              style={{ transform: "translateX(-0px)" }}
              key={node.id}
              author={node.testimonial.author}
              occupation={node.testimonial.occupation}
              content={node.testimonial.content}
              imageUrl={node.testimonial.image.sourceUrl}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
