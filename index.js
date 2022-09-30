const express=require('express');
const path=require('path');
const port=7000;

// const db=require("./config/mongoose");

const Contact=require('./model/contact');

// mongo code to inserted above express
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// middleware1
// app.use(function(req,res,next){
//     // console.log('middleware1 is called');
//     req.myName="Amit";
//     next();
// })

// middleware2
// app.use(function(req,res,next){
//     // console.log('middleware2 is called');
//     console.log("My Name from mw2",req.myName);
//     next();
// })

var contactList= [
       {
        name:"Sushil",
        phone:"9876432000"
       },
       {
        name:"Ajeet",
        phone:"9676432000"
       },
       {
        name:"Bhalu",
        phone:"7876432000"
       }
    ]

app.get('/',function(req,res){
    // console.log(__dirname);
    // res.send('<h1>cool, it is running!</h1>')
    // console.log("from the get route controller",req.myName);
    return res.render('home', {
        title:"My Contacts List",
        contacts: contactList
    });
});

app.get('/practice',function(req,res){
    return res.render('practice', {title:"Let's play with ejs"});
});
app.post('/create-contact',function(req,res){
    // return res.redirect('/practice');
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    contactList.push(req.body);
    return res.redirect('back');
    // we can just write back instead of writing the url
})
// for deleting a contact
app.get('/delete-contact/',function(req,res){
    // console.log(req.query);
    // get the query from the url
    let phone=req.query.phone;

    let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
})

app.listen(port,function(err){
    if(err) {console.log('Error is running the server',err); }

    console.log("yesss! My Express Server is running on port:",port);
});