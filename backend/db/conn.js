
const mongoose = require('mongoose')
const DB = process.env.DATABASE

mongoose.connect("mongodb+srv://saurabhdeshmukh267:s6rwEBnlWcRcPm8T@cluster0.d8chs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection done");
}).catch((err) => {
    console.log(err);
});