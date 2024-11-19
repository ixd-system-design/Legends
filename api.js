import express from 'express' 
const api = express.Router()
import { Story }  from "./models/StoryModel.js"

import {mongoReady} from './database.js'
 

/** Endpoint for fetching nearby stories from MongoDB */
// the user's location is passed along via query parameters
api.get('/stories', mongoReady,  async (req,res) => {
   // Query mongoDB for nearby stories using the $near operator
   // see also: https://www.mongodb.com/docs/manual/reference/operator/query/near/
   let stories = await Story.find({
        "location": {
          $near: {
            $geometry: {
              type: "Point" ,
              coordinates: [ req.query.lng , req.query.lat ]
            },
            $maxDistance: 1000000
          }
        }
    }).limit(10)
   res.send(stories) 
})

/* This endpoint is for adding a new story. 
 The frontend sends lat/lng coordinates and Content/Text as JSON in the body of the request. 
 We parse this JSON using the "bodyParser" middleware and save it to MongoDB.
 see also: https://www.npmjs.com/package/body-parser  */
 api.post('/story', mongoReady,  (req, res) => {
  /* todo: insert new story into mongo */  
  let story = new Story({ 
    "content": req.body.content,
    "location":  req.body.location 
  })
  story.save().then((status) => { 
    res.send({
      "status" : status
    })
  }) 
})
 


export { api as apiEndpoints }