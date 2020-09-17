import { Container } from "react-bootstrap"
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"

const Section = props => {
  return (
    <Container className={classNames("my-5", "py-5")} id={props.id}>
      {props.children}
    </Container>
  )
}

Section.propTypes = {
  id: PropTypes.string,
}

export default Section
