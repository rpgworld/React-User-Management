const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "19921123",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/any",
      name: "김철수",
      birthday: "19911126",
      gender: "남자",
      job: "무직",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
