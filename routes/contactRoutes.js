const express = require('express');
const router = express.Router();


const {getContacts, getContact,createContact,updateContact, deleteContact} = require('../controller/contactController');
const validToken = require('../middleWare/validateTokenHandler');

//Token
router.use(validToken);

// connecting routes with controller // Require controller modules.
router.route( '/').get(getContacts)    // router.route( '/').get(getContacts).post(createContact);
router.route( '/').post(createContact)
router.route( '/:id').get(getContact)   //router.route( '/:id').get(getContact).put(updateContact).delete(deleteContact)
router.route( '/:id').put(updateContact)
router.route( '/:id').delete(deleteContact)




/*
/////////////////////////////////////////////////this is different/////////////////
// get
router.route( '/').get((req, res) => {
    res.send('get Connecting routers')
    });
    //post - create the record with specified ID and data in req.body
router.route( '/').post((req, res) => {
    res.send('Create contact')
    });
    //get - Get the record with specified ID
router.route( '/:id').get((req, res) => {
    res.send(`Get contact for ${req.params.id}`)
    })
    //put - update the record with specified ID
router.route( '/:id').put((req, res) => {
    res.send(`Update contact for ${req.params.id}`)
    });
    //delete - delete the record with specified ID
router.route( '/:id').delete((req, res) => {
    res.send(`Delete contact for ${req.params.id}`)
    })
  */

module.exports = router;