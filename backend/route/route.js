const express = require('express');
const router = express.Router();
const xml2js = require('xml2js');
const fs = require('fs');
const nodemailer = require('nodemailer');
const isEmpty = require("is-empty");
const Validator = require("validator");

router.get('/', (req, res) => {

    // Json file importing case
    fs.readFile('sample.json', (err, data) => {
        if (err) throw err;
        let sample = JSON.parse(data);
        return res.send(sample);
    });

});

router.post('/email', (req,res)=>{
    console.log(req.body);
    const data = req.body;
    var existed = new Array();
    var o = {};
    var key = 'emails';
    o[key] = [];
    if(!Validator.isEmail(data.email)){
        return res.send({result:"invalid email!"})
    } else{
    
        fs.readFile('emails.json', (err, result) => {
            if (err) throw err;
            let sample = JSON.parse(result);
            existed =sample.emails;
            existed.push(data);

            o[key] = existed;
        
            o=JSON.stringify(o);
        
            fs.writeFileSync('emails.json', o);
            return res.send({result:"OK"});
        });
    }
})

router.post('/subscribe', (req,res)=>{
    console.log(req.body);
    const data = req.body;
    if(!Validator.isEmail(data.email)){
        return res.send({result:"invalid email!"})
    } else{
    
    fs.readFile('blog.json', (err, result) => {
        if (err) throw err;
        let sample = JSON.parse(result);
        function search(email){
            return email == data.email;
        }
        const temp = sample[0].subscribe.filter(search);
        if (!isEmpty(temp)){
            return res.send({result:"you already subscribe in this blog"})
        }else{
            console.log("2");
            sample[0].subscribe.push(data.email);
            console.log(sample[0].subscribe)
            sample = JSON.stringify(sample);
            fs.writeFileSync('blog.json', sample); 
        }

        return res.send({result:"OK!"});
    });
}
})

router.post('/comment', (req,res)=>{
    const data = req.body;
    let errors = {};
    if(!Validator.isEmail(data.commentemail)){
        errors.email="invalid email"
    } 
    if(isEmpty(data.comment)){
        errors.comment="please enter a comment"
    }
    if(isEmpty(data.name)){
        errors.name="please enter a name"
    }
    if(!isEmpty(errors)){
        return res.status(400).json(errors);
    }else{
        fs.readFile('blog.json', (err, result) => {
            if (err) throw err;
            let sample = JSON.parse(result);
            sample[0].comments.push(data);
            sample = JSON.stringify(sample);
            fs.writeFileSync('blog.json', sample); 
        });
        return res.send({result: "OK"})
    }

})

router.get("/comment", (req, res) => {

    fs.readFile('blog.json', (err, result) => {
        if (err) throw err;
        let sample = JSON.parse(result);
        let data = sample[0].comments;
        data = JSON.stringify(data);
        return res.send(data);
    })

})

module.exports = router;