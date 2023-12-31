"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schoolModel = new mongoose_1.Schema({
    schoolName: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    token: {
        type: String,
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("schools", schoolModel);
