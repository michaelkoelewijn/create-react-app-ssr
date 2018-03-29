import express from 'express';
import fs from 'fs';
import path from 'path';
import router from './router';

// Initialize Express server
const app = express();

//Set port for Express server
const PORT = process.env.PORT || 5003;
app.set('port', PORT);

let file = path.join(__dirname,'../','build','index.html');

fs.readFile(file, 'utf8' ,(err, data) => {

// Serve built files with static files middleware
app.use(express.static(path.join(__dirname, '../build'), {index: '_'}));

    // Handle request
    app.get("*", (req, res) => {
        return router(req,res,data)
    });

     // Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    }); 

})