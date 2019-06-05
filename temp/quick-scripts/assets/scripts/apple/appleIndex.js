(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/apple/appleIndex.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '32afbtunBVDeKM9eNlCXeCd', 'appleIndex', __filename);
// scripts/apple/appleIndex.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 用户钱数
        _this.money = null;
        // 投币
        _this.addConintBtn = null;
        // 退币
        _this.backConintBtn = null;
        // 刷新积分按钮
        _this.refreshMoney = null;
        // 积分
        _this.integral = null;
        // 初始化用户拥有钱数
        _this.userMoney = 100;
        // 下注
        _this.addMoney = 0;
        // 给转动的节点添加背景色
        _this.addBg = null;
        // 每次转一个节点
        _this.num = 0;
        // 转动速度
        _this.speed = 0.02;
        // 转动圈数
        _this.turns = 0;
        // 反函数k值
        _this.k = 0.03;
        // 中奖号码
        _this.winnerNum = 15;
        // 速度递减开启
        _this.speedCurd = false;
        // 遮罩，开始游戏后不可点击
        _this.mask = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this._addCoint();
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    NewClass.prototype.onDestroy = function () {
        this._offAddCoint();
    };
    // 投币 or 退币 or 刷新积分
    NewClass.prototype._addCoint = function () {
        // 加币
        var node = cc.find("Canvas/allNode/center/centerMsg");
        // 投币
        this.addConintBtn.on("touchstart", this._getMoney, this);
        // 退币
        this.backConintBtn.on("touchstart", this._getBackCoint, this);
        // 刷新积分
        this.refreshMoney.on("touchstart", this._reFresh, this);
        // 点击减一积分
        var curd = node.getChildByName("alt2");
        curd.on("touchstart", this._curdCoint, this);
        // 点击积分加一
        var add = node.getChildByName("alt3");
        add.on("touchstart", this._addCoints, this);
        // 1-6倍随机
        var oneToSix = node.getChildByName("alt4");
        oneToSix.on("touchstart", this._getOneToSixMoney, this);
        // 8-13倍随机
        var eightToThirteen = node.getChildByName("alt5");
        eightToThirteen.on("touchstart", this._eight, this);
        //  开始游戏
        var playGame = node.getChildByName("start");
        playGame.on("touchstart", this._beginGame, this);
    };
    // 注销所有监听事件
    NewClass.prototype._offAddCoint = function () {
        // 加币
        var node = cc.find("Canvas/allNode/center/centerMsg");
        // 投币
        this.addConintBtn.off("touchstart", this._getMoney, this);
        // 退币
        this.backConintBtn.off("touchstart", this._getBackCoint, this);
        // 刷新积分
        this.refreshMoney.off("touchstart", this._reFresh, this);
        // 点击减一积分
        var curd = node.getChildByName("alt2");
        curd.on("touchstart", this._curdCoint, this);
        // 点击积分加一
        var add = node.getChildByName("alt3");
        add.on("touchstart", this._addCoints, this);
        // 1-6倍随机
        var oneToSix = node.getChildByName("alt4");
        oneToSix.off("touchstart", this._getOneToSixMoney, this);
        // 8-13倍随机
        var eightToThirteen = node.getChildByName("alt5");
        eightToThirteen.off("touchstart", this._eight, this);
        //  开始游戏
        var playGame = node.getChildByName("start");
        playGame.off("touchstart", this._beginGame, this);
    };
    // 点击减一积分
    NewClass.prototype._curdCoint = function () {
        this._userMoneyAdd(1, 1, false);
    };
    // 点击积分加一
    NewClass.prototype._addCoints = function () {
        this._userMoneyAdd(1, 1, true);
    };
    // 1-6倍随机
    NewClass.prototype._getOneToSixMoney = function () {
        var num = +(Math.random() * 10 - 4).toFixed(0);
        if (num < 0) {
            this._getOneToSixMoney();
            return;
        }
        this._userMoneyAdd(num, num, true);
    };
    // 8-13倍随机
    NewClass.prototype._eight = function () {
        var num1 = +(Math.random() * 20).toFixed(0);
        if (num1 > 13 || num1 < 8) {
            this._eight();
            return;
        }
        this._userMoneyAdd(num1, num1, true);
    };
    // 开始游戏
    NewClass.prototype._beginGame = function () {
        if (this.addMoney <= 0) {
            alert("\u8BF7\u5148\u5151\u6362\u79EF\u5206");
            return false;
        }
        // 开始游戏父节点
        var node = cc.find("Canvas/allNode/center/allApple/right");
        // 添加背景色
        var temp = cc.instantiate(this.addBg);
        // 第一个节点
        var satrt = node.children[0];
        temp.parent = satrt;
        this.schedule(this._scheduleFn, this.speed);
        this.mask.active = true;
    };
    // 倒计时回调函数
    NewClass.prototype._scheduleFn = function () {
        // 开始游戏父节点
        var node = cc.find("Canvas/allNode/center/allApple/right");
        // 添加背景色
        var temp = cc.instantiate(this.addBg);
        temp.parent = node.children[this.num];
        // 遍历查询将转过的从节点上删除 ， 给符合的添加背景色
        for (var j = 0; j < node.children.length; j++) {
            if (j === this.num) {
                temp.parent = node.children[this.num];
            }
            else {
                if (node.children[j].getChildByName("addSprite")) {
                    var child = node.children[j].getChildByName("addSprite");
                    child.destroy();
                }
            }
        }
        this.num++;
        if (this.num > 23) {
            this.num = 0;
            if (!this.speedCurd) {
                this.turns += 1;
            }
            cc.log(this.turns);
            // 转4圈之后速度减小
            if (this.turns == 4) {
                // this.turns = 0;
                this.unschedule(this._scheduleFn);
                // this.speedCurd = true;
                /* this.speed = 0.2;

                // 重新执行一个新的定时器
                this.schedule(this._scheduleFn, this.speed)

                */
            }
            // 转完4圈后，速度递减
            if (this.speedCurd) {
                this.unschedule(this._scheduleFn);
                // 每帧开启一个新的定时器
                this._remainingNum();
            }
        }
    };
    // 计算还有多少个完成，给一个函数，用来做减速
    NewClass.prototype._remainingNum = function () {
        this.speed = this.k / (this.winnerNum - this.num);
        cc.log(this.speed, 555);
        this.unschedule(this._scheduleFn);
        // cc.log()
        this.schedule(this._scheduleFn, this.speed);
        cc.log('123', this.turns, this.speed, this.num);
        if (this.num === this.winnerNum) {
            this.unschedule(this._scheduleFn);
        }
    };
    // 投币
    NewClass.prototype._getMoney = function () {
        if (this.userMoney > 0) {
            this.userMoney -= 10;
            this.money.string = this.userMoney + '';
            this.addMoney += 10;
            this.integral.string = this.addMoney + '';
            return;
        }
        if (this.userMoney == 10) {
            alert("余额不足");
            this.userMoney = 0;
            this.money.string = this.userMoney + '';
        }
    };
    // 退币
    NewClass.prototype._getBackCoint = function () {
        cc.log("\u9000\u5E01");
    };
    // 刷新积分
    NewClass.prototype._reFresh = function () {
        this.integral.string = 0 + 0 + "";
        this.money.string = this.userMoney + this.addMoney + '';
    };
    /**
     *
     * @param oldMoney 用户钱数减少
     * @param newMoney 积分增加
     * @param addOrCurd true => 积分增加，钱数减少 false => 积分减少，钱数增加
     */
    NewClass.prototype._userMoneyAdd = function (oldMoney, newMoney, addOrCurd) {
        if (addOrCurd) {
            if (this.userMoney > 0 && this.userMoney > oldMoney) {
                this.userMoney -= oldMoney;
                this.money.string = this.userMoney + '';
                this.addMoney += newMoney;
                this.integral.string = this.addMoney + '';
            }
        }
        else {
            if (this.userMoney > 0 && this.addMoney > 0) {
                this.userMoney += oldMoney;
                this.money.string = this.userMoney + '';
                this.addMoney -= newMoney;
                this.integral.string = this.addMoney + '';
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "money", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "addConintBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "backConintBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "refreshMoney", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "integral", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "addBg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mask", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
        //# sourceMappingURL=appleIndex.js.map
        