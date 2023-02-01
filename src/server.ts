import Express from "express";
import { routes } from "./routes/routes"

const app = Express()

app.use(Express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.json({
    message: "Aqui@@@"
  })
})

app.listen(3000, () => console.log("Server is running! 🤖"))