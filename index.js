var express =  require('express');
var http = require('http');
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.post('/email', function(req, res) {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.text;


  const msg1 = {
    to: 'alex.youssefinia@gmail.com',
    from: 'customer@fayesbackyard.com',
    subject: 'Thank You',
    text: `
     ${message} 
    `,
    html: `
      <p>Dear user,</p>    <p>Here is your email.</p>
    `,
  };

  const msg2 = {
    to: email,
    from: 'faye@fayesbackyard.com',
    subject: 'Thank You',
    text: `
      Dear ${firstName} ${lastName},    Thank you for contacting us.
      We have received your message and will get back to you shortly. 
    `,
    html: `
      <p>Dear user,</p>    <p>Here is your email.</p>
    `,
  };

    sgMail
    .send(msg1)
     .then(() => {
       console.log('email 1 sent')
       sgMail.send(msg2).then(()=> console.log('email 2 sent')).catch(err => console.log(err))
     })
    .catch((error) => {
      console.error(error)
    })
  res.send('you want to send an email');
})


app.listen(3000, () => {
  console.log(`app listening at http://localhost:3000`)
})
