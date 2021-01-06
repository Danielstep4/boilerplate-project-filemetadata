const express = require('express');
const bodyParser = require("body-parser");
const multer  = require('multer');
const upload = multer();
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
app.post('/api/fileanalyse', upload.any(), function (req, res) {
  const response = {
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size
  }
  res.json(response)
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
