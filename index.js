const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('News Api Running')
});


app.get('/categories', (req, res) => {

    res.send(categories)
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(n => n.id == id);
    res.send(selectCourse);
});
app.get('/category/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(n => n.id == id);
    res.send(selectCourse);
});

app.get('/courses', (req, res) => {
    res.send(courses);
})



app.listen(port, () => {
    console.log('top-techedu Server Port:', port);
})