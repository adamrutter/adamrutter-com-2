import Hero from "../components/Hero"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
        <Hero />
    </header>
  </Layout>
)

export default IndexPage
