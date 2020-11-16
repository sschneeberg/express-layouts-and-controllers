const express = require('express');
const router = express();

router.get('/foods', function(req, res) {
    res.render('faves/foods', { title: 'Foods I Like', foods: ['chocolate', 'blueberries', 'raspberries', 'apples'] });
});

router.get('/animals', function(req, res) {
    res.render('faves/animals', { title: 'Animals I Like', animals: ['pandas', 'rabbits', 'seals', 'kittens'] })
});


module.exports = router;