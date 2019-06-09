(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/Interval/Interval.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '31dc6AOz/dA+7/8xWLtk+UR', 'Interval', __filename);
// src/base/Interval/Interval.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Interval = /** @class */ (function (_super) {
    __extends(Interval, _super);
    function Interval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 定时器
     * @param callback 执行的回调函数
     * @param wait     等待时间
     * @param repeat   重复次数
     * @param delay    延迟时间
     * @param clear    清楚定时器条件
     * @example
     *      this.initInterval(this.interval,1); // 执行一个一秒的定时器
     *      this.initInterval(this.interval,1,1,1); // 执行一个一秒的定时器,重复1次,延迟1秒的定时器
     */
    Interval.prototype.initInterval = function (callback, wait, repeat, delay) {
        if (repeat === void 0) { repeat = 1; }
        if (delay === void 0) { delay = 0; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.schedule(function () {
                            callback;
                        }, wait, repeat, delay)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param callback 执行的回调函数
     * @param wait     执行时间
     * @example
     *    this.oneceInterval(this.interval,1)
     */
    Interval.prototype.oneceInterval = function (callback, wait) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scheduleOnce(function () {
                            callback;
                        }, wait)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 清楚定时器
     * @param callback 清楚的回调函数
     * @param type     类型 1: 清楚当前定时器 其他:清除所有 默认为清除当前
     * @example
     *     this.clearInterval(this.interval,1) // 清除当前定时器
     *     this.clearInterval(-1) //清除所有
     */
    Interval.prototype.clearInterval = function (callback, type) {
        if (callback === void 0) { callback = null; }
        if (type === void 0) { type = 1; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.unschedule(callback)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.unscheduleAllCallbacks()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Interval = __decorate([
        ccclass
    ], Interval);
    return Interval;
}(cc.Component));
exports.default = Interval;

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
        //# sourceMappingURL=Interval.js.map
        