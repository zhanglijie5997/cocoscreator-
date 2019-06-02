"use strict";
cc._RF.push(module, '6d6afslO3VFP73oI4U+U7OZ', 'withBullets');
// scripts/Index/withBullets.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var collision = /** @class */ (function (_super) {
    __extends(collision, _super);
    function collision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pool = null;
        return _this;
    }
    collision.prototype.onLoad = function () {
        // cc.log(this.node,55)
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    };
    collision.prototype.update = function (dt) {
        // cc.log(this.node,9999)
        if (this.node.x > cc.winSize.width / 2) {
            this.pool.put(this.node);
        }
    };
    collision.prototype.reuse = function (pool) {
        this.pool = pool;
    };
    collision.prototype.onCollisionEnter = function (other, self) {
        // console.log(`碰撞${other}  : ${self}`);
        // console.log(`碰撞结束${other}`);
        var remove = cc.removeSelf();
        self.node.runAction(remove);
        // this.pool.put(this.node)
    };
    collision = __decorate([
        ccclass
    ], collision);
    return collision;
}(cc.Component));
exports.default = collision;

cc._RF.pop();