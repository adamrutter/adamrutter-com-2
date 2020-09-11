import classNames from "classnames"
import React from "react"
import Section from "./Section"
import styles from "./AboutMe.module.scss"
import SvgDeveloper from "../../svg/developer-activity-amico.inline.svg"
import SvgFast from "../../svg/fast-loading-amico.inline.svg"
import SvgMobile from "../../svg/mobile-apps-amico.inline.svg"
import SvgProgramming from "../../svg/programming-amico.inline.svg"

const AboutMe = () => {
  return (
    <div id="about-me" className={classNames(styles.aboutMe)}>
      <Section image={<SvgDeveloper />} imageAlign="left">
        <h3 className={classNames("h2", "text-primary")}>Hello!</h3>
        <p>
          I’m Adam, Front-end Web Developer and Designer based near Chichester,
          West Sussex.
        </p>
        <p>
          I'm self taught, from the first line of code to modern web frameworks,
          and I've developed a passion for building performant, well designed
          websites.
        </p>
      </Section>
      <Section image={<SvgMobile />} imageAlign="right">
        <h3 className={classNames("h2", "text-primary")}>Mobile first</h3>
        <p>
          I use a{" "}
          <span className={classNames("font-weight-bold")}>mobile-first</span>{" "}
          approach when designing a website. As mobile devices are now the most
          popular way to access the web, I think it’s important to start the
          design and development process focusing on them, and ensure the page
          adapts as the screen gets larger.
        </p>
      </Section>
      <Section image={<SvgFast />} imageAlign="left">
        <h3 className={classNames("h2", "text-primary")}>Fast and perfomant</h3>
        <p>
          I use modern development practices to cut down on complexity and
          dependencies to deliver websites that are{" "}
          <span className={classNames("font-weight-bold")}>
            efficient, responsive and fast
          </span>
          , as a website has to be built from the ground up to be performant if
          it is to be a successful product.
        </p>
      </Section>
      <Section image={<SvgProgramming />} imageAlign="right">
        <h3 className={classNames("h2", "text-primary")}>My experience</h3>
        <p>Some of the technologies I have experience using include:</p>
        <ul>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Hugo</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Hugo</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Hugo</li>
          <li>MongoDB</li>
        </ul>
      </Section>
    </div>
  )
}

export default AboutMe
