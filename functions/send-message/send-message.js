const sendmail = require("sendmail")()

exports.handler = async event => {
  const data = JSON.parse(event.body)
  const date = () => {
    return new Date().toISOString()
  }

  // Asynchronously send form submission as an email
  const send = mail => {
    return new Promise((resolve, reject) => {
      sendmail(mail, err => {
        if (err) reject()
        resolve()
      })

      // Send error to client before lambda function times out
      setTimeout(() => {
        reject()
      }, 9000)
    })
  }

  return send({
    // Environment variables come from Netlify
    from: process.env.CONTACT_FORM_FROM_ADDRESS,
    to: process.env.CONTACT_FORM_TO_ADDRESS,
    subject: `Message on adamrutter.com from ${data.name} [${date()}]`,
    html: `
      <div>Name: ${data.name}</div>
      <div>Email: <a href="mailto:${data.email}">${data.email}</a></div>
      <div style="white-space: pre-wrap;">Message: ${data.msg}</div>
    `,
  })
    .then(() => {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        // Body will be used to display a success notification on client
        body: JSON.stringify({
          heading: "Sent!",
          msg:
            "Your message has been sent. I'll be in touch as soon as possible.",
          variant: "primary",
          visible: true,
        }),
      }
    })
    .catch(err => {
      return {
        statusCode: 500,
        // Generic error notification will be displayed on client
        body: JSON.stringify({
          msg: "error",
        }),
      }
    })
}
