#! /usr/bin/env node
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Requête

Author.find({'first_name': 'Patrick'},'first_name family_name date_of_birth',function(err, authors) {
    if(err){
        return handledError(err)
    }else{
        for(let i =0; i< authors.length; i++){
            console.log(authors[i].first_name + authors[i].family_name + authors[i].date_of_birth);
        }
    }
});

Author.findById('622dd68c5a1a6cebd88cc948','first_name family_name date_of_birth',function(err, authors) {
    if(err){
        return handledError(err)
    }else{
        console.log(authors.first_name + authors.family_name + authors.date_of_birth);
    }
});