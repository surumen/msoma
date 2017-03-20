var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'M-Soma Institute'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About — M-Soma Institute'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact — M-Soma Institute'
  });
});

router.get('/blog', function(req, res){
  res.render('blog', {
    title: 'Bootcamp — M-Soma Institute'
  });
});

router.get('/mentors', function(req, res){
  res.render('mentors', {
    title: 'Mentors — M-Soma Institute'
  });
});

router.get('/apply', function(req, res){
  res.render('apply', {
    title: 'Apply — M-Soma Institute'
  });
});

router.get('/curriculum', function(req, res){
  res.render('curriculum', {
    title: 'Online Learning — M-Soma Institute'
  });
});

router.get('/connecting-kenyan-youth-to-computer-skills-training', function(req, res){
  res.render('connecting-kenyan-youth-to-computer-skills-training', {
    title: 'Connecting Kenyan Youth to Computer Skills Training — M-Soma Institute'
  });
});

router.get('/error', function(req, res){
  res.render('error', {
    title: 'Oops'
  });
});

module.exports = router;
