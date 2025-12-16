"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (_req, res) => {
    res.send({
        message: 'CloudOpsDeploy Backend API is running',
        developer: 'Simran Anand',
        status: 'OK',
        version: 'v1'
    });
});
app.post('/webhook', (req, res) => {
    var _a, _b;
    console.log('Webhook received:', req.body);
    res.json({
        received: true,
        handledBy: 'Simran Anand',
        repo: ((_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.repository) === null || _b === void 0 ? void 0 : _b.full_name) || 'unknown'
    });
});
app.listen(4000, () => {
    console.log('🚀 Backend running on port 4000 (Developed by Simran Anand)');
});
