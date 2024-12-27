"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
app.use('/api', movie_routes_1.default);
mongoose_1.default
    .connect(config_1.config.mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`MongoDB URI: ${config_1.config.mongoUri}`);
});
exports.default = app;
