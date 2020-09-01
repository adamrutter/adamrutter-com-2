import { Container, Nav, Navbar } from "react-bootstrap"
import classNames from "classnames"
import React from "react"
import styles from "./Navbar.module.scss"

const Component = () => (
  <Navbar
    bg="transparent"
    variant="dark"
    expand="sm"
    className={classNames(styles.navbar)}
  >
    <Container className={classNames("d-flex", "justify-content-between")}>
      <Navbar.Brand>brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className={classNames("ml-auto")}>
          <a className={classNames("nav-link")} href="/#about-me">
            About Me
          </a>
          <a className={classNames("nav-link")} href="/#my-work">
            My Work
          </a>
          <a className={classNames("nav-link")} href="/#let-s-talk">
            Let's Talk
          </a>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Component
