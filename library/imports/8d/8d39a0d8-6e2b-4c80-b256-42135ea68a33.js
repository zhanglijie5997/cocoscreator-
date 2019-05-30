"use strict";
cc._RF.push(module, '8d39aDYbitMgLJWQhNepooz', 'websocket');
// src/base/http/websocket/websocket.ts

Object.defineProperty(exports, "__esModule", { value: true });
var webSocket = /** @class */ (function () {
    function webSocket() {
        this.ws = null;
    }
    webSocket.prototype.socket = function () {
        this.ws = new WebSocket("ws://47.107.62.161:8282");
        //  this.ws.onMessage = 
    };
    webSocket.instance = new webSocket();
    return webSocket;
}());
exports.default = webSocket;

cc._RF.pop();