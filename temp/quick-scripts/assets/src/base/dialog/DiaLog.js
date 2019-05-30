(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/dialog/DiaLog.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '152f4tSEnpFMpIEPV7SM8RZ', 'DiaLog', __filename);
// src/base/dialog/DiaLog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DiaLog = /** @class */ (function (_super) {
    __extends(DiaLog, _super);
    function DiaLog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DiaLog.prototype.onLoad = function () {
        this._animation();
    };
    DiaLog.prototype.start = function () {
    };
    DiaLog.prototype.update = function (dt) {
    };
    DiaLog.prototype._animation = function () {
        var node = cc.instantiate(this.loading);
        var Animation = this.node.getComponent(cc.Animation);
        Animation.play("login");
    };
    __decorate([
        property(cc.Prefab)
    ], DiaLog.prototype, "loading", void 0);
    DiaLog = __decorate([
        ccclass
    ], DiaLog);
    return DiaLog;
}(cc.Component));
exports.default = DiaLog;

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
        //# sourceMappingURL=DiaLog.js.map
        