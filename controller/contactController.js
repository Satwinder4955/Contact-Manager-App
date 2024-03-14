
// This is asyncHandler we do not need try -catch to catch error if we use this 
const asyncHandler = require('express-async-handler');

// connecting with schema
const Contact = require('../models/contactModel')

// these controllers connect with routers to handle requests and render views (templates) when necessary.

// @description Get all contacts
// @router GET/api/contracts
// @access public 

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @description create all contacts
// @router POST/api/contracts
// @access public 

const createContact = asyncHandler (async(req, res) => {
    console.log( 'This is', req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
      name,  
      email, 
      phone
     })
    res.status(201).json(contact)
})

// @description update all contacts
// @router PUT/api/contracts
// @access public 

const getContact = asyncHandler (async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(201).json(contact)
})

// @description update all contacts
// @router PUT/api/contracts
// @access public 

const updateContact = asyncHandler (async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body,{
        new: true // return the new data instead of the old one
    })
    res.status(201).json(updatedContact)
})
// @description delete all contacts
// @router DELETE/api/contracts
// @access public 

const deleteContact = asyncHandler (async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.remove();
    res.status(201).json(contact);
    console.log('Contact deleted');
});

module.exports = {getContacts, getContact,createContact,updateContact, deleteContact};