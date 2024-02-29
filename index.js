const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "fig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.get("/cat", (req, res) => {
  res.send({ name: "고양이" });
});

app.get("/neople", (req, res) => {
  fetch(
    `https://c.q-net.or.kr/openapi/Ncs1info/ncsinfo.do?type=json&pageNo=1&numOfRows=10&ServiceKey=GfEBGZl/WVWZaww3GJjoLpRrE++wLFKbom/Sth6vxaX+A8qKV6FBHeMZe0zjSNjGSizunxh5Ylj4ZNegI83s9w==`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data from Neople API" });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
