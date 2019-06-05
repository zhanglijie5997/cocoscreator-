"use strict";
cc._RF.push(module, '15d94ocJ49HtK88GKgSdSoF', 'apple');
// scripts/apple/apple.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var apple = /** @class */ (function (_super) {
    __extends(apple, _super);
    function apple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 0;
        return _this;
    }
    apple.prototype.onLoad = function () {
        this.btnClick();
    };
    apple.prototype.start = function () {
    };
    // update (dt) {}
    apple.prototype.onDestroy = function () { };
    /**
     * 下排按钮按下事件
     */
    apple.prototype.btnClick = function () {
        this.node.on("touchstart", this._appleBtnClick, this);
        this.node.on("touchstart", function () { }, this);
        this.node.on("touchstart", function () { }, this);
    };
    apple.prototype._appleBtnClick = function () {
        // 对应选择只能压的倍数
        var addMultiple = +this.node.parent.getChildByName("multipleNumber").children[0].getComponent(cc.Label).string;
        this.num += addMultiple;
        if (this.num < addMultiple * 5) {
            this.node.parent.getChildByName("alt1").getComponent(cc.Label).string = this.num + "";
            return;
        }
        alert("\u500D\u6570\u5DF2\u7ECF\u6700\u5927");
    };
    apple = __decorate([
        ccclass
    ], apple);
    return apple;
}(cc.Component));
exports.default = apple;

cc._RF.pop();