import { Container } from "react-bootstrap"
import classNames from "classnames"
import React from "react"
import styles from "./Hero.module.scss"
import Divider from "../../svg/section-divider.inline.svg"

const Hero = () => {
  return (
    <Container
      fluid
      className={classNames("bg-secondary", styles.hero, "text-light", "p-0")}
    >
      <div className={classNames(styles.heading)}>
        <h1 className={classNames("text-uppercase", "text-white")}>
          Adam Rutter
        </h1>
        <p className={classNames(styles.sub)}>
          Front end Web Developer/Designer
        </p>
      </div>
      <div className={classNames(styles.divider)}>
        <Divider />
      </div>
    </Container>
  )
}

export default Hero
