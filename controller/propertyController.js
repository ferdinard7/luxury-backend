const Property = require("../model/propertyModel");


const addNewProperty = async(req, res) => {

    const newProperty = new Property(req.body);
  
    try {
       const savedProperty = await newProperty.save();
       res.status(200).json(savedProperty);
    }catch(err) {
      res.status(err).json(err);
      console.log(err);
    }

}

// GET ALL PROPERTIES
const getAllProperties = async(req, res) => {

  try {
     const allProperties = await Property.find({});
     res.status(200).json(allProperties);
  }catch(err) {
    res.status(err).json(err);
    console.log(err);
  }

}

// FIND A PROPERTY  

const getProperty = async (req, res) => {
  try {
     const property = await Property.findById(req.params.id);

     res.status(200).json(property);        
  } catch (err) {
    res.status(500).json(err)
  }
 
}


const getReady = (req, res) => {
   res.send( "WELCOME TO YOUR LUXURY BACKEND")
}



module.exports = {
    addNewProperty,
    getAllProperties,
    getProperty,
    getReady,
}