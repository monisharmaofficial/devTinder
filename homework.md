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