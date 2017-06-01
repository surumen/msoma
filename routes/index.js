var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport){

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { message: req.flash('message') });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true  
    }));

    /* GET Registration Page */
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true  
    }));

    // route for facebook authentication and login
    // different scopes while logging in
    router.get('/login/facebook', 
        passport.authenticate('facebook', { scope : 'email' }
    ));

    // handle the callback after facebook has authenticated the user
    router.get('/login/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/home',
            failureRedirect : '/'
        })
    );


    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res){
        res.render('home', { user: req.user });
    });

    /* GET CS 101 Page */
    router.get('/cs101', isAuthenticated, function(req, res){
        res.render('cs101', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web', isAuthenticated, function(req, res){
        res.render('web', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web/workshops', isAuthenticated, function(req, res){
        res.render('web/workshops', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web/projects', isAuthenticated, function(req, res){
        res.render('web/projects', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web/homework', isAuthenticated, function(req, res){
        res.render('web/homework', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web/projects/project1', isAuthenticated, function(req, res){
        res.render('web/projects/project1', { user: req.user });
    });

    /* GET Web Design Page */
    router.get('/web/projects/project2', isAuthenticated, function(req, res){
        res.render('web/projects/project2', { user: req.user });
    });

    /* GET Resources Page */
    router.get('/resources', isAuthenticated, function(req, res){
        res.render('resources/index', { user: req.user });
    });

    /* GET Resources Page */
    router.get('/resources/git', isAuthenticated, function(req, res){
        res.render('resources/git', { user: req.user });
    });

    /* GET Resources Page */
    router.get('/resources/github', isAuthenticated, function(req, res){
        res.render('resources/github', { user: req.user });
    });

    /* GET Resources Page */
    router.get('/resources/install', isAuthenticated, function(req, res){
        res.render('resources/install', { user: req.user });
    });

    /* GET Resources Page */
    router.get('/resources/terminal', isAuthenticated, function(req, res){
        res.render('resources/terminal', { user: req.user });
    });

    /* GET Design Thinking Page */
    router.get('/designthinking', isAuthenticated, function(req, res){
        res.render('designthinking', { user: req.user });
    });

    /* GET Ethics Page */
    router.get('/ethics', isAuthenticated, function(req, res){
        res.render('ethics', { user: req.user });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}
