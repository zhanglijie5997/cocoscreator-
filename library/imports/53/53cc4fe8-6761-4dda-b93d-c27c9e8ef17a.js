"use strict";
cc._RF.push(module, '53cc4/oZ2FN2rk9wnyejvF6', 'homt');
// scripts/map/homt.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("../../src/base/move/Move");
var LoadScene_1 = require("../../src/base/load/LoadScene");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var homt = /** @class */ (function (_super) {
    __extends(homt, _super);
    function homt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 子弹
        _this.bullet = null;
        // 子弹对象池
        _this.bulletsPool = new cc.NodePool("bullets");
        // 人物节点
        _this.peopleColl = null;
        _this.loadMoreRes = new LoadScene_1.default();
        return _this;
    }
    homt.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._getBullets();
                this.createTower();
                this._lookLoadSuccess();
                return [2 /*return*/];
            });
        });
    };
    homt.prototype.start = function () { };
    // update(dt:number) {}
    homt.prototype.onDestroy = function () {
    };
    // 查看资源是否批量加载完成
    homt.prototype._lookLoadSuccess = function () {
        this.loadMoreRes.loadMoreRes("audio", this._loadCallback);
    };
    // 加载资源回调
    homt.prototype._loadCallback = function (err, assets, urls) {
        if (err)
            throw err;
        cc.log(assets, 99999);
    };
    // 创建塔防
    homt.prototype.createTower = function () {
        var peopleTower = cc.instantiate(this.peopleColl);
        peopleTower.parent = cc.find("Canvas");
    };
    // 创建子弹
    homt.prototype._createBullets = function () {
        for (var i = 0; i < 100; i++) {
            var temp = cc.instantiate(this.bullet);
            this.bulletsPool.put(temp);
        }
    };
    // 取出子弹
    homt.prototype._getBullets = function () {
        this._createBullets();
        var temp = this.bulletsPool.get();
        /*  temp.x = 0;
 
         temp.y = 0; */
        // temp.parent = cc.find('Canvas/fort');
        var x = temp.x, y = temp.y;
    };
    __decorate([
        property(cc.Prefab)
    ], homt.prototype, "bullet", void 0);
    __decorate([
        property(cc.Prefab)
    ], homt.prototype, "peopleColl", void 0);
    homt = __decorate([
        ccclass
    ], homt);
    return homt;
}(Move_1.default));
exports.default = homt;

cc._RF.pop();