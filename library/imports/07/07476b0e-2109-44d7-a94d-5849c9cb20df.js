"use strict";
cc._RF.push(module, '07476sOIQlE16lNWEnJyyDf', 'Index');
// src/scripts/Index.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("../base/EventBus/EventBus");
var LoadScene_1 = require("../base/load/LoadScene");
var DiaLog_1 = require("../base/dialog/DiaLog");
var Move_1 = require("../base/move/Move");
var baseScence_1 = require("../base/load/baseScence");
var TouchEvent_1 = require("../base/touchEvent/TouchEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.stopBack = null;
        // LIFE-CYCLE CALLBACKS:
        // 加载提示框
        _this.loding = null;
        _this.stop = false;
        return _this;
    }
    Index.prototype.onLoad = function () {
        var touch = new TouchEvent_1.default();
        touch.touch("start");
        EventBus_1.default.$on("change", function (msg) {
            cc.log(msg, 'ggg');
        });
        EventBus_1.default.$on("change1", this._fn);
        this._init("Home");
        this._init("audio/background.mp3");
        // 播放背景音乐
        this._playBackgroundAudio("audio/background.mp3", "playMusic", true, 0.5);
        this._addListrenNode();
        // 竖屏
        this._addListrenScence();
        var arr = ["Canvas/header", "Canvas/foot"];
        this.loadScenece(arr);
    };
    Index.prototype.start = function () {
    };
    // update (dt) {}
    Index.prototype._eventClick = function (event) {
        // cc.log(typeof event)
        var self = this;
        var obj = {
            "stopMusic": function () {
                self._playBackgroundAudio("audio/background.mp3", "resumeMusic", true, 0.5);
            },
            "resumeMusic": function () {
                self._playBackgroundAudio("audio/background.mp3", "resumeMusic", true, 0.5);
            }
        };
        obj[event + '']();
    };
    Index.prototype.onDestroy = function () {
        EventBus_1.default.$off("change", this._fn);
    };
    Index.prototype._data = function () {
        console.log();
    };
    Index.prototype._fn = function (msg) {
        console.log(msg, 'ggg');
    };
    Index.prototype._scenceSuccess = function (msg) {
        cc.log(msg + '100%', 'ggg444555');
    };
    Index.prototype._vibrate = function () {
        if (window.navigator.vibrate) {
            navigator.vibrate([500, 300, 400, 300]);
        }
        else {
            throw new Error("\u60A8\u7684\u8BBE\u5907\u4E0D\u652F\u6301\u9707\u52A8");
        }
    };
    /**
     * 监听控制音乐
     */
    Index.prototype._addListrenNode = function () {
        var self = this;
        this.stopBack.on("click", function () {
            var dialog = new DiaLog_1.default();
            var node = cc.find("Canvas");
            self._vibrate();
            cc.log(1111);
            self.stop = !self.stop;
            cc.log(self.stop, 'ggg');
            if (self.stop) {
                self._playBackgroundAudio("audio/background.mp3", "pauseAllEffects", true, 0.5);
                self._showDiaLog(node);
                var move = new Move_1.default();
            }
            else {
                self._playBackgroundAudio("audio/background.mp3", "resumeAllEffects", true, 1);
                self._showDiaLog(node);
            }
        });
    };
    /**
     * 提示框
     * @param node 插入节点
     */
    Index.prototype._showDiaLog = function (node) {
        var self = this;
        var empt = cc.instantiate(this.loding);
        node.addChild(empt);
        empt.destroy();
        /* this.scheduleOnce(()=>{
            empt.active = false;
        },2) */
    };
    /**
     * 监听场景是否加载完成
     */
    Index.prototype._addListrenScence = function () {
        EventBus_1.default.$on("scence", this._scenceSuccess);
    };
    /**
     * 竖屏适配
     * @param arr 需要适配的节点
     */
    Index.prototype.loadScenece = function (arr) {
        var canvas = new baseScence_1.default();
        // canvas._baseScence(arr,1080)
    };
    __decorate([
        property(cc.Label)
    ], Index.prototype, "label", void 0);
    __decorate([
        property
    ], Index.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Index.prototype, "stopBack", void 0);
    __decorate([
        property(cc.Prefab)
    ], Index.prototype, "loding", void 0);
    Index = __decorate([
        ccclass
    ], Index);
    return Index;
}(LoadScene_1.default));
exports.default = Index;

cc._RF.pop();