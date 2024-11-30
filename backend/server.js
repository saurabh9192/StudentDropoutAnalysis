
const express = require('express')
const dotenv = require('dotenv')
const School = require('./model/schoolSchema')
const Student = require('./model/studentSchema')
const cookieParser = require('cookie-parser');
const app = express()


app.use(cookieParser());


dotenv.config({path: './config.env'})
const PORT = process.env.PORT
require('./db/conn')


app.use(express.json())
app.use(require('./routes/auth'))

app.listen(PORT, () => {
    console.log(`Server is Runnning on ${PORT}`);
})
app.get('/getStudents', (req, res) => {
    Student.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/genderCount', async (req, res) => {
    try {
      const maleCount = await Student.countDocuments({ gender: 'Male' });
      const femaleCount = await Student.countDocuments({ gender: 'Female' });
      res.json({ male: maleCount, female: femaleCount });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
});

app.get('/categorycount', async (req, res) => {
    try {
      const perCount = await Student.countDocuments({ reason: 'personal' });
      const finCount = await Student.countDocuments({ reason: 'financial' });
      const traCount = await Student.countDocuments({ reason: 'travel' });
      const helCount = await Student.countDocuments({ reason: 'health' });
      const othCount = await Student.countDocuments({ reason: 'others' });

      res.json({ personal: perCount, financial: finCount, travel:traCount,health:helCount,others:othCount});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
});


