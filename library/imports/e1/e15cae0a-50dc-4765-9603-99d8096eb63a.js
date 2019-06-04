"use strict";
cc._RF.push(module, 'e15ca4KUNxHZZYDmdgJbrY6', 'bulletsCollision');
// scripts/map/collision/bulletsCollision.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("../../../src/base/move/Move");
var EventBus_1 = require("../../../src/base/EventBus/EventBus");
var peopleCollision_1 = require("./peopleCollision");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bulletsCollision = /** @class */ (function (_super) {
    __extends(bulletsCollision, _super);
    function bulletsCollision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 创建子弹
        _this.bullet = null;
        // 怪
        _this.people = null;
        _this.data = [];
        _this.peopleCollision = new peopleCollision_1.default();
        return _this;
    }
    bulletsCollision.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        // cc.log(cc.find("Canvas").children,55)
    };
    bulletsCollision.prototype._getPeopleSize = function () {
        EventBus_1.default.$on("peopleSize", this._peopleMsg.bind(this));
    };
    bulletsCollision.prototype._peopleMsg = function (msg) {
        // cc.log(msg)
        // this.x = msg.x;
    };
    bulletsCollision.prototype.onCollisionEnter = function (other, self) {
        return __awaiter(this, void 0, Promise, function () {
            var temp_1, x, y;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!other) return [3 /*break*/, 2];
                        this.data.push(other);
                        temp_1 = cc.instantiate(this.bullet);
                        temp_1.parent = this.node;
                        x = void 0, y = void 0;
                        if (this.data[0].node) {
                            x = this.data[0].node.x;
                            y = this.data[0].node.y;
                        }
                        // cc.log(this.data[0].node, x, y, 55222)
                        return [4 /*yield*/, this._moveTo(1, temp_1.x + x + this.peopleCollision.x / 2, temp_1.y + y + this.peopleCollision.y / 2, temp_1)];
                    case 1:
                        // cc.log(this.data[0].node, x, y, 55222)
                        _a.sent();
                        this.scheduleOnce(function () {
                            temp_1.destroy();
                        }, 1);
                        this.schedule(function () {
                            _this.onCollisionEnter(other, self);
                            // cc.log(111)
                        }, 1);
                        return [3 /*break*/, 3];
                    case 2:
                        this.unschedule(function () {
                            _this.onCollisionEnter(other, self);
                            // cc.log(111)
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    bulletsCollision.prototype.onCollisionExit = function (other, self) {
        // cc.log(other,444)
    };
    bulletsCollision.prototype.start = function () { };
    bulletsCollision.prototype.update = function (dt) {
    };
    bulletsCollision.prototype.onDestroy = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], bulletsCollision.prototype, "bullet", void 0);
    __decorate([
        property(cc.Prefab)
    ], bulletsCollision.prototype, "people", void 0);
    bulletsCollision = __decorate([
        ccclass
    ], bulletsCollision);
    return bulletsCollision;
}(Move_1.default));
exports.default = bulletsCollision;

cc._RF.pop();