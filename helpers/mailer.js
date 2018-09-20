const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'navarrohouston@gmail.com',
    pass: 'Hilda_09'
  }
})
exports.sendMail = (email) => {
  transporter.sendMail({
    from: 'Oswaldinho \U+1F525',
    to: email,
    subject: 'Bienvendio al es',
    text: 'saquen las beers \U+2728',
    html: '<h1>es en serio vamos a beber...o no! :fire:</h1>'
  })
}