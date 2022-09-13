import { Container } from "react-bootstrap"
import classNames from "classnames"
import React from "react"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <Container fluid className={classNames(styles.hero, "text-light", "p-0")}>
      <div className={classNames(styles.heading)}>
        <h1 className={classNames("text-uppercase", "text-white")}>
          Adam Rutter
        </h1>
      </div>
    </Container>
  )
}

export default Hero
