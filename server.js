const  express  =  require ( 'express' );
const hbs = require('hbs');

const  app  =  express ( ) ;

app.set('view engine', hbs);
app.get('/connected_user',(req,res)=>{
    res.render('user.hbs',{name:"Wejden"} )
});

app.use(date=(req,res,next)=>{
    let requestAt=new Date()
    console.log(requestAt)
    next()
    })



   /* app.use((req,res,next)=>{

  let requestDate = new Date();
  let day = requestDate.getUTCDay() 
  let time = requestDate.getUTCHours() 

  if(day>5 || time<9 || time>17 )  
  res.sendFile(__dirname + '/public/notAvailable.html')
  
  next()
}) */


app.use(express.static(__dirname +'/public'))


app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/home.html') ;
})

const port = 5000 ;
app.listen(5000,(err)=>{
    if(err) console.log(err)
    console.log("server is running on port : "+port)
})
