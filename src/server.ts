import Express from "express";

const app = Express()

app.get('/', (req, res) => {
  res.json({
    message: "Aqui@@@"
  })
})

app.listen(3000, () => console.log("Server is running! 🤖"))