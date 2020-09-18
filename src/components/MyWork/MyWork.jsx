import { Braces, Globe } from "react-bootstrap-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Device from "./Device"
import Divider from "../Divider"
import Media from "../Media"
import React from "react"
import styles from "./MyWork.module.scss"

const MyWork = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___order }) {
        edges {
          node {
            html
            frontmatter {
              title
              order
              siteLink
              repoLink
              image {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classNames(styles.myWork)}>
      <h2 className={classNames("text-center")}>My Work</h2>
      <Divider icon={<Braces />} />
      {data.allMarkdownRemark.edges.map(edge => {
        const { node: project } = edge
        const image = project.frontmatter.image.childImageSharp.fixed.src
        const imageAlign =
          project.frontmatter.order % 2 === 0 ? "left" : "right"

        return (
          <Media
            key={project.frontmatter.order}
            image={<Device image={image} />}
            imageAlign={imageAlign}
          >
            <h3 className={classNames("h2")}>{project.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <div className={classNames("d-flex", "flex-wrap", styles.links)}>
              {project.frontmatter.siteLink && (
                <a
                  className={classNames("mr-4")}
                  href={project.frontmatter.siteLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Globe className={classNames(styles.linkIcon)} />
                  Visit site
                </a>
              )}
              {project.frontmatter.repoLink && (
                <a
                  href={project.frontmatter.repoLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={classNames(styles.linkIcon)}
                    icon={faGithub}
                  />
                  View on Github
                </a>
              )}
            </div>
          </Media>
        )
      })}
    </div>
  )
}

export default MyWork
