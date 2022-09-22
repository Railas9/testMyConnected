const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tabsSchema = schema({
  name: {
    type: String,
  },
  lists: [{type: schema.ObjectId, ref:'lists'}],
  labels: {
      type: [String], default : ["to do","in process","done"]
  },
  master: {
    type: schema.ObjectId, ref:'users'
  },
  members: {
    type: [{type: schema.ObjectId, ref:'users'}],
  }
},
{
    timestamps: true
});

const Tab = mongoose.model('tabs', tabsSchema);



module.exports = Tab;