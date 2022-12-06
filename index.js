const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

// single text ke paowar junno use kora hoi 
app.get('/', (req,res)=>{
    res.send('Hello Node js ')
})

// 
const users = [
    { id:1 , name:'Rakib', email:'r@gmail.com' },
    { id:2 , name:'Rahim', email:'ra@gmail.com' },
    { id:3 , name:'akib', email:'ak@gmail.com' },
    { id:4 , name:'jamil', email:'ja@gmail.com' }
    
]
//  Onk golo Users ke paowar junno use kora hoi 
app.get('/users',(req,res)=> {
    res.send(users);
})

//  Specifique kono user ke filter korar junno use kora hoi
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.post('/user',(req, res) =>{
    const user = req.body;
    user.id = users.length + 1 ;
    users.push(user);
    res.send(user);
})

app.listen(port,()=>{
    console.log(` Example App Listening on port ${port}`)
})