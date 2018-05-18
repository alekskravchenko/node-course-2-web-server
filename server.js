const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
/*app.use((req, res, next) =>{
   res.render('maintenance.hbs', {
       pageTitle: 'Maintenance',
       msg: "we will back soon"
   })
});*/

hbs.registerPartials(__dirname +'/views/partials');
hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});


app.get('/', (req, res)=>{
    res.render('home.hbs', {
        pageTitle: 'Home',
        welcome: 'Welcome to my website',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About',
    });
});

app.get('/projects', (req, res)=>{
    res.render('projects.hbs', {
        pageTitle: 'Projects',
        message: 'This s my portfolio'
    });
});

app.get('/bad', (req, res) =>{
   res.send({
       err: `Can't get some data`
   });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});