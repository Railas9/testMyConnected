const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
  pseudo: {
    type: String,
  },
  email: {
    type: String,
  },
  myTabs: {
    type: [{type: schema.ObjectId, ref:'tabs'}],
  }
},
{
    timestamps:true
});

const User = mongoose.model('users', userSchema);



module.exports = User;