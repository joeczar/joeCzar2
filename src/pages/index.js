import React from "react"
import SEO from "../components/seo"
import JoeCzar from "../components/joeCzarNeon"
// import { Link, graphql } from "gatsby"
import Social from "../components/social"

import styles from "./index.module.css"

const LandingPage = ({ data, location }) => {
  //  const siteTitle = data.site.siteMetadata.title
  return (
    <div className={styles.homeWrapper}>
      <SEO title="JoeCzar | Developer" />
      <header className={styles.header}>
        <h1>Joe Czarnecki</h1>
        <h2>Developer</h2>
      </header>
      <JoeCzar height="100%" />
      <Social />
    </div>
  )
}
export default LandingPage
