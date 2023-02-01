import * as express from "express";
import "express-async-errors"
import { routes } from "./routes/routes"

const app = express()

app.use(express.json())
app.use(routes)

app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(3000, () => console.log("Server is running! 🤖"))