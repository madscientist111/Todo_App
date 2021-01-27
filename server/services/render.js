const axios = require('axios');


exports.homeRoutes = (req,res) => {
    //make a get request to /api/tasks
    axios.get('http://localhost:3000/api/tasks')
        .then(function(response){
            console.log(response);
            console.log(typeof response.data);
            res.render('index',{ tasks: response.data});
        })
        .catch(err => {
            res.send(err);
        })

};

exports.add_task = (req,res) => {
    res.render('add_task');
};

exports.update_task = (req,res) => {
    res.render('update_task');
};