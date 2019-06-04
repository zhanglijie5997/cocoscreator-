(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c0df656phCuK9lENG269Yg', 'index', __filename);
// scripts/index.ts

Object.defineProperty(exports, "__esModule", { value: true });
// import animation from "../base/animate/animation";
var Move_1 = require("../src/base/move/Move");
var baseScence_1 = require("../src/base/load/baseScence");
var EventBus_1 = require("../src/base/EventBus/EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        // 运动函数
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.move = new Move_1.default();
        // 人物
        _this.people = null;
        // 子弹
        _this.bullet = null;
        // 对象池
        _this.bulletsPool = null;
        _this.bullets = null;
        // x 位置
        _this.x = 0;
        // y轴位置
        _this.y = 0;
        // 人物宽度
        _this.peopleWidth = 0;
        // 速度
        _this.speed = 200;
        // 背景图
        _this.bg1 = null;
        _this.bg2 = null;
        _this.bgSpeed = 10;
        // 跳起按钮
        _this.btn = null;
        // 碰撞体
        _this.collisionBody = null;
        return _this;
    }
    index.prototype.onLoad = function () {
        this.createPeople();
        this.createBullets();
        this.putNoodPol();
    };
    index.prototype.start = function () {
    };
    index.prototype.update = function (dt) {
        this.bgMove();
    };
    index.prototype.onDestroy = function () {
        this._offPutNoodPol();
    };
    // 扔回对象池
    index.prototype.putNoodPol = function () {
        EventBus_1.default.$on("putNode", this._putNoodPol.bind(this));
        // cc.log(this)
    };
    index.prototype._putNoodPol = function (msg) {
        this.bulletsPool.put(msg);
        // cc.log(this.bulletsPool,888)
    };
    index.prototype._offPutNoodPol = function () {
        EventBus_1.default.$off("putNode", this._putNoodPol.bind(this));
    };
    // 创建人物
    index.prototype.createPeople = function () {
        var _this = this;
        var people = cc.instantiate(this.people);
        people.parent = cc.find("Canvas");
        this.x = people.x;
        this.y = people.y;
        this.peopleWidth = people.children[0].width;
        var animation = people.children[0].getComponent(cc.Animation);
        // cc.log(animation);
        this.peolpleJump(people, people.x, people.y);
        cc.log(cc.find("Canvas").children, 666);
        this.schedule(function () {
            _this.getBullet(people.x, people.y);
            // this.impact();
        }, 0.05);
        this.schedule(function () {
            _this.impact();
        }, 0.3);
    };
    // 创建子弹
    index.prototype.createBullets = function () {
        if (!this.bulletsPool)
            this.bulletsPool = new cc.NodePool("bullet");
        for (var i = 0; i < 100; i++) {
            var temp = cc.instantiate(this.bullet);
            this.bulletsPool.put(temp);
        }
    };
    // 每1秒取出一个子弹
    index.prototype.getBullet = function (peopleX, peopleY) {
        var self = this;
        var oneBullet;
        for (var i = 0; i < 5; i++) {
            oneBullet = this.bulletsPool.get();
        }
        oneBullet.x = peopleX - this.peopleWidth;
        oneBullet.y = peopleY;
        oneBullet.parent = this.bullets;
        var y = oneBullet.y;
        var x = oneBullet.x + this.peopleWidth;
        this.move._moveTo(3, cc.winSize.width, y, oneBullet);
        this.scheduleOnce(function () {
            var remove = cc.removeSelf();
            oneBullet.runAction(remove);
            oneBullet.destroy();
        }, 3);
        if (this.bulletsPool.size() < 5) {
            this.createBullets();
        }
    };
    ;
    // 背景图移动
    index.prototype.bgMove = function () {
        // cc.log(this.bg1.x)
        this.bg1.x = this.bg1.x - this.bgSpeed;
        this.bg2.x = this.bg2.x - this.bgSpeed;
        if (this.bg1.x < -this.bg1.width) {
            this.bg1.x = this.bg1.x + 2 * this.bg1.width;
        }
        if (this.bg2.x < -this.bg1.width) {
            this.bg2.x = this.bg2.x + 2 * this.bg2.width;
        }
    };
    // 监听角色跳起
    index.prototype.peolpleJump = function (node, x, y) {
        var _this = this;
        this.btn.on("touchstart", function () {
            var animate = node.children[0].getComponent(cc.Animation);
            animate.pause("people");
            animate.play("peopleJump");
            // 角色做位移
            _this.move._moveBy(0.3, x, y + 200, x, y - 200, node, true);
            _this.scheduleOnce(function () {
                animate.play("people");
            }, 0.3);
        }, this);
    };
    // 制作随机碰撞体
    index.prototype.impact = function () {
        this.collisionBodyPool();
        var moves = new Move_1.default();
        var getCOllision;
        if (this.collisionBodyNoodPool.size() > 0) {
            getCOllision = this.collisionBodyNoodPool.get();
        }
        else {
            this.collisionBodyPool();
        }
        // x 轴出现位置
        getCOllision.x = cc.winSize.width;
        // y 轴位置随机
        var y = Math.random() * 150;
        if (y > cc.winSize.height) {
            y = Math.random() * 150;
        }
        // y轴出现位置
        getCOllision.y = y;
        getCOllision.parent = cc.find("Canvas/collisiton");
        moves._moveTo(4, -cc.winSize.width / 2 - 43, y, getCOllision);
        this.scheduleOnce(function () {
            var remove = cc.removeSelf();
            getCOllision.runAction(remove);
        }, 4);
        if (this.collisionBodyNoodPool.size() < 10) {
            this.collisionBodyPool();
        }
    };
    // 碰撞体对象池
    index.prototype.collisionBodyPool = function () {
        this.collisionBodyNoodPool = new cc.NodePool("collisionBody");
        for (var i = 0; i < 100; i++) {
            var temp = cc.instantiate(this.collisionBody);
            this.collisionBodyNoodPool.put(temp);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], index.prototype, "people", void 0);
    __decorate([
        property(cc.Prefab)
    ], index.prototype, "bullet", void 0);
    __decorate([
        property(cc.Node)
    ], index.prototype, "bullets", void 0);
    __decorate([
        property(cc.Node)
    ], index.prototype, "bg1", void 0);
    __decorate([
        property(cc.Node)
    ], index.prototype, "bg2", void 0);
    __decorate([
        property(cc.Node)
    ], index.prototype, "btn", void 0);
    __decorate([
        property(cc.Prefab)
    ], index.prototype, "collisionBody", void 0);
    index = __decorate([
        ccclass
    ], index);
    return index;
}(baseScence_1.default));
exports.default = index;

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
        //# sourceMappingURL=index.js.map
        