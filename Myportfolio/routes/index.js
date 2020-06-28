'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'index' });
});

router.get('/project', function (req, res) {
    res.render('project', { title: 'project' });
});

router.get('/service', function (req, res) {
    res.render('service', { title: 'service' });
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});

router.get('/Contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
