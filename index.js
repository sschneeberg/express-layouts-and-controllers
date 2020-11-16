const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/:state/:category', function(req, res) {
    if (req.params.state === 'faves') {
        if (req.params.category === 'animals') {
            const animals = ['pandas', 'rabbits', 'seals', 'kittens'];
            res.render('faveAnimals', { animals });
        } else if (req.params.category === 'foods') {
            const foods = ['chocolate', 'blueberries', 'raspberries', 'apples'];
            res.render('faveFoods', { foods });
        }
    } else if (req.params.state === 'hates') {
        if (req.params.category === 'animals') {
            const animals = ['snakes', 'spiders', 'cockroaches', 'octopi'];
            res.render('hateAnimals', { animals });
        } else if (req.params.category === 'foods') {
            const foods = ['carrots', 'celery', 'mayonaise', 'ranch'];
            res.render('hateFoods', { foods });
        }
    }

})



/* to use multiple layouts
    app.get('/a', function(req, res) {
        res.render('view', { layout: 'LayoutA' });
    });
*/



app.listen(8000, () => console.log('start'));