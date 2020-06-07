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
      <h4 className="cc-mb-30 cc-mt-30">Skills</h4>
      {listOfSkillNodes.map(node => (
        <li key={node.id}>
          <h6 className="is-size-6 has-text-weight-light">{node.skill.name}</h6>
          <progress
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
