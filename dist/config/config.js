"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 4001,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-lobby',
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
};