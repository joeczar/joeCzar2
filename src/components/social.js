import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { IconContext } from "react-icons"
import styles from "./social.module.css"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedIn
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata.social

  return (
    <div className={styles.container}>
      <IconContext.Provider value={{ className: "socialIcons" }}>
        <a href={social.github} className={styles.links}>
          <FiGithub className={styles.socialIcons} />
        </a>
        <a href={social.linkedIn} className={styles.links}>
          <FiLinkedin className={styles.socialIcons} />
        </a>
        <a href={social.twitter} className={styles.links}>
          <FiTwitter className={styles.socialIcons} />
        </a>
      </IconContext.Provider>
    </div>
  )
}
export default Social
