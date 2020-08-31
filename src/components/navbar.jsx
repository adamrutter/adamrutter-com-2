import { Container, Nav, Navbar } from "react-bootstrap"
import classNames from "classnames"
import React from "react"
import Scrollspy from "react-scrollspy"

const Component = () => (
  <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
    <Container className={classNames("d-flex", "justify-content-between")}>
      <Navbar.Brand>brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Scrollspy
          className={classNames("ml-auto")}
          componentTag={Nav}
          currentClassName="active"
          items={["about-me", "my-work", "let-s-talk"]}
        >
          {/* Using a tags rather than Nav.Link so react-bootstrap doesn't
          interfere with Scrollspy */}
          <a className={classNames("nav-link")} href="#about-me">
            About Me
          </a>
          <a className={classNames("nav-link")} href="#my-work">
            My Work
          </a>
          <a className={classNames("nav-link")} href="#let-s-talk">
            Let's Talk
          </a>
        </Scrollspy>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Component
