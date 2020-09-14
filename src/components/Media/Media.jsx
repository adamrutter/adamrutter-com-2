import { Col, Row } from "react-bootstrap"
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Media.module.scss"

const Media = props => {
  const image = {
    align: props.imageAlign === "left" ? "order-lg-1" : "order-lg-2",
  }

  const text = {
    align: props.imageAlign === "left" ? "order-lg-2" : "order-lg-1",
    padding: props.imageAlign === "left" ? "pl-lg-3" : "pr-lg-3",
  }

  return (
    <Row className={classNames("align-items-center", styles.media)}>
      <Col className={classNames(styles.text, text.align)} lg={6}>
        {props.children}
      </Col>
      <Col
        className={classNames(
          "align-items-start",
          "d-flex",
          image.align,
          "image",
          "justify-content-center",
          "p-0",
          styles.imageCol
        )}
        lg={6}
      >
        {props.image}
      </Col>
    </Row>
  )
}

Media.propTypes = {
  image: PropTypes.element.isRequired,
  imageAlign: PropTypes.oneOf(["left", "right"]),
}

export default Media
