/**
 * Created by muhammadyogiindragiri on 5/17/17.
 */

var greeting = require('./greeting.json')

var greet = function () {
    console.log(greeting.en);
};

module.exports =  greet;



