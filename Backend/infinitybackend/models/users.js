var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var users = new Schema(
    {
      username:{type:String,required:true},
      email:{type:String,required:true},
      password:{type:String,required:true},
      phone:{type:String,required:true},
      booking:[
        {
          title:String,
          date:String,
          min_bid:String,
          img: String
        }
      ]
    }
);

module.exports = mongoose.model('Users' , users);