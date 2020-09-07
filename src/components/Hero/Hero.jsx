import { Container } from "react-bootstrap"
import classNames from "classnames"
import Particles from "../Particles"
import React from "react"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <Container fluid className={classNames(styles.hero, "text-light", "p-0")}>
      <div className={classNames(styles.heading)}>
        <h1 className={classNames("text-uppercase")}>Adam Rutter</h1>
        <p className={classNames(styles.sub)}>
          Front end Web Developer/Designer
        </p>
      </div>
      <Particles />
    </Container>
  )
}

export default Hero
