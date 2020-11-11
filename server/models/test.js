"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __text;
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor(text) {
        __text.set(this, void 0);
        __classPrivateFieldSet(this, __text, text);
    }
    get text() {
        return __classPrivateFieldGet(this, __text);
    }
    set text(text) {
        __classPrivateFieldSet(this, __text, text);
    }
}
exports.default = Test;
__text = new WeakMap();
//# sourceMappingURL=test.js.map