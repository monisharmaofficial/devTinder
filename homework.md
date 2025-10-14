# How to Create a express server

- Create a repository
- Initialise the repository
- node modues, pacage.json, package lock.json
- install express
- create a server
- listen to port 1234
- write request handler for '/', '/home', '/about' etc
- install nodemon and update scripts inside the package.json
- what are dependencies
- what is the use of "-g" while npm install
- difference b/w caret and tilde (^ and ~)

# To Push the code on github
- initialise git (git init)
- ush node modules in gitignore
- create a new repo on github
- push all code on remote origin
- play with the routes and extentions ex. /hello, /abc/12, /,/hello/abc 
- Order of the routes matter a lot
- Install the postman app and make a workspace then make an api call
- Explore routing and use of +, ?, (), * in the routes
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- eading the dynamic routes in the route

- Multiple route handler
- next()
- next function and error along with res.send()
- app.use ("/route", rh1, [rh2, rh3], rh4, rh5) 
- what is middleware? why we need it?
- How express js basically handles request behind the scene
- difference between app.use and app.all
- write the auth middleware and used it in main file
- write the dummy auth middleware for all user routes expect user/login
- error handling using app.use("/",(err, req, res, next)=> {})

- Create a free cluster on mongodb official website (mongodb atlas)
- Install mongoose libarary
- Connect your application to the Database "Connection-url"/devTinder
- Call the conectDn function and connect to the database before starting server on any port
- Create a user schema and userModel
- Create POST/singup api to add data into databse
- Push some documents  using api calls from postman
- Error handling using try catch

- Js object vs JSON (difference)
- Add the express.json middleware to your app
- Make your signupr api dynamic to recieve data from the end user
- User.findone wit duplicate email ids which object returned
- Api- Get user by id
- Api- feed api GET/feed get all the users from the databse
- Api Get/ user by id 
- Create a delete user api
- Api to update user 
- Explore the mongoose Dodumentation specially for model methods
- What are options in Model.findOneAndUpdate method explore more about it
- Create a api o update the use by email

- Explore schemaTypes options from the documentation
- add require, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - Put all appropiate validation on each field in schema 
- Add the timestamp in schema  
- Add api level validation on patch req and sign up post api
- Data Sanitization - Add api validation for each fields in schema 
- Install Validator 
- Explore validators library functions and use validator function for password, email and photoUrl