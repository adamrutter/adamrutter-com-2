import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { ChatDots } from "react-bootstrap-icons"
import { NotificationsContext } from "../../contexts/NotificationsContext"
import axios from "axios"
import classNames from "classnames"
import Divider from "../Divider"
import React, { useContext, useState } from "react"
import styles from "./LetsTalk.module.scss"

const LetsTalk = () => {
  // State
  const [honeypotValue, setHoneypotValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")

  const [validatedStyle, setValidatedStyle] = useState(false)

  const [isSending, setIsSending] = useState(false)

  // Context
  const { setNotifications } = useContext(NotificationsContext)

  // Handlers
  const handleSubmit = e => {
    e.preventDefault()
    setValidatedStyle(true)

    if (e.target.checkValidity() === false) {
      // If form not validated
      setNotifications(notifications => [
        ...notifications,
        {
          heading: "Error",
          msg: "Please complete all fields.",
          variant: "danger",
          visible: true,
        },
      ])
    } else if (honeypotValue.length > 0) {
      // If honeypot field has been filled
      console.error("You're not human!")
    } else {
      // Send the data!
      setIsSending(true)
      axios
        .post("/.netlify/functions/send-message", {
          name: nameValue,
          email: emailValue,
          msg: messageValue,
        })
        .then(res => {
          setIsSending(false)
          setValidatedStyle(false)
          setNameValue("")
          setEmailValue("")
          setMessageValue("")
          setNotifications(notifications => [...notifications, res.data])
        })
        .catch(err => {
          setIsSending(false)
          setNotifications(notifications => [
            ...notifications,
            {
              heading: "Error",
              msg: (
                <React.Fragment>
                  Unable to send your message. Please try again, or email me at{" "}
                  <a class="font-weight-bold" href="mailto:adam@adamrutter.com">
                    adam@adamrutter.com
                  </a>
                </React.Fragment>
              ),
              variant: "danger",
              visible: true,
            },
          ])
        })
    }
  }

  return (
    <div className={classNames(styles.letsTalk)}>
      <Row>
        <Col>
          <h2 className={classNames("text-center")}>Let's Talk</h2>
          <Divider icon={<ChatDots />} />
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <p className={classNames("mx-auto", "my-5")}>
            If you would like to talk about a potential project, or just find
            out more about what I do, I’d love to hear from you. You can email
            me at{" "}
            <a
              href="mailto:adam+site.contact@adamrutter.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              adam@adamrutter.com
            </a>
            , or use the contact form below, and I’ll get back to you right
            away!
          </p>
          <noscript>
            <p
              className={classNames(
                "bg-danger",
                "mx-auto",
                "p-2",
                "text-light"
              )}
            >
              Please enable JavaScript to use this form, or alternatively email
              me at{" "}
              <a
                className={classNames("font-weight-bold", "text-light")}
                href="mailto:adam+site.contact@adamrutter.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                adam@adamrutter.com
              </a>
            </p>
          </noscript>
          <Form noValidate onSubmit={handleSubmit} validated={validatedStyle}>
            <div
              aria-hidden="true"
              style={{ opacity: "0", position: "absolute", zIndex: "-99" }}
            >
              <input
                autoComplete="nope"
                id="form-email"
                onChange={e => setHoneypotValue(e.target.value)}
                onInput={e => setHoneypotValue(e.target.value)}
                tabindex="-1"
                type="text"
              />
            </div>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="mamas-kumquat">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={e => setNameValue(e.target.value)}
                  onInput={e => setNameValue(e.target.value)}
                  placeholder="Your name"
                  required
                  type="text"
                  value={nameValue}
                />
                <Form.Control.Feedback type="invalid">
                  Please include a name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="man-feelings">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={e => setEmailValue(e.target.value)}
                  onInput={e => setEmailValue(e.target.value)}
                  placeholder="Your email address"
                  required
                  type="email"
                  value={emailValue}
                />
                <Form.Control.Feedback type="invalid">
                  Please include an email address
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="curse-these-metal-hands">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={e => setMessageValue(e.target.value)}
                  onInput={e => setMessageValue(e.target.value)}
                  placeholder="Your message"
                  required
                  value={messageValue}
                />
                <Form.Control.Feedback type="invalid">
                  Please include a message
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className={classNames("mt-4")}>
              <Col className={classNames("d-flex", "justify-content-center")}>
                <Button disabled={isSending} variant="primary" type="submit">
                  {isSending ? (
                    <React.Fragment>
                      Sending...
                      <Spinner
                        animation="border"
                        as="span"
                        className={classNames("align-middle", "ml-2")}
                        size="sm"
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>Send</React.Fragment>
                  )}
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  )
}

export default LetsTalk
