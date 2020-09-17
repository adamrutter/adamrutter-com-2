import AboutMe from "../components/AboutMe"
import classNames from "classnames"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import MyWork from "../components/MyWork"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <Hero />
    </header>
    <main className={classNames("px-2", "px-md-0")}>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="my-work">
        <MyWork />
      </Section>
    </main>
  </Layout>
)

export default IndexPage
