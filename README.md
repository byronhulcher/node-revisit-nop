# Revisit NOP

A revisit (http://revisit.link/) service that does nothing!

## Relevant Technologies
* Node.js - http://nodejs.org/
* Express - http://expressjs.com/

## Documentation
API endpoints
```
GET /
	returns: 200 {"up": true}

HEAD /
	returns: 200

POST /service
	returns: 200 {
		"content": {
			"data": <your data>
		}
		"meta": <your metadata>
	}
```
