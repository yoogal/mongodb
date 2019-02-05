const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect with mongodb');
  }
  console.log('Connect With Mongo DB');
    // db.collection('Todos').deleteMany({text:'Ravi'}).then((res)=>{
    //   console.log('Deleting',res);
    // });
    // db.collection('Todos').deleteOne({text:'Ravi'}).then((res)=>{
    //   console.log('Deleting',res);
    // });
    db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
      console.log('Deleting',res);
    });
  db.close();
});
