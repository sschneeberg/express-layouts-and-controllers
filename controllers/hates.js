const express = require('express');
const router = express();

router.get('/foods', function(req, res) {
    res.render('hates/foods', { title: 'Foods I Dislike', foods: ['carrots', 'celery', 'mayonaise', 'ranch'] });
});

router.get('/animals', function(req, res) {
    res.render('hates/animals', { title: 'Animals I Dislike', animals: ['snakes', 'spiders', 'cockroaches', 'octopi'] })
});


module.exports = router;