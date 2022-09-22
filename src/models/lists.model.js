const mongoose = require('mongoose');
const Card = require('./cards.model')
const schema = mongoose.Schema;

const listSchema = schema({
  name: {
    type: String,
  },
  cards: {
    type: [{type: schema.ObjectId, ref:'cards'}],
  }
},
{
    timestamps:true
});

const List = mongoose.model('lists', listSchema);



module.exports = List;