
const express=require('express');
const app=new express();
const router=require('./src/Routes/api');

app.use('/api',router);

module.exports=app;