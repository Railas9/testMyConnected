const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cardSchema = schema({
  title: {
    type: String,
  },
  members: {
    type: [String],
  },
  description: {
    type: String,
  },
  label: {
    type: String,
  },
  checklist: {
    type: String,
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