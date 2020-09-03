import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Divider.module.scss"

const Divider = props => {
  return (
    <div className={classNames(styles.divider, "text-center")}>
      {React.cloneElement(props.icon, {
        className: classNames("h3", styles.icon),
      })}
    </div>
  )
}

Divider.propTypes = {
  icon: PropTypes.element.isRequired,
}

export default Divider
