const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const { jwtAuthMiddleware } = require('../jwt');

// route to create todos
router.post('/todos', async(req, res) => {
    try{
          const newTodo = new Todo(req.body);
          const response = await newTodo.save();
          console.log('Todo saved');

          res.status(200).json({message: 'Todo created', response: response});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to get todos
router.get('/get/todos', async(req, res) => {
    try{
            const todos = await Todo.find()
            .populate("user", "id first_name last_name email");

        res.status(200).json({
            success: true,
            message: "Todos fetched successfully",
            count: todos.length,
            data: todos
        });

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to get parameterized todos status -> completed or pending 
/*router.get('/todos/:status', async(req, res) => {
    try{
           const statusType = req.params.status;
           if( statusType == 'completed' || statusType == 'pending'){
                const response = await Todo.find({status: statusType});
                console.log('response fetched');
                res.status(200).json({response});
           } else {
                return res.status(404).json({message: 'Invalid todo status type'});
           }

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})*/

// route to update in todos
router.put('/todos/:id', async(req, res) => {
    try{
           const todoId = req.params.id;
           const updatedTodoData = req.body;
           const response = await Todo.findByIdAndUpdate(todoId, updatedTodoData, {
            new: true,
            runvalidators: true,
           })
           if(!response){
                return res.status(404).json({error: 'Todo not found'});
           }
           
           res.status(200).json({message: 'Todo updated successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to delete todos
router.delete('/todos/:id', jwtAuthMiddleware, async(req, res) => {
    try{
           const todoId = req.params.id;
           const response = await Todo.findByIdAndDelete(todoId);
           if(!response){
                return res.status(404).json({error: 'Todo not found'});
           }
           
           res.status(200).json({message: 'Todo Deleted'});
           
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/todos/search', async(req, res) => {
    try{
            const { keyword } = req.query;
            if(!keyword){
                 return res.status(400).json({message: 'keyword is required'});
            }

            const todos = await Todo.find({
                $or: [
                    {
                        title: {
                            $regex: keyword,
                            $options: 'i',
                        }
                    }
                ]
            });

            res.status(200).json({message: 'Search results fetched successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/todos', async(req, res) => {
    try{
            const {
                status,
                priority,
                category,
                sort
            } = req.query;

            const filter = {};

          // filter by status
            if(status){
                filter.status = status;
            }

            // filter by priority
            if(priority){
                filter.priority = priority;
            }

            // filter by category
            if(category){
                filter.category = category;
            }

            // to sort
            var sortOptions = {};
            
            if(sort === 'priority'){
                  sortOptions = {
                     priority: 1
                  };
            }

            else if(sort === 'priority-desc'){
                  sortOptions = {
                      priority: -1
                  };
            }

            else if(sort === 'createdAt'){
                sortOptions = {
                    createdAt: 1
                };
            }

            else if(sort === 'createdAt-desc'){
                sortOptions = {
                    createdAt: -1
                };
            }

            else if(sort === 'title'){
                sortOptions = {
                    title: 1
                };
            }

            else if(sort === 'title'){
                sortOptions = {
                    title: -1
                };
            }

            // mongo query
            const todos = await Todo.find(filter).sort(sortOptions);

            res.status(200).json({ message: 'Todos fetched successfully',
                count: todos.length,
                data: todos
            });

    }catch(err){
        console.log(err);
            res.status(500).json({error: 'Internal server error'});
        }
})

module.exports = router;