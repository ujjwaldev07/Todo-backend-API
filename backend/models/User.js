const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    first_name: {
        type: String,
        lowercase: true,
        trim: true,
    },
    last_name: {
        type: String,
        lowercase: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    contact: {
        type: Number,
        unique: true,
        maxlength: 10,
    },
    password: {
        type: String,
        unique: true,
        maxlength: 100,
    },
})

userSchema.pre('save', async function(next){
     const user = this;

     if(!user.isModified('password')) return next();

     try{
              const salt = await bcrypt.genSalt(5);
              const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
            

     }catch(err){
        throw(err);
     }
})

userSchema.methods.comparePassword = async function(candidatePassword){
    try{
          const hashedPassword = this.password;
          if(!candidatePassword || !hashedPassword) return false;
          const isMatch = await bcrypt.compare(candidatePassword, hashedPassword);
          return isMatch;
    }catch(err){
        throw err;
    }
}

const User = mongoose.model('User', userSchema);
module.exports = User;