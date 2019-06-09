(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/carams/carams.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4e26brbO9BBOZXOLXUpdOnc', 'carams', __filename);
// scripts/carams/carams.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var plear_1 = require("./plear");
var Carams = /** @class */ (function (_super) {
    __extends(Carams, _super);
    function Carams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.player = new plear_1.default();
        return _this;
    }
    Carams.prototype.onLoad = function () {
    };
    Carams.prototype.start = function () { };
    // update(){}
    Carams.prototype.onDestroy = function () { };
    Carams.prototype.notify = function (plevalue) {
        if (CC_EDITOR)
            return;
        this.upshow();
    };
    Carams.prototype.upshow = function () {
    };
    __decorate([
        property({
            type: cc.Label, displayName: "选择文字", tooltip: "选择文字",
        })
    ], Carams.prototype, "text", void 0);
    __decorate([
        property(plear_1.default)
    ], Carams.prototype, "player", void 0);
    Carams = __decorate([
        ccclass
    ], Carams);
    return Carams;
}(cc.Component));
exports.default = Carams;

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
        //# sourceMappingURL=carams.js.map
        