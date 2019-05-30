"use strict";
cc._RF.push(module, '8aa93uSGl9OUqrHLKPFdES6', 'userPhone');
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