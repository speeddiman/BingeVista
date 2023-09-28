const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb+srv://speeddiman:123456yu@cluster0.49ssi4v.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successfull');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/user', userRoutes);

app.listen(5000, () => {
  console.log('server started on port 5000');
});
