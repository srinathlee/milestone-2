const http=require("http");
const fs=require("fs");
const minimist=require("minimist");
const args=(minimist(process.argv));
const port=args.port;

let homeBody="";
let projectBody="";
let registrationData="";

//node index.js --port=5000
fs.readFile("home.html",(err,data)=>{
  if(err){
    throw err;
  }
  homeBody=data;
})

fs.readFile("project.html",(err,data)=>{
  if(err){
    throw err;
  }
  projectBody=data;
})


fs.readFile("registration.html",(err,data)=>{
  if(err){
    throw err;
  }
  registrationData=data;
})


http.createServer((req,res)=>{
  let url=req.url;
  res.writeHeader(200,{"Content-Type":"text/html"})
  switch(url){
    case "/project":
      res.write(projectBody);
      res.end();
      break;
    case "/registration":
      res.write(registrationData);
      res.end();
      break;  
  default:
    res.write(homeBody);
    res.end();
    break;
  }
}).listen(port);