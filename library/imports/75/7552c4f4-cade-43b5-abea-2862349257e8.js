"use strict";
cc._RF.push(module, '7552cT0yt5DtavqKGI0klfo', 'peopleMove');
// scripts/map/peopleMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 敌人
        _this.enemy = null;
        // 敌人对象池
        _this.enemyPool = new cc.NodePool("enemy");
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        // 每0.5s创建一个敌人
        this.schedule(function () {
            _this._scheduleFn();
            // cc.log(`定时器取消`)
        }, 0.8);
        if (this.enemyPool.size() < 95) {
            this.unschedule(this._scheduleFn);
        }
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    // 定时器回调
    NewClass.prototype._scheduleFn = function () {
        this.getEnemy();
    };
    // 创建敌人
    NewClass.prototype.createEnemy = function () {
        for (var i = 0; i < 100; i++) {
            var temp = cc.instantiate(this.enemy);
            this.enemyPool.put(temp);
        }
    };
    // 从对象池取出敌人
    NewClass.prototype.getEnemy = function () {
        this.createEnemy();
        var newEnemy = this.enemyPool.get();
        newEnemy.parent = cc.find("Canvas/header");
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "enemy", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();