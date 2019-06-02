(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Index/collision.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd3dc3oiD7tAz6H/QKFpeDXz', 'collision', __filename);
// scripts/Index/collision.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var collision = /** @class */ (function (_super) {
    __extends(collision, _super);
    function collision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 0;
        _this.pool = null;
        return _this;
    }
    collision.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    };
    collision.prototype.update = function (dt) {
        // cc.log(this.node,9999)
    };
    collision.prototype.reuse = function (pool) {
    };
    collision.prototype.onCollisionEnter = function (other, self) {
        // console.log(`碰撞${other}  : ${self}`);
        var hart = cc.find("Canvas/harts").children;
        if (hart.length >= 0) {
            this.num++;
            hart.splice(-1);
        }
        cc.log(this.num, 777);
        if (this.num > 5) {
            // console.log(`gameover`)
        }
    };
    collision = __decorate([
        ccclass
    ], collision);
    return collision;
}(cc.Component));
exports.default = collision;

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
        //# sourceMappingURL=collision.js.map
        