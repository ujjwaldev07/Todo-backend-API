const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { jwtAuthMiddleware, generateToken } = require('../jwt');

// route to create User
router.post('/signup', async(req, res) => {
    try{
          const newUser = new User(req.body);
          const response = await newUser.save();
          console.log('User saved');
   
           const payload = {
             id: response.id,
             first_name: response.first_name,
             last_name: response.last_name
           }
           console.log(JSON.stringify(payload));
           const token = generateToken(payload);
           console.log("Token is: ", token);

          res.status(200).json({message: 'User created', response: response, token: token});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to login User
router.post('/login',  async(req, res) => {
    try{
          const { email, password } = req.body;

          const user = await User.findOne({email: email});
          if(!user ||(!await user.comparePassword(password))){
                return res.status(403).json({ message: 'Invalid email and password'});
            }
             
            const payload = {
             id: User.id,
             first_name: User.first_name,
             last_name: User.last_name
           }
           console.log(JSON.stringify(payload));
           const token = generateToken(payload);
           res.json({token: token, message: 'Login successfull'})

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to Get User
router.get('/get/users', jwtAuthMiddleware, async(req, res) => {
    try{
            const getUsers = await User.find();
            console.log('User fetched');

            res.status(200).json({ success: true, getUsers: getUsers });

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to Update User
router.put('/:id', jwtAuthMiddleware, async(req, res) => {
    try{
           const userId = req.params.id;
           const updatedUserData = req.body;
           const response = await User.findByIdAndUpdate(userId, updatedUserData, {
            new: true,
            runvalidators: true,
           })
           if(!response){
                return res.status(404).json({error: 'User not found'});
           }
           
           res.status(200).json({message: 'User updated successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// route to Delete User
router.delete('/:id', jwtAuthMiddleware, async(req, res) => {
    try{
           const userId = req.params.id
           const response = await User.findByIdAndDelete(userId);
           if(!response){
                return res.status(404).json({error: 'User not found'});
           }
           
           res.status(200).json({message: 'User Deleted'});
           
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;