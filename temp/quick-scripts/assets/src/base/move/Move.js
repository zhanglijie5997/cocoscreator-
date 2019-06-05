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
     *
     * @example:
     *
     * this._moveTo(1,100,200,this.node)
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
     * @param repeat 是否重复一次，true =>重复一次  false => 无限重复
     * @param num  重复次数
     *
     *  @example:
     *
     *  重复运动5次
     *
     *  this._moveBy(2,100,100,-100,-100,this.node,false,5)
     *
     *  无限运动
     *
     *  this._moveBy(2,100,100,-100,-100,this.node,false)
     */
    Move.prototype._moveBy = function (time, x, y, x1, y1, node, repeat, num) {
        if (num === void 0) { num = 1; }
        var start = cc.moveBy(time, x, y);
        var end = cc.moveBy(time, x1, y1);
        var seq = cc.sequence(start, end);
        if (repeat) {
            var nodeRepeat = cc.repeat(seq, num);
            node.runAction(nodeRepeat);
        }
        else {
            node.runAction(cc.repeatForever(seq));
        }
    };
    /**
     * 闪烁
     * @param duration 时间
     * @param blink    闪烁透明度
     * @param node     闪烁节点
     *
     *  @example:
     *
     *  this._blink(2,5,this.node)
     */
    Move.prototype._blink = function (duration, blink, node) {
        var action = cc.blink(duration, blink);
        node.runAction(action);
    };
    /**
     * 渐显渐隐
     * @param time     运动时间
     * @param opacity  运动透明度
     * @param node     运动节点
     * @param callback 回调执行其他动作，例如加分减分
     *  @example:
     *
     *  this._toogle(2,0.5,this.node)
     */
    Move.prototype._toggle = function (time, opacity, node, callback) {
        var start = cc.fadeTo(time, opacity);
        var end = cc.fadeOut(opacity);
        var seq = cc.sequence(start, end, callback);
        node.runAction(cc.repeatForever(seq));
    };
    /**
     * 追踪目标节点
     * @param node 目标节点
     * @param cc.rect  创建一个矩形
     *
     * @example:
     *
     * this.followAction(this.node)
     */
    Move.prototype.followAction = function (node) {
        var followAction = cc.follow(node, cc.rect(0, 0, 100, 100));
        node.runAction(followAction);
    };
    /**
     *
     * @param time     延迟时间
     * @param position 初始位置
     * @param y        跳起高度
     * @param node     跳起节点
     * @param repeat   是否无限
     */
    Move.prototype.jump = function (time, position, y, node, repeat) {
        var jump;
        if (repeat) {
            // 跳动一次
            jump = cc.jumpTo(time, position, y);
        }
        else {
            // 重复
            jump = cc.jumpBy(time, position, y);
        }
        node.runAction(jump);
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
        