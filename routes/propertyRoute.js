const express = require("express");
const { addNewProperty, getAllProperties, getProperty, getReady } = require("../controller/propertyController");
const router = express.Router();

router.get("/", getReady);

router.post("/add-property", addNewProperty);

// GET ALL PROPERTIES
router.get("/properties", getAllProperties);

// GET A PARTICULAR PROPERTY
router.get("/property/find/:id", getProperty);




module.exports = router;