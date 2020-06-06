import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import styles from "./services.module.scss"

// Components
import Service from "../service/service"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressData {
        services(first: 3, where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            service {
              description
              icon
              name
            }
            id
          }
        }
      }
    }
  `)
  const listOfServices = data.wordpressData.services.nodes

  return (
    <section className={styles.services}>
      <div className={"container " + styles.container}>
        <div className="columns">
          {listOfServices.map(service => (
            <Service
              key={service.id}
              title={service.service.name}
              iconClass={service.service.icon}
            >
              {service.service.description}
            </Service>
          ))}
        </div>
      </div>
      <div className={styles.topColor}></div>
      <div className={styles.bottomColor}></div>
    </section>
  )
}

export default Services
