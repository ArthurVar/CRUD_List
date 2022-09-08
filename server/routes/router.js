const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');



/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add contacts
 *  @method GET /add-contact
 */
route.get('/add-contact', services.add_contact)

/**
 *  @description for update contact
 *  @method GET /update-contact
 */
route.get('/update-contact', services.update_contact)

/**
 *  @description for view contact
 *  @method GET /view-contact
 */
route.get('/view-contact', services.view_contact)


// API
route.post('/api/contacts', controller.create);
route.get('/api/contacts', controller.find);
route.put('/api/contacts/:id', controller.update);
route.delete('/api/contacts/:id', controller.delete);


module.exports = route