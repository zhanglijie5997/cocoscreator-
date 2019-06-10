"use strict";
cc._RF.push(module, '9404avtINtL8bk9DhYxKKlW', 'Collision');
// src/base/collision/Collision.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collision = /** @class */ (function (_super) {
    __extends(Collision, _super);
    function Collision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collision.prototype.onLoad = function () {
    };
    /**
     * 碰撞回调
     * @param fn   碰撞回调函数
     * @param open 是否开起碰撞盒子模型[默认不开启]
     * @example
     *       this.initCollision(this.handle,true) //开启碰撞盒子模型
     *       this.initCollision(this.handle)      //不开启碰撞盒子模型
     */
    Collision.prototype.initCollision = function (fn, open) {
        this._openCollision(open);
        return fn;
    };
    /**
     * 开启碰撞检测
     * @param box 是否开启碰撞盒子
     */
    Collision.prototype._openCollision = function (box) {
        if (box === void 0) { box = false; }
        var collision = cc.director.getCollisionManager();
        collision.enabled = true;
        // 开启盒子模型
        if (box) {
            collision.enabledDrawBoundingBox = true;
            collision.enabledDebugDraw = true;
        }
    };
    Collision.prototype.onCollisionEnter = function (other, self) {
        this.initCollision;
    };
    Collision = __decorate([
        ccclass
    ], Collision);
    return Collision;
}(cc.Component));
exports.default = Collision;

cc._RF.pop();