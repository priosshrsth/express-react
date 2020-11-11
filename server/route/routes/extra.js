"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const router_1 = __importDefault(require("../router"));
router_1.default
    .route('/extra')
    .get((req, res) => {
    res.json({ username: os_1.userInfo().username });
})
    .post((req, res) => {
    res.json({ text: `This is what you posted: ${req.body.text}` });
})
    .put((req, res) => {
    res.json({ text: `I put this somewhere: ${req.body.text}` });
})
    .delete((req, res) => {
    res.json({ text: `I deleted this one : ${req.body.text}` });
});
exports.default = router_1.default;
//# sourceMappingURL=extra.js.map