import { NotificationsContext } from "../../contexts/NotificationsContext"
import { Toast } from "react-bootstrap"
import classNames from "classnames"
import React, { useContext } from "react"
import styles from "./Notifications.module.scss"

const Notifications = () => {
  // Context
  const { notifications, setNotifications } = useContext(NotificationsContext)

  // Close the notification when the close button is clicked
  const onClose = key => {
    const newArr = [...notifications]
    newArr[key].visible = false
    setNotifications(newArr)
  }

  return (
    <div className={classNames("m-3", styles.notifications)}>
      {notifications.map((notification, key) => {
        return (
          <Toast
            key={key}
            onClose={() => {
              onClose(key)
            }}
            show={notification.visible}
          >
            <Toast.Header
              className={classNames(
                `bg-${notification.variant}`,
                "border-0",
                "font-weight-bold",
                "justify-content-between",
                "text-light"
              )}
            >
              {notification.heading}
            </Toast.Header>
            <Toast.Body>{notification.msg}</Toast.Body>
          </Toast>
        )
      })}
    </div>
  )
}

export default Notifications
