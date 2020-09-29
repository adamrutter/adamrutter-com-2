import classNames from "classnames"
import Media from "../Media"
import React from "react"
import styles from "./AboutMe.module.scss"
import SvgDeveloper from "../../svg/www-amico.inline.svg"
import SvgFast from "../../svg/fast-loading-amico.inline.svg"
import SvgMobile from "../../svg/mobile-apps-amico.inline.svg"
import SvgProgramming from "../../svg/programming-amico.inline.svg"

const AboutMe = () => {
  return (
    <div className={classNames(styles.aboutMe)}>
      <Media image={<SvgDeveloper />} imageAlign="left">
        <h2>Hello!</h2>
        <p>
          I’m Adam, Front-end Web Developer and Designer based near Chichester,
          West Sussex.
        </p>
        <p>
          I'm self taught, from the first line of code to modern web frameworks,
          and I've developed a passion for building performant, well designed
          websites.
        </p>
      </Media>
      <Media image={<SvgMobile />} imageAlign="right">
        <h2>Mobile first</h2>
        <p>
          I use a{" "}
          <span className={classNames("font-weight-bold")}>mobile-first</span>{" "}
          approach when designing a website. As mobile devices are now the most
          popular way to access the web, I think it’s important to start the
          design and development process focusing on them, and ensure the page
          adapts as the screen gets larger.
        </p>
      </Media>
      <Media image={<SvgFast />} imageAlign="left">
        <h2>Fast and perfomant</h2>
        <p>
          I use modern development practices to cut down on complexity and
          dependencies to deliver websites that are{" "}
          <span className={classNames("font-weight-bold")}>
            efficient, responsive and fast
          </span>
          , as a website has to be built from the ground up to be performant if
          it is to be a successful product.
        </p>
      </Media>
      <Media image={<SvgProgramming />} imageAlign="right">
        <h2>My experience</h2>
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
      </Media>
    </div>
  )
}

export default AboutMe
