var expect=require('expect');
const request=require('supertest');

const {app}=require('./../server.js');
const {Todo}=require('./../models/Todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});

describe('Post/ Todo',()=>{
  it('shoude create new todo',(done)=>{
    var text ='Test todo'
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        done();
      }).catch((e)=>{
        done(e);
      });
    });
  });


  it('shoude not create new todo',(done)=>{
    var text =''
    request(app)
    .post('/todos')
    .send({text})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        done();
      }).catch((e)=>{
        done(e);
      });
    });
  });
});
