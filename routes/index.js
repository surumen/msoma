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

// COURSES
router.get('/cs101', function(req, res){
  res.render('cs101', {
    title: 'Intro to Programming — M-Soma Institute'
  });
});

// WELCOME BOOTCAMP
router.get('/bootcamp', function(req, res){
  res.render('bootcamp', {
    title: 'Bootcamp 2017 — M-Soma Institute'
  });
});

// BOOK
router.get('/book/gettingstarted', function(req, res){
  res.render('book/gettingstarted', {
    title: 'CS 101 - M Soma Bootcamp'
  });
});


// BOOTCAMP
// router.get('/bootcamp', function(req, res){
//   res.render('bootcamp/schedule', {
//     title: 'Bootcamp — M-Soma Institute'
//   });
// });



router.get('/bootcamp/schedule', function(req, res){
  res.render('bootcamp/schedule', {
    title: 'Bootcamp — M-Soma Institute'
  });
});

router.get('/bootcamp/courses', function(req, res){
  res.render('bootcamp/courses', {
    title: 'Courses — M-Soma Institute'
  });
});

router.get('/bootcamp/tours', function(req, res){
  res.render('bootcamp/tours', {
    title: 'Bootcamp — M-Soma Institute'
  });
});

router.get('/bootcamp/registration', function(req, res){
  res.render('bootcamp/registration', {
    title: 'Registration | Bootcamp — M-Soma Institute'
  });
});

router.get('/bootcamp/videos', function(req, res){
  res.render('bootcamp/videos', {
    title: 'Bootcamp — M-Soma Institute'
  });
});

router.get('/bootcamp/speakers', function(req, res){
  res.render('bootcamp/speakers', {
    title: 'Bootcamp | Special Guests — M-Soma Institute'
  });
});

router.get('/bootcamp/mentors', function(req, res){
  res.render('bootcamp/mentors', {
    title: 'Mentors — M-Soma Institute'
  });
});

router.get('/bootcamp/instructors', function(req, res){
  res.render('bootcamp/instructors', {
    title: 'Bootcamp — M-Soma Institute'
  });
});

router.get('/college-apps', function(req, res){
  res.render('college-apps', {
    title: 'College — M-Soma Institute'
  });
});















module.exports = router;
