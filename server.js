/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const baseController = require("./controllers/baseController")


/* ******************************************
 * Default GET route
 * ***************************************** */
// app.get("/", (req, res) => {res.send("Welcome home!")})

/* ***********************
 * View Engine and Templates
 *************************/

app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

/* ***********************
 * Routes
 *************************/
app.use(static)
app.use(require("./routes/static"))
//Index route
app.use("/inv", inventoryRoute)
app.get("/", baseController.buildHome)
// app.get("/", utilities.handleErrors(baseControllers.buildHome))
// app.get("/", (req, res) => {
//   res.render("index", { title: "Home", pagecss: "home" });
// });

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
