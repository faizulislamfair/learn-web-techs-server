const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000

app.use(cors());



const courses = require('./data/courses.json');

const coursesPremium = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('<h2 style="text-align: center">Learn webTechs!</h2>');
})


app.get('/courses', (req, res) => {
    res.send(courses);
})


app.get('/coursesPremium', (req, res) => {
    res.send(coursesPremium);
})


app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const course = courses.find(course => course.id === id);
    res.send(course);
})


app.get('/coursePremium/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const coursePremium = coursesPremium.find(premium => premium.id === id);
    res.send(coursePremium);
})



app.listen(port, () => {
    console.log(`Learn webTechs is running on port, ${port}`);
})

