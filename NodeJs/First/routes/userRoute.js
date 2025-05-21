
const router =require ('express').Router()
const mongoose = require('mongoose');

const friendController = require ('../api/friendController')




// const friendSchema = new mongoose.Schema({
//   friend_name: { type: String, default: '' },
//   friend_email: { type: String, default: '' },
//   friend_phone: { type: String, default: '123321221' }
// });

// const Friend = mongoose.model('Friend', friendSchema);
// app.get('/', (req, res) => {
//   res.json({ message: "User Page" });
// });

router.post('/friend',friendController.addFriend ) 
router.post('/allfriend',friendController.getFriends)
router.post('/singlefriend',friendController.singleFriend)
 

module.exports=router

