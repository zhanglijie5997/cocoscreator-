(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/http/websocket/websocket.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8d39aDYbitMgLJWQhNepooz', 'websocket', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=websocket.js.map
        