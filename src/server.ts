import express from "express"

const app = express()
const port = process.env.PORT || 21034;
app.use(express.json())


app.get("/", (req, res) => {
  return res.json({messae: "Hello word"})
})

app.listen(port, () => console.log(`Servidor is runnig at port ${port}`))

