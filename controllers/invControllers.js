const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")
const invCont = {}

// Build vehicles by classification view
// Unit 3, activities

invCont.buildByClassificationID = async function (req, res, next) {
    const classification_id = req.params.classificationID
    const data = await invModel.getInventoryByClassificationID(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification", {
        title: className + "vehicles",
        nav,
        grid,
    })
}

module.exports = invCont