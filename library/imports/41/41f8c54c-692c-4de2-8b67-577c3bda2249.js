"use strict";
cc._RF.push(module, '41f8cVMaSxN4otnV3w72iJJ', 'PlayGame');
// src/scripts/PlayGame.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("../base/move/Move");
var baseScence_1 = require("../base/load/baseScence");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        // 第一章背景图
        _this.bgNode1 = null;
        // 第二张背景图
        _this.bgNode2 = null;
        // 鸭子
        _this.dark = null;
        // 背景图移动速度
        _this.speed = 15;
        // 左侧用户数组
        _this.leftArr = [];
        // 左侧没有站位的坐标
        _this.haveLeftArr = [];
        // 右侧用户数组
        _this.rightArr = [];
        // 右侧没有站位的坐标
        _this.haveRightArr = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var self = this;
        this.backgroundMove(this.bgNode1, this.bgNode2);
        this.getCanvas();
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                self.scheduleOnce(function () {
                    self.animateMove(i + '', i);
                }, i * 0.05);
            };
            for (var i = 0; i < 20; i++) {
                _loop_1(i);
            }
        }, 4);
        // 竖屏适配
        var arr = ["Canvas/header", "Canvas/foot"];
        this._loadScence(arr);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.backgroundMove(this.bgNode1, this.bgNode2);
    };
    /**
     *
     * @param node1 第一张背景图
     * @param node2 第二章背景图
     */
    NewClass.prototype.backgroundMove = function (node1, node2) {
        node1.y += this.speed;
        node2.y += this.speed;
        if (node1.y >= 1920) {
            node1.y = node1.y - 2 * 1920;
        }
        if (node2.y >= 1920) {
            node2.y = node2.y - 2 * 1920;
        }
    };
    /**
     * 获取屏幕宽高，进行左侧右侧坐标均分
     */
    NewClass.prototype.getCanvas = function () {
        var x = cc.find("Canvas").width;
        var y = cc.find("Canvas").height;
        var leftX = (x - 10) / 8;
        var leftY = (y) / 12;
        var X = [], Y = [], XY = [];
        // xy.push({x:leftX / 2 + i * leftX,y: 550 + (i + 1) * (leftY / 2 )});
        // X.push(leftX / 2 + i * leftX);
        for (var j = 0; j < 12; j++) {
            for (var i = 0; i < 8; i++) {
                // Y.push(550 + (j) * (leftY / 2))
                XY.push({ x: (leftX / 2 + i * leftX).toFixed(2), y: (600 + j * (leftY / 2)).toFixed(2) });
            }
        }
        // 大于屏幕一半分配到右边,小于屏幕一半分配到左边
        for (var t = 0; t < XY.length; t++) {
            if (XY[t]["x"] < x / 2) {
                this.leftArr.push(XY[t]);
            }
            else {
                this.rightArr.push(XY[t]);
            }
        }
        // cc.log(this.leftArr, this.rightArr, '44444')
        var zindex = 999;
        var move = new Move_1.default();
        for (var q = 0; q < 40; q++) {
            var empt = cc.instantiate(this.dark);
            empt.name = q + '';
            empt.x = Math.random() * 1000;
            empt.y = 2023;
            empt.parent = cc.find("Canvas/center");
            // 初始化动物进入坐标
            move._moveTo(0.1 * q, XY[q]["x"], XY[q]["y"], empt);
            empt.zIndex = 999 - q;
            // 获取用户占用坑位坐标
            this.pitUser(XY[q], this.leftArr, this.leftArr, this.rightArr);
            this.pitUser(XY[q], this.rightArr, this.leftArr, this.rightArr);
        }
    };
    /**
     * 获取占用坑位的坐标
     */
    NewClass.prototype.pitUser = function (pit, arr, leftArr, rightArr) {
        var word = cc.find("Canvas").width;
        // cc.log(word,'gggg')
        for (var i = 0; i < arr.length; i++) {
            if (pit["x"] === arr[i]["x"] && pit["y"] === arr[i]["y"]) {
                // 将没有占据坑位的坐标push到新数组中
                if (arr[i]["x"] <= cc.find("Canvas").width / 2) {
                    this.haveLeftArr.push(arr.splice(i, 1)[0]);
                }
                else {
                    this.haveRightArr.push(arr.splice(i, 1)[0]);
                }
                // 将没有占据坑位的坐标从数组中删除
                // arr.splice(i, 1);
                // cc.log(arr.splice(i,1))
            }
        }
        // cc.log(this.notLeftArr, this.notRightArr, 'ggg',this.leftArr,this.rightArr)
    };
    /**
     * @param name    被移动的对象的名字
     */
    NewClass.prototype.animateMove = function (name, num) {
        var word = cc.find("Canvas/center").width;
        var child = cc.find("Canvas/center").children;
        for (var i = 0; i < child.length; i++) {
            if (child[i]["name"] === name) {
                // 左侧坐标移动
                var x = child[i]["x"].toFixed(2);
                var y = child[i]["y"].toFixed(2);
                if (child[i]["x"] <= word / 2) {
                    cc.log(child[i]["x"], child[i]["y"], 111);
                    for (var q = 0; q < this.haveLeftArr.length; q++) {
                        if (this.haveLeftArr[q]["x"] === x && this.haveLeftArr[q]["y"] === y) {
                            this.leftArr.push(this.haveLeftArr.splice(q, 1)[0]);
                            this._moveTo(0.5, this.rightArr[num]["x"], this.rightArr[num]["y"], child[i]);
                        }
                    }
                }
                // 右侧坐标移动
                else {
                    for (var j = 0; j < this.haveRightArr.length; j++) {
                        if (this.haveRightArr[j]["x"] === x && this.haveRightArr[j]["y"] === y) {
                            cc.log(j);
                            this.rightArr.push(this.haveRightArr.splice(j, 1)[0]);
                            this._moveTo(0.5, this.leftArr[num]["x"], this.leftArr[num]["y"], child[i]);
                        }
                    }
                    cc.log(child[i]["x"].toFixed(2), child[i]["y"].toFixed(2), 222, this.haveRightArr);
                }
                child[i]["zIndex"] = -i;
            }
        }
    };
    NewClass.prototype._loadScence = function (arr) {
        var canvas = new baseScence_1.default();
        canvas._baseScence(arr, 1080);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "canvasNode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bgNode1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bgNode2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "dark", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(Move_1.default));
exports.default = NewClass;

cc._RF.pop();