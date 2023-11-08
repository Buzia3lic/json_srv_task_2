const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// router.render = (req, res) => {
//   res.status(200).jsonp({
//     code: "200",
//     history: res.locals.data
//   })
// }

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  //console.log(body);
  console.log(req.method);
  if (req.method === "POST") {
    console.log(body);
    // If the method is a POST echo back the name from request body
    res.json({ message:"Dates added successfully", code: "10"});


  }else{
      //Not a post request. Let db.json handle it
      next();
  }  
});

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running on 3001')
})