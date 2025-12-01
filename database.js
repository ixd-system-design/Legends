// This  module defines a database connection to MongoDB


/* Connect to MongoDB:
To connect, you must add a MongoDB connection string as an environment variable 
The name/key of the environment variable must be "DATABASE_URL"
The value of the variable must be a valid MongoDB connection string. 
You can locate the string in your MongoDB Atlas dashboard.
See also: https://account.mongodb.com/account/login  
See also: https://mongoosejs.com/docs/connections.html */

import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)
  .then(mongoose => {
    console.log(`Mongoose ${mongoose.version} connected to MongoDB.`)
    console.log(`Host: ${mongoose.connection.host}`)
  })
  .catch(error => handleError(error));

const handleError = (error) => {
  console.log("MongoDB connection failed.")
  console.log(error.message)
  if (process.env.DATABASE_URL) {
    console.log("DATABASE_URL=" + process.env.DATABASE_URL)
  }
  else {
    console.log("DATABASE_URL environment variable not found.")
  }
}

function mongoReady(req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).send()
  }
  next();
}

export { mongoReady }
