const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

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

//creating API Route
route.post('/api/tasks',controller.create);
route.get('/api/tasks',controller.find);
route.get('/api/tasks/search',controller.search);
route.put('/api/tasks/:id',controller.update);
route.delete('/api/tasks/:id',controller.delete);

module.exports = route;