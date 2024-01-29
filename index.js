const express = require("express")
const port = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    id: 1,
    user: "Admin",
    age: 27

  })
})

app.listen(port, () => {
  console.log("Serveur en ligne ! ")
})