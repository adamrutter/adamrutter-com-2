import "../styles/main.scss"
import PropTypes from "prop-types"
import React, { useEffect } from "react"

const Layout = ({ children }) => {
  // Mobile viewport height fix
  useEffect(() => {
    if (
      navigator.userAgent.indexOf("Mobi") !== -1 ||
      navigator.userAgent.indexOf("Android") !== -1
    ) {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", vh + "px")
    }
  })

  return <React.Fragment>{children}</React.Fragment>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
