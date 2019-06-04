(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/http/HTTP.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a94074kEIlGWYEe83Tlfl8p', 'HTTP', __filename);
// src/base/http/HTTP.ts

Object.defineProperty(exports, "__esModule", { value: true });
var HTTP = /** @class */ (function () {
    function HTTP() {
    }
    /**
     * 超时处理
     */
    HTTP.prototype.TimeOut = function (fecthPromise, time) {
        if (time === void 0) { time = 5000; }
        var abort = null;
        var abortPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                abort = function () {
                    return reject({
                        code: 504,
                        message: "请求超时！"
                    });
                };
            }, time);
        });
        // 最快出结果的promise 作为结果
        var resultPromise = Promise.race([fecthPromise, abortPromise]);
        return resultPromise.then(function (res) {
            // console.log(res, '_______________________');
            return res;
        });
    };
    /**
     * fetch 请求
     */
    HTTP.prototype.Fetch = function (url, type, _a) {
        if (type === void 0) { type = "GET"; }
        var data = __rest(_a, []);
        /**
         * data 数据 处理
         */
        var Url = 'http://localhost:8091/api/';
        var formData = new FormData();
        var KEY = Object.keys(data);
        var VAL = Object.values(data);
        for (var i = 0; i < KEY.length; i++) {
            formData.append(KEY[i], VAL[i]);
        }
        return fetch(Url + url, {
            method: type,
            body: formData
        }).then(function (res) { return res.json(); });
    };
    /**
     * 网络请求调用此接口
     * @param url      地址
     * @param type     类型
     * @param param2   数据
     */
    HTTP.prototype.Ajax = function (url, type, _a) {
        var data = __rest(_a, []);
        return this.TimeOut(this.Fetch(url, type, __assign({}, data)));
    };
    HTTP.instance = new HTTP();
    return HTTP;
}());
exports.default = HTTP.instance;

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
        //# sourceMappingURL=HTTP.js.map
        