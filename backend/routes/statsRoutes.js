const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/stats', async(req, res) => {
    try{
           // total todos
           const totalTodos = await Todo.countDocuments();
           
           // pending todos
           const pendingTodos = await Todo.countDocuments({
                status: 'pending'
           });

           // completed todos
           const CompletedTodos = await Todo.countDocuments({
                status: 'completed'
           });

           // High priority todos
           const highPriorityTodos = await Todo.countDocuments({
                priority: 'high'
           });

           // Medium priority todos
           const mediumPriorityTodos = await Todo.countDocuments({
                priority: 'medium'
           });

           // Low priority todos
           const lowPriorityTodos = await Todo.countDocuments({
                 priority: 'low'
           });

           // Category statistics
           const categoryStats = await Todo.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1}
                }
            },
            {
                 $sort: {
                      count: -1
                 }
            }
           ]);

           res.status(200).json({mesage: 'Todo statistics fetched successfully',
            data: {
                  totalTodos,
                  pendingTodos,
                  CompletedTodos,

                  priority: {
                    high: highPriorityTodos,
                    medium: mediumPriorityTodos,
                    low: lowPriorityTodos
                  },

                  categories: categoryStats
            }
           });

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;