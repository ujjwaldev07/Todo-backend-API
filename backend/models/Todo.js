const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
            maxlength: 200,
            lowercase: true,
            trim: true,
        },
        category: {
            type: String,
        },
        status: {
            type: String,
            enum: ["completed", "pending"],
            default: "pending",
        },
        priority: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,

        toJSON: {
            transform: function (doc, ret) {
                ret.createdAt = ret.createdAt.toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                });

                ret.updatedAt = ret.updatedAt.toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                });

                return ret;
            },
        },
    }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;