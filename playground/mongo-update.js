const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect with mongodb');
  }
  console.log('Connect With Mongo DB');
  db.collection('Todos').findOneAndUpdate({
    _id:new ObjectId('5c592c5808e9513eb4e28672')
  },{
    $set:{
      completed:true
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
  db.close();
});
