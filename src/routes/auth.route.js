"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
class AuthRoutes {
    constructor() {
        this.path = "/api/auth";
        this.router = (0, express_1.Router)();
        this.authController = new controllers_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/signup", (0, middlewares_1.validate)(validators_1.signupSchema), this.authController.postSignup);
        this.router.post("/login", (0, middlewares_1.validate)(validators_1.loginSchema), this.authController.postLogin);
    }
}
exports.default = AuthRoutes;
