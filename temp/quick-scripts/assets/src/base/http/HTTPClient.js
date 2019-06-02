(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/http/HTTPClient.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b3ea8xGDKtJvKG6RWbmtT4+', 'HTTPClient', __filename);
// src/base/http/HTTPClient.ts

Object.defineProperty(exports, "__esModule", { value: true });
var HTTP_1 = require("./HTTP");
var HTTPClient = /** @class */ (function () {
    function HTTPClient() {
    }
    /**
     * eg:支付—获取支付数据
     *
     */
    HTTPClient.prototype._data = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HTTP_1.default.Ajax("Gamerole/index", "POST", { page: 1 })
                            .then(function (res) {
                            console.log(res, 'tttt');
                            return res;
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    HTTPClient.instance = new HTTPClient();
    return HTTPClient;
}());
exports.default = HTTPClient.instance;

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
        //# sourceMappingURL=HTTPClient.js.map
        