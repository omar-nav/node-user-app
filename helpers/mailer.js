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
    from: 'Oswaldinho',
    to: email,
    subject: 'jordy69',
    text: ';)',
    html: '<h1>es en serio vamos a beber...o no! :fire:</h1>'
  }).then(info => console.log(info))
    .catch(e => console.log(e))
}