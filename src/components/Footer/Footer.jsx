import classNames from "classnames"
import { Nav } from "react-bootstrap"
import React from "react"
import styles from "./Footer.module.scss"
import SvgGithub from "../../svg/github_icon.inline.svg"

const Footer = () => {
  const year = () => {
    return new Date().getFullYear()
  }

  return (
    <div className={classNames("bg-secondary", styles.footer, "text-light")}>
      <div className={classNames(styles.content)}>
        <Nav className={classNames("justify-content-center")}>
          <Nav.Item>
            <Nav.Link className={classNames("text-light")} href="/#about-me">
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={classNames("text-light")} href="/#my-work">
              My Work
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={classNames("text-light")} href="/#my-work">
              My Work
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className={classNames("justify-content-center", "my-3")}>
          <Nav.Item>
            <Nav.Link
              className={classNames("h4", "m-3", "text-light")}
              href="https://github.com/adamrutter/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <SvgGithub className={classNames(styles.linkIcon)} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className={classNames("justify-content-center", "text-light")}>
          <Nav.Item>
            <Nav.Link
              className={classNames("text-light")}
              href="mailto:adam+site.contact@adamrutter.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              adam@adamrutter.com
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div
        className={classNames(styles.bottom, "mb-2", "text-center", "w-100")}
      >
        <span>
          © {year()} |{" "}
          <a
            className={classNames("text-light")}
            href="https://github.com/adamrutter/adamrutter-com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Source code
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
