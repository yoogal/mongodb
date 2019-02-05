var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/Todo.js');
var {ObjectId}=require('mongodb');

var express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  })
  todo.save().then((doc)=>{
      res.send(doc);
  },(err)=>{
      res.status(400).send(err.message);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
    res.send(e.message)
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(400).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
        return res.status(400).send();
    }
    res.send({todo});
  },(err)=>{
    res.send(e.message);
  });
});
app.listen(3000,()=>{
  console.log('Listening in port 3000');
})
module.exports = {app};
