import classNames from "classnames"
import ParticlesBase from "react-particles-js"
import React from "react"
import styles from "./Particles.module.scss"

const Particles = () => {
  return (
    <ParticlesBase
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
  )
}

export default Particles
