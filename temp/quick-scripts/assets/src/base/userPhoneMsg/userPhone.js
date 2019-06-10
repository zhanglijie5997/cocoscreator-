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
    /**
     * 防抖函数
     * @param fn   回调
     * @param wait 时间
     * @example
     *  preventShake(this.handle,1000)
     */
    userPhone.prototype.preventShake = function (fn, wait) {
        var timer = null;
        return function () {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(fn, wait);
        };
    };
    /**
     * 函数节流
     * @param fn     执行函数
     * @param delay  节流时间
     * @example
     *      this.savingFlow(this.handle,1000)
     */
    userPhone.prototype.savingFlow = function (fn, delay) {
        // 获取执行时间戳
        var oldNow = Date.now();
        return function () {
            var content = this;
            var args = arguments;
            var now = Date.now();
            if (now - oldNow >= delay) {
                fn.apply(content, args);
                oldNow = now;
            }
        };
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
        