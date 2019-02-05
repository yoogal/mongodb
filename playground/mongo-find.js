const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect with mongodb');
  }
  console.log('Connect With Mongo DB');
  db.collection('Todos').find().toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to find todo');
  });
  db.close();
});
