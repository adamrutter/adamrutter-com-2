import { Container } from "react-bootstrap"
import "../styles/bootstrap.scss"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
