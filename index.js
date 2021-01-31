const express = require('express')
const env = require('env')
const app = express()
var port = process.env.PORT || 3000
require('dotenv').config()


const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    type:'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_REFRESH_TOKEN
  }
})

let mailOptions = {
  from: env.MAIL_USERNAME,
  to: env.MAIL_USERNAME1,
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})