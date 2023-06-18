const express = require('express');
const app = express();
const PORT = 5000//PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend

mongoose.connect("mongodb+srv://amruthakv:i5btwUJp0pFm9bez@cluster0.nhmw3pg.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log(err)});
// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});