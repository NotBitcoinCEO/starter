//Needed Resources

const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
const invChecks = require("../utilities/inventory-validation")

// Route to build vehicles by classificationID view
// Unit 3 Activities

router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationID))