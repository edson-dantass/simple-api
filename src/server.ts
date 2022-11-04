import express from "express"

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())


app.get("/", (req, res) => {
  return res.json({messae: "Hello word"})
})

app.listen(process.env.PORT || 3333, () => console.log(`Servidor is runnig at port ${port}`))

