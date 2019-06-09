"use strict";
cc._RF.push(module, '94e1flm3exDDZ3m30hdTXVr', 'baseScence');
// src/base/load/baseScence.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var baseScence = /** @class */ (function (_super) {
    __extends(baseScence, _super);
    function baseScence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    baseScence.prototype.onLoad = function () { };
    // start() {}
    // update(dt:number) {}
    baseScence.prototype.onDestroy = function () { };
    /**
     * 屏幕适配解决方案,适配竖屏
     * @param arr       需要适配的数组选项
     * @param widthSize 设计图尺寸
     */
    baseScence.prototype._baseScence = function (arr, widthSize) {
        cc.log(cc.director, cc.director.getWinSize().width);
        // 获取视图大小宽高，根据设计图比例做适配
        if (cc.director.getWinSize().height / cc.director.getWinSize().width - 16 / 9 > 0.1) {
            for (var i = 0; i < arr.length; i++) {
                cc.find(arr[i]).scaleX = cc.director.getWinSize().width / widthSize;
            }
        }
    };
    /**
     * 竖屏适配方案二
     */
    baseScence.prototype.init = function () {
        var frameSize = cc.view.getFrameSize();
        var bFitWidth = (frameSize.width / frameSize.height) < (750 / 1334);
        cc.Canvas.instance.fitWidth = bFitWidth;
        cc.Canvas.instance.fitHeight = !bFitWidth;
    };
    baseScence = __decorate([
        ccclass
    ], baseScence);
    return baseScence;
}(cc.Component));
exports.default = baseScence;

cc._RF.pop();