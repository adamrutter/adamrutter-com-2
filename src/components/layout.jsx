import "../styles/main.scss"
import { NotificationsContextProvider } from "../contexts/NotificationsContext"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Notifications from "./Notifications"
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

  return (
    <React.Fragment>
      <NotificationsContextProvider>
        <Navbar />
        {children}
        <Footer />
        <Notifications />
      </NotificationsContextProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
