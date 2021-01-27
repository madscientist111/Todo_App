var Taskdb = require('../model/model');

//creating and saving new tasks
exports.create = (req,res) => {
    //validating request
    if(!req.body){
        res.status(400).send({message: "Content can't be empty."});
        return;
    }

    //command for new task
    const task = new Taskdb({
        title: req.body.title,
        description: req.body.description,
        targetDate: req.body.targetDate,
        status: req.body.status
    })

    // saving task in the database
    task
        .save(task)
        .then(data => {
            //res.send(data)
            res.redirect("/add-task");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating a create operation"
            })
        })

}

// retrieving all tasks
// or
// retrieving a single task

exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Taskdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found task with id" + id })
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving task with id" + id })
            })
    }
    else{
        Taskdb.find()
            .then(task => {
                res.send(task)
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Error occured while retrieving task information"})
            })
    }
}


//update a new identified task by task id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message: "Data to update can't be empty."});
    }

    //command for new task
    const id = req.params.id;
    Taskdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data => {
            if(!data){
                res
                    .status(404)
                    .send({ message: `Can't update task with ${id}. \n Probable cause: Task Not Added.`})
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating task information" })
        })
}

//Delete a task with specified task id in the request
exports.delete = (req,res) => {
    const id = req.params.id;

        Taskdb.findByIdAndDelete(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: `Can't delete task with ${id}. \n Probable cause: Task not in the list.` })
                }else{
                    res.send({
                        message: "Task was deleted successfully."
                    })
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete task with id = " + id
                })
            })
}

