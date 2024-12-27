"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const config_1 = require("../config/config");
class AuthService {
    register(email_1, password_1) {
        return __awaiter(this, arguments, void 0, function* (email, password, role = 'user') {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const user = yield user_model_1.UserModel.create({
                email,
                password: hashedPassword,
                role
            });
            const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, config_1.config.jwtSecret, { expiresIn: '24h' });
            return { token, user: { email: user.email, role: user.role } };
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.UserModel.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }
            const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!isValidPassword) {
                throw new Error('Invalid password');
            }
            const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, config_1.config.jwtSecret, { expiresIn: '24h' });
            return { token, user: { email: user.email, role: user.role } };
        });
    }
}
exports.AuthService = AuthService;
