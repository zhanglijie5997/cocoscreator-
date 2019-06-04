(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/map/removePeople.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd35fcsbsV9KeYxchuVRXwu8', 'removePeople', __filename);
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
            var move = cc.removeSelf();
            _this.node.destroy();
        }, this);
    };
    removePeople = __decorate([
        ccclass
    ], removePeople);
    return removePeople;
}(cc.Component));
exports.default = removePeople;

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
        //# sourceMappingURL=removePeople.js.map
        