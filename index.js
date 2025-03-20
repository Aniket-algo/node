const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("Connected to server 3000");
    
})


//! to use ejs engine we have to use
app.set("view engine", 'ejs');

//! to send json data we have to use
app.use(express.json());

//! to send form data we have to use
app.use(express.urlencoded({extended:false})); 


// sending req on server
//! sending json 
// app.get("/",(req,res)=>{
//     res.send({
//         "name":"aniket",
//         "Class":"master"
//     });
// })


// sending array
// app.get("/", (req,res)=>{
//    res.send(["Apple","Mango","Banana"])
// })



//  returning json using jso method
// app.get("/", (req,res)=>{
//     const arr = [{"math":"40"},{"science":"50"},{"hindi":"60"}]
// //    res.json({
// //     "name":"aniket",
// //     "salary":"20k",
// //     "salarys":"50k",
// //    });


// // res.json(arr);

// res.jsonp(arr);

// })


// we use jsonp when we are handling with cros domain request 


// redirect method

app.get("/",(req,res)=>{
    res.redirect('https://youtube.com');
 })
 

app.get("/Home",(req,res)=>{
   res.send("https://youtube.com");
})


app.get("/about",(req,res)=>{
    res.render("user")
})



app.get("/download",(req,res)=>{
    res.download("./download/dd.pdf","document.pdf");
})



app.get("/file",(req,res)=>{
   res.sendFile(__dirname + '/download/dd.pdf');
})




app.get("/test",(req,res)=>{
    res.write("This is testing");
    res.end();
 })



  app.get("/error",(req,res)=>{
    res.sendStatus(404);
  })



  app.get("/err",(req,res)=>{
    res.status(200).send("Hello");
  })



  //! request method 

  app.post("/send",(req,res)=>{
    res.send(req.body)  //! req.body is used to read data in the postman .
  })


  app.get("/host",(req,res)=>{
    res.send(req.hostname)  //! req.hostname is used to return hostname .
  })


  app.get("/ip",(req,res)=>{
    res.send(req.ip)  //! req.ip is used to return ip addresss .
  })


  app.get("/ips",(req,res)=>{
    res.send(req.ips)  //! req.ips is used to return  multiple ip addresss .
  })


  app.get("/method",(req,res)=>{
    res.send(req.method)  //! req.method  is used to return method  .
  })

  app.get("/ourl",(req,res)=>{
    res.send(req.originalUrl)  //! req.originalUrl is used to return route with all other parameter which used  .
  })


  
  app.get("/hello",(req,res)=>{
    res.send(req.path)  //! req.path is used to return only route which used  .
  })



  app.get("/hell",(req,res)=>{
    res.send(req.protocol)  //! req.protocol is used to check which protocol is used  .
  })


  app.get("/sec",(req,res)=>{
    res.send(req.secure)  //! req.secure is used to check that connection is secure or not it return bool value.
  })



  app.get("/rout/:userId",(req,res)=>{
    res.send(req.route)  //! req.route is used to return all route information.
  })


  //? node request methods
//! accept :Accept is used to check whether the request is comming which format is accepted like html, json and xml.


app.get("/accpt",(req,res)=>{
    if(req.accepts('html')){
        res.send("<h1>HTML Accept by the browser</h1>");
    } else if(req.accepts('json')){
        res.send({message:"Hello Json"});
    }else if(req/accepts('xml')){
        res.send("<message>Hello XML</message>");
    }else{
        res.send("content not supported");
    }

  })
