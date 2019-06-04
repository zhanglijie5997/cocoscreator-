"use strict";
cc._RF.push(module, '7552cT0yt5DtavqKGI0klfo', 'peopleMove');
// scripts/map/peopleMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LoadScene_1 = require("../../src/base/load/LoadScene");
var EventBus_1 = require("../../src/base/EventBus/EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 敌人
        _this.enemy = null;
        // 敌人对象池
        _this.enemyPool = new cc.NodePool("enemy");
        // LIFE-CYCLE CALLBACKS:
        _this.time = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // 初始化对象池
        this.createEnemy();
        // 每0.5s创建一个敌人
        this.schedule(this._scheduleFn, 0.8);
        this._init("audio/background.mp3");
        this._init("index");
        this.preloadCallback();
        // this._preLoadScence("resoures/audio/background.mp3")
    };
    NewClass.prototype.start = function () {
        // this.unschedule(this._scheduleFn)
    };
    // update (dt) {}
    NewClass.prototype.onDestroy = function () {
        this._offPreloadCallback();
    };
    // 预加载资源回调
    NewClass.prototype.preloadCallback = function () {
        EventBus_1.default.$on("scence", this._success.bind(this));
    };
    NewClass.prototype._success = function (msg) {
        cc.log(msg);
    };
    NewClass.prototype._offPreloadCallback = function () {
        EventBus_1.default.$off("scence", this._success.bind(this));
    };
    // 定时器回调
    NewClass.prototype._scheduleFn = function () {
        var self = this;
        this.getEnemy();
        cc.log(this.enemyPool.size(), 777);
        if (this.enemyPool.size() <= 98) {
            this.unscheduleAllCallbacks();
        }
    };
    // 创建敌人
    NewClass.prototype.createEnemy = function () {
        for (var i = 0; i < 100; i++) {
            var temp = cc.instantiate(this.enemy);
            temp.name = i + '';
            // cc.log(temp)
            this.enemyPool.put(temp);
        }
    };
    // 从对象池取出敌人
    NewClass.prototype.getEnemy = function () {
        var newEnemy = this.enemyPool.get();
        newEnemy.parent = this.node;
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "enemy", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(LoadScene_1.default));
exports.default = NewClass;

cc._RF.pop();