# Local Legends
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Node/workspace?name=Legends&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/legends&param.code_template=custom)

## About
This demo illustrates how Google Maps can be used for two separate use cases:
- as a means to display stories attached to specific geographic locations. 
- as a location picker to select a place on the map as part of a data gathering process.

## Setup
You will need to add a MONGODB connection string to your environment so that stories can be saved there. For example, add something similar to the following to your `.env` file.
```
MONGODB=mongodb+srv://user:pass@cluster0.abc123.mongodb.net/database
```

## Google Maps Setup 
The included Google Maps Key is enabled for `ixdcoder.com` so it should work fine, but you may like to get your own Maps API key via the Google Cloud Console, this will allow you to assign your own ID to each of the two maps in order to customize them. 
