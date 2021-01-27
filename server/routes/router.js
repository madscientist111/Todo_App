const express = require('express');
const route = express.Router();

const services = require('../services/render');

/*
- @description Root Route
- @method GET /
*/

// What we want to see on the page
route.get('/',services.homeRoutes);

/*
- @description add tasks
- @method GET /add-tasks
*/
route.get('/add-task',services.add_task);

/*
- @description to update tasks
- @method GET /update-task
*/
route.get('/update-task',services.update_task);

module.exports = route;