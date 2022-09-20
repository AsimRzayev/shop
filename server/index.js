import  express from "express";
import {NEWS,USERS} from "./data.js"
import bodyParser from'body-parser';
const app=express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const port = 4000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});


app.get('/', (req, res) => {
    setTimeout(()=>res.json(NEWS),2000)
})
app.post('/post', (req, res) => {
    const data=req.body;
    console.dir(data)
    res.sendStatus(201)
})

app.get('/users', (req, res) => {
   setTimeout(()=>res.json(USERS),3000)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})