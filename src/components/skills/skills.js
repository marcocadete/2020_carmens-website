import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import styles from "./skills.module.scss"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressData {
        skills(where: { orderby: { field: SLUG, order: ASC } }) {
          nodes {
            skill {
              name
              rating
              icon {
                sourceUrl
              }
            }
            id
          }
        }
      }
    }
  `)

  const listOfSkillNodes = data.wordpressData.skills.nodes
  return (
    <ul className={styles.skills}>
      {listOfSkillNodes.map(node => (
        <li key={node.id}>
          <img
            style={{ display: "inline-block", width: "16px", height: "16px" }}
            className="cc-mr-5"
            src={node.skill.icon.sourceUrl}
            alt={node.skill.name}
          />
          <h6
            style={{ display: "inline-block" }}
            className="is-size-6 has-text-weight-light"
          >
            {node.skill.name}
          </h6>
          <progress
            style={{ maxWidth: "80%" }}
            className="progress is-small"
            value={node.skill.rating}
            max="100"
          />
        </li>
      ))}
    </ul>
  )
}

export default Skills
