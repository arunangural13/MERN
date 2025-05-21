// 
const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/user',require('./routes/userRoute'))

mongoose.connect("mongodb://localhost:27017/Batch1", {
})
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.error("Error in connection:", err);
});

const friendSchema = new mongoose.Schema({
  friend_name: { type: String, default: '' },
  friend_email: { type: String, default: '' },
  friend_phone: { type: String, default: '123321221' }
});

const Friend = mongoose.model('Friend', friendSchema);
app.get('/', (req, res) => {
  res.json({ message: "User Page" });
});

app.post('/friend', (req, res) => {
  const friendData = new Friend({
    friend_name: req.body.fname,
    friend_email: req.body.femail,
    friend_phone: req.body.fphone
  });

  friendData.save()
    .then((data) => {
      res.json({ 
        success: true, 
        message: "Data inserted successfully.",
        data 
      });
    })
    .catch((err) => {
      res.status(500).json({ 
        success: false,
        message: "Failed to insert data.",
        error: err.message 
      });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log("server is started ")
});

