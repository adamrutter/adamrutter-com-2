import { Container, Navbar } from "react-bootstrap"
import React from "react"

const Component = ({ siteTitle }) => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand>adamrutter.com</Navbar.Brand>
    </Container>
  </Navbar>
)

export default Component
