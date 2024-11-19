// import Express library and activate it
import express from "express";
const app = express();
// publish our static frontend files
app.use('/',express.static('./public')) 

import cors from 'cors'
app.use(cors()) 
// Enable express to parse JSON data
app.use(express.json())  

import {apiEndpoints} from './api.js'
app.use('/api', apiEndpoints )


// Start Express
app.listen(process.env.PORT, () => { 
    console.log(`Express is now Live.`) 
    console.log(`Public URL: `+ process.env.PUBLIC_URL)
}); 
