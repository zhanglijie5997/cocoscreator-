"use strict";
cc._RF.push(module, 'd35fcsbsV9KeYxchuVRXwu8', 'removePeople');
// scripts/map/removePeople.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var removePeople = /** @class */ (function (_super) {
    __extends(removePeople, _super);
    function removePeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    removePeople.prototype.onLoad = function () {
        this._removeSelf();
    };
    removePeople.prototype.start = function () { };
    // update(dt:number) {}
    removePeople.prototype.onDestroy = function () { };
    removePeople.prototype._removeSelf = function () {
        var _this = this;
        var animation = this.node.getComponent(cc.Animation);
        // animation.
        // cc.log(animation);
        animation.on("finished", function () {
            // cc.log(`动画结束`);
            _this.pool.put(_this.node);
        }, this);
    };
    removePeople = __decorate([
        ccclass
    ], removePeople);
    return removePeople;
}(cc.Component));
exports.default = removePeople;

cc._RF.pop();