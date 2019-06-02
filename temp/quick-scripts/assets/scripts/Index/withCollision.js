(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Index/withCollision.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '92226h4vJVE7LYlw5Do/s9r', 'withCollision', __filename);
// scripts/Index/withCollision.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var withCollision = /** @class */ (function (_super) {
    __extends(withCollision, _super);
    function withCollision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 生命值-1
        _this.text = null;
        _this.num = 0;
        return _this;
    }
    withCollision.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        var newNum = (Math.random() * 10).toFixed(0);
        if (+newNum < 0) {
            newNum = (Math.random() * 10).toFixed(0);
        }
        this.num = +(newNum);
        this.text.string = this.num + '';
    };
    withCollision.prototype.onCollisionEnter = function (other, self) {
        // console.log(`碰撞${other}  : ${self}`)
        // cc.log(`物体碰撞123`);
        this.num -= 1;
        this.text.string = this.num + '';
        if (this.num <= 0) {
            var remove = cc.removeSelf();
            this.node.runAction(remove);
        }
    };
    __decorate([
        property(cc.Label)
    ], withCollision.prototype, "text", void 0);
    withCollision = __decorate([
        ccclass
    ], withCollision);
    return withCollision;
}(cc.Component));
exports.default = withCollision;

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
        //# sourceMappingURL=withCollision.js.map
        