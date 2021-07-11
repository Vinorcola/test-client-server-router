const express = require("express")
const path = require("path")

const app = express()
const port = 3000

app.get("/page-a", (request, response) => {
    response.sendFile(path.resolve(__dirname, "..", "public", "page-a.html"))
})

app.get("/page-b", (request, response) => {
    response.sendFile(path.resolve(__dirname, "..", "public", "page-b.html"))
})

// Server client page otherwise.
app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "..", "public", "index.html"))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
