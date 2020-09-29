import { Container, Nav, Navbar } from "react-bootstrap"
import classNames from "classnames"
import Logo from "../../svg/logo.inline.svg"
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
      <Navbar.Brand>
        <Nav.Link aria-label="Link to top of homepage" href="/#">
          <Logo className={classNames(styles.logo)} />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={classNames("ml-auto")}>
          <Nav.Link className={classNames("text-light")} href="/#about-me">
            About Me
          </Nav.Link>
          <Nav.Link className={classNames("text-light")} href="/#my-work">
            My Work
          </Nav.Link>
          <Nav.Link className={classNames("text-light")} href="/#lets-talk">
            Let's Talk
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Component
