(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/map/collision/peopleCollision.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd67fdkwpbNMTaN/Sd5k63VG', 'peopleCollision', __filename);
// scripts/map/collision/peopleCollision.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var peopleCollision = /** @class */ (function (_super) {
    __extends(peopleCollision, _super);
    function peopleCollision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 人物hp
        _this.hp = 1;
        _this.peopleSwich = true;
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    peopleCollision.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.x = this.node.width;
        this.y = this.node.height;
    };
    // 碰撞检测
    peopleCollision.prototype.onCollisionEnter = function (other, self) {
        // cc.log(`${other} ${self}   peng`)
        this.hp -= 1;
        /* this.node.getChildByName("New Node").getComponent(cc.Label).string = this.hp + '';


        if(this.hp <= 0) {

            let move = cc.removeSelf();

            this.node.runAction(move)

        } */
    };
    peopleCollision.prototype.start = function () { };
    // update(dt:number) {}
    peopleCollision.prototype.onDestroy = function () { };
    peopleCollision = __decorate([
        ccclass
    ], peopleCollision);
    return peopleCollision;
}(cc.Component));
exports.default = peopleCollision;

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
        //# sourceMappingURL=peopleCollision.js.map
        