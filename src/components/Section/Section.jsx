import { Container } from "react-bootstrap"
import classNames from "classnames"
import React from "react"

const Section = props => {
  return (
    <Container className={classNames("my-5", "py-5")}>
      {props.children}
    </Container>
  )
}

export default Section
