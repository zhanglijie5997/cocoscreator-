(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/touchEvent/TouchEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '753c8+yQ4xPK6oW/L3Ybo8s', 'TouchEvent', __filename);
// src/base/touchEvent/TouchEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEnmu_1 = require("./enum/TouchEnmu");
var TouchEvent = /** @class */ (function (_super) {
    __extends(TouchEvent, _super);
    function TouchEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchEvent.prototype.onLoad = function () { };
    // start() {}
    // update(dt:number) {}
    TouchEvent.prototype.onDestroy = function () { };
    /**
     * 点击事件封装
     * @param event 点击事件按钮名称
     */
    TouchEvent.prototype.touch = function (event) {
        var map = new Map([
            ["start", function () {
                    cc.log(TouchEnmu_1.TouchEnmu.touchend);
                }],
            ["move", function () {
                }],
            ["end", function () { }],
        ]);
        map.get(event)();
    };
    TouchEvent = __decorate([
        ccclass
    ], TouchEvent);
    return TouchEvent;
}(cc.Component));
exports.default = TouchEvent;

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
        //# sourceMappingURL=TouchEvent.js.map
        