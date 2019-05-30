(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/userPhoneMsg/userPhone.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8aa93uSGl9OUqrHLKPFdES6', 'userPhone', __filename);
// src/base/userPhoneMsg/userPhone.ts

var userPhone = /** @class */ (function () {
    function userPhone(_online) {
        this.online = _online;
    }
    Object.defineProperty(userPhone.prototype, "_online", {
        /**
         * 读取接口值
         */
        get: function () {
            return this.online;
        },
        /**
         * @param newOnline 设置网络
         */
        set: function (newOnline) {
            this.online = newOnline;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取用户网络状态
     */
    userPhone.prototype._getUserOnline = function () {
        this.online = navigator.onLine;
    };
    return userPhone;
}());

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
        //# sourceMappingURL=userPhone.js.map
        