import { Col, Row } from "react-bootstrap"
import { Person } from "react-bootstrap-icons"
import classNames from "classnames"
import Divider from "../Divider"
import React from "react"
import styles from "./AboutMe.module.scss"
import SvgInnovation from "../../svg/innovation.inline.svg"
import SvgUserInterfaceFlatline from "../../svg/user_interface_flatline.inline.svg"

const AboutMe = () => {
  return (
    <div className={classNames(styles.aboutMe)}>
      <Row>
        <Col>
          <h2
            className={classNames("text-center", "text-primary")}
            id="about-me"
          >
            About Me
          </h2>
          <Divider icon={<Person />} />
        </Col>
      </Row>
      <Row className={classNames("mt-5", "py-3")}>
        <Col md={9}>
          <h3 className={classNames("h4", "text-primary")}>Who I Am</h3>
          <p>
            Hello! I’m Adam, Front-end Web Developer and Designer based near
            Chichester, West Sussex.
          </p>
          <p>
            I'm self taught, from the first line of code to modern web
            frameworks, and I've developed a passion for building performant,
            well designed websites.
          </p>
        </Col>
        <Col
          className={classNames(
            "align-items-start",
            "d-flex",
            "justify-content-center",
            "mb-5",
            "mt-4",
            styles.imageCol
          )}
          md={3}
        >
          <SvgUserInterfaceFlatline
            className={classNames(styles.image, styles.top)}
          />
        </Col>
      </Row>
      <Row className={classNames("mt-4", "pt-3", "py-md-3")}>
        <Col>
          <h3 className={classNames("h4", "text-primary")}>What I Do</h3>
          <p>
            I use a{" "}
            <span className={classNames("font-weight-bold")}>mobile-first</span>{" "}
            approach when designing a website. As mobile devices are now the
            most popular way to access the web, I think it’s important to start
            the design and development process focusing on them, and ensure the
            page adapts as the screen gets larger.
          </p>
          <p>
            I also use modern development practices to cut down on complexity
            and dependencies to deliver websites that are{" "}
            <span className={classNames("font-weight-bold")}>
              efficient, responsive and fast
            </span>
            , as a website has to be built from the ground up to be performant
            if it is to be a successful product.
          </p>
        </Col>
      </Row>
      <Row className={classNames("mt-md-4", "pb-3", "py-md-3")}>
        <Col
          className={classNames(
            "align-items-start",
            "d-flex",
            "justify-content-center",
            "mb-5",
            "mt-4",
            "my-md-4",
            styles.imageCol
          )}
          md={3}
        >
          <SvgInnovation
            className={classNames("mb-5", styles.image, styles.bottom)}
          />
        </Col>
        <Col md={9}>
          <h3 className={classNames("h4", "text-primary")}>How I Do It</h3>
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
          <p>
            Other technologies I've used but have less experience with include:
          </p>
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
        </Col>
      </Row>
    </div>
  )
}

export default AboutMe
