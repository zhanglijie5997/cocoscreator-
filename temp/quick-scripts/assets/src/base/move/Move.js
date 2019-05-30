(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/move/Move.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e7df35IBHJIapHoqwi3JDaa', 'Move', __filename);
// src/base/move/Move.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Move = /** @class */ (function (_super) {
    __extends(Move, _super);
    function Move() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Move.prototype.onLoad = function () {
    };
    Move.prototype.start = function () { };
    // update(dt:number) {}
    Move.prototype.onDestroy = function () { };
    /**
     * 单向移动
     * @param time 运动时间
     * @param x    移动的x轴
     * @param y    移动的y轴
     * @param node 移动节点
     */
    Move.prototype._moveTo = function (time, x, y, node) {
        var move = cc.moveTo(time, cc.v2(x, y));
        node.runAction(move);
    };
    /**
     *
     * @param time 时间
     * @param x    初始x坐标
     * @param y    初始y坐标
     * @param x1   移动x1坐标
     * @param y1   移动x2坐标
     * @param node 移动节点
     */
    Move.prototype._moveBy = function (time, x, y, x1, y1, node) {
        var start = cc.moveBy(time, x, y);
        var end = cc.moveBy(time, x1, y1);
        var seq = cc.sequence(start, end);
        node.runAction(cc.repeatForever(seq));
    };
    /**
     * 闪烁
     * @param duration 时间
     * @param blink    闪烁透明度
     * @param node     闪烁节点
     */
    Move.prototype._blink = function (duration, blink, node) {
        var action = cc.blink(2, 10);
        node.runAction(action);
    };
    /**
     * 渐显渐隐
     * @param time     运动时间
     * @param opacity  运动透明度
     * @param node     运动节点
     */
    Move.prototype._toggle = function (time, opacity, node) {
        var start = cc.fadeTo(time, opacity);
        var end = cc.fadeOut(opacity);
        node.runAction(cc.repeatForever(cc.sequence(start, end)));
    };
    Move = __decorate([
        ccclass
    ], Move);
    return Move;
}(cc.Component));
exports.default = Move;

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
        //# sourceMappingURL=Move.js.map
        