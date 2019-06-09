(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/touchEvent/TouchEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '753c8+yQ4xPK6oW/L3Ybo8s', 'TouchEvent', __filename);
// src/base/touchEvent/TouchEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEvent = /** @class */ (function (_super) {
    __extends(TouchEvent, _super);
    function TouchEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 点击事件封装
     * @param event      点击事件按钮名称
     * @param node       触发事件的节点
     * @param callback   执行的回调函数
     * @param addListren 监听还是移除监听[true:监听,false:移除监听]
     * @example
     *      this.touch("touchstart",this.node,this.fn)       // 监听事件
     *      this.touch("touchstart",this.node,this.fn,false) // 移除监听
     */
    TouchEvent.prototype.touch = function (event, node, callback, addListren) {
        var _this = this;
        if (addListren === void 0) { addListren = true; }
        var map = new Map([
            [event, function () { _this._touchFn(event, callback, node, addListren); }]
        ]);
        return map.get(event)();
    };
    /**
     *
     * @param type 点击事件类型
     * @param fn   回调函数
     * @param node 执行的node节点
     */
    TouchEvent.prototype._touchFn = function (type, fn, node, addListren) {
        return addListren ? (node.on(type, fn, this)) : (node.off(type, fn, this));
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
        