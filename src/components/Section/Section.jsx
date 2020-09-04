import { Col, Container, Row } from "react-bootstrap"
import classNames from "classnames"
import React from "react"

const Section = props => {
  return (
    <Container className={classNames("my-5", "py-5")}>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>{props.children}</Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  )
}

export default Section
