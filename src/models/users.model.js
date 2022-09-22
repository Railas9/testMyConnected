const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = schema({
  pseudo: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
      type:String
  },
  myTabs: [{type: schema.ObjectId, ref:'tabs'}] ,
  
},
{
    timestamps:true
});


userSchema.statics.hashPassword = async (password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    } catch(e) {
      throw e
    }
  }
  
  userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  }


const User = mongoose.model('users', userSchema);



module.exports = User;