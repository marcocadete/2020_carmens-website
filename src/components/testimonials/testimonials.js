import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

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
              order
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
  const [profileImages, setProfileImages] = useState([])

  useEffect(() => {
    if (data) {
      const listOftestimonialNodes = data.wordpressData.testimonials.nodes

      // Function to compare the testimonials order number for priority.
      const compare = (a, b) => {
        if (a.testimonial.order < b.testimonial.order) {
          return -1
        }
        if (a.testimonial.order > b.testimonial.order) {
          return 1
        }
        return 0
      }

      const testimonialsSortedByOrder = listOftestimonialNodes.sort(compare)

      setProfileImages(testimonialsSortedByOrder)
    }
  }, [data])

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h2 className="has-text-primary">Testimonials</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {profileImages.map(node => (
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
