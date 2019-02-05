const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect with mongodb');
  }
  console.log('Connect With Mongo DB');
  db.collection('Todos').insertOne({
    text:'Some text here',
    completed:false
  },(err,res)=>{
      if(err){
        console.log('Unable to insert into database');
      }
      console.log(JSON.stringify(res.ops,undefined,2));
  });
  db.close();
});
