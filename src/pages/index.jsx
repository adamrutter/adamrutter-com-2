import AboutMe from "../components/AboutMe"
import classNames from "classnames"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import LetsTalk from "../components/LetsTalk"
import MyWork from "../components/MyWork"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Adam Rutter" />
    <header>
      <Hero />
    </header>
    <main className={classNames("mb-5", "px-2", "px-md-0")}>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="my-work">
        <MyWork />
      </Section>
      <Section id="lets-talk">
        <LetsTalk />
      </Section>
    </main>
  </Layout>
)

export default IndexPage
