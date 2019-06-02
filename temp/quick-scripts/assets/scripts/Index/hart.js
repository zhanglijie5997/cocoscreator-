(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Index/hart.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8a3718wJvlDl52ojPbKTQua', 'hart', __filename);
// scripts/Index/hart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hart = /** @class */ (function (_super) {
    __extends(hart, _super);
    function hart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 用户命
        _this.harts = null;
        _this.num = 0;
        return _this;
        // 开启碰撞检测
        /* private openCollision() {
            cc.director.getCollisionManager().enabled = true;
            cc.director.getCollisionManager().enabledDebugDraw = true;
            cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        }
     */
    }
    hart.prototype.onLoad = function () {
        this.getHartPool();
    };
    // start() {}
    // update() {}
    hart.prototype.onDestroy = function () { };
    // 创建对象池
    hart.prototype.createHartPool = function () {
        this.hartNoodPool = new cc.NodePool();
        for (var i = 0; i < 5; i++) {
            var temp = cc.instantiate(this.harts);
            temp.x = -cc.find("Canvas/harts").width / 2 + 50 * (i + 1);
            temp.y = (cc.find("Canvas/harts").height / 2) - 120;
            this.hartNoodPool.put(temp);
        }
    };
    // 添加进节点
    hart.prototype.getHartPool = function () {
        this.createHartPool();
        for (var i = 0; i < 5; i++) {
            var node = this.hartNoodPool.get();
            node.parent = cc.find("Canvas/harts");
        }
    };
    __decorate([
        property(cc.Prefab)
    ], hart.prototype, "harts", void 0);
    hart = __decorate([
        ccclass
    ], hart);
    return hart;
}(cc.Component));
exports.default = hart;

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
        //# sourceMappingURL=hart.js.map
        