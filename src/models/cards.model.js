const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cardSchema = schema({
  title: {
    type: String,
  },
  members: {
    type: [{type: schema.ObjectId, ref:'users'}],
  },
  description: {
    type: String,
  },
  label: {
    type: String,
  },
  checklist: {
    type: Boolean,
  },
  deadline: {
    type : String
  }
},
{
    timestamps:true
});

const Card = mongoose.model('cards', cardSchema);



module.exports = Card;