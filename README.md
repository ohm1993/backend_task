# backend_task
This task is to build a simple stateless microservice in Nodejs, with three major functionalities -
- Authentication
- JSON patching
- Image Thumbnail Generation

### Required Endpoints

This project contains  the following endpoint functionality -

#### Public Endpoints
- Login
Request body should contain an arbitrary username/password pair
Treat it as a mock authentication service and accept any username/password.
Return a signed Json Web Token(JWT, https://jwt.io/) which can be used to validate future requests.


#### Protected Endpoints
The following two endpoints should be protected. The JWT obtained in the “Login” endpoint must be attached to each request.  If the JWT is missing or invalid, these endpoints should reject the request.

- Apply Json Patch
Request body should contain a JSON object and a JSON patch object (http://jsonpatch.com/).
Apply the json patch to the json object, and return the resulting json object.

- Create Thumbnail
Request should contain a public image URL.
Download the image, resize to 50x50 pixels, and return the resulting thumbnail.

#### how to run
1.do git clone https://github.com/ohm1993/backend_task.git
2.go to backend_task folder
3.run the comand npm start
go to the browser and type localhost:3000  
