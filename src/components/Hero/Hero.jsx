import { Container } from "react-bootstrap"
import classNames from "classnames"
import Particles from "react-particles-js"
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
      <Particles
        className={classNames(styles.particles)}
        params={{
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.2,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                size_min: 1,
              },
            },
            line_linked: {
              enable: true,
              distance: 75,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Container>
  )
}

export default Hero
