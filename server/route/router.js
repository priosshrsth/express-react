"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const reqs = [];
// middleware to use for all requests
router.use((req, res, next) => {
    const date = new Date();
    reqs.push({
        date: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
        method: req.method,
        url: `${req.baseUrl}${req.url}`,
        body: req.body,
    });
    const len = reqs.length;
    // do logging
    console.table(reqs.length > 10 ? reqs.slice(len - 10, len).reverse() : reqs.reverse());
    next(); // make sure we go to the next routes and don't stop here
});
exports.default = router;
//# sourceMappingURL=router.js.map