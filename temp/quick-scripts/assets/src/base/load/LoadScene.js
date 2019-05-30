(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/base/load/LoadScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '20dc8cQq2lBvJ7pbRULM1eH', 'LoadScene', __filename);
// src/base/load/LoadScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("../EventBus/EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadScene = /** @class */ (function (_super) {
    __extends(LoadScene, _super);
    function LoadScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadScene.prototype.onLoad = function () {
    };
    LoadScene.prototype.start = function () { };
    // update(dt:number) {}
    LoadScene.prototype.onDestroy = function () {
    };
    LoadScene.prototype._loadSuccess = function (err, assets) {
        if (err) {
            throw new Error("Assets error");
        }
        if (assets.loaded) {
            cc.log("\u573A\u666F\u9884\u52A0\u8F7D\u5B8C\u6210");
            EventBus_1.default.$emit("scence", "场景预加载完成");
        }
    };
    /**
     * 资源预加载
     * @param scene 资源名
     */
    LoadScene.prototype._preLoadScence = function (scene) {
        /**
         * Home and PlayGame 是场景，否则是资源
         */
        if (scene === "Home" || scene === "PlayGame") {
            return cc.director.preloadScene(scene, this._load, this._loadSuccess);
        }
        else {
            return cc.loader.loadRes(scene, this._load, this._audioSuccess);
        }
    };
    LoadScene.prototype._load = function () {
        cc.log("\u573A\u666F\u9884\u52A0\u8F7D\u4E2D");
    };
    /**
     *
     * @param scene 预加载场景，进入就调用.场景名称
     */
    LoadScene.prototype._init = function (scene) {
        this._preLoadScence(scene);
    };
    LoadScene.prototype._loadScence = function (scence) {
        return cc.director.loadScene(scence);
    };
    /**
     * 跳转场景
     * @param scence 场景名字
     */
    LoadScene.prototype._nextScence = function (scence) {
        return this._loadScence(scence);
    };
    /**
     * 预加载一个音频
     * @param path 加载路径
     */
    LoadScene.prototype._getPreLoadAudio = function (path) {
        cc.audioEngine.preload(path);
    };
    LoadScene.prototype._loadAudio = function (audio, play) {
        cc.audioEngine.play(audio, play, 1);
    };
    /**
     *
     * @param status 状态
     * @param audio  音频名字
     */
    LoadScene.prototype._audioStatus = function (status, audio) {
        switch (status) {
            case "pauseAll": // 停止所有
                cc.audioEngine.pauseAll();
                break;
            case "resumeAll": // 回复所有
                cc.audioEngine.resumeAll();
                break;
            case "stopAll": // 关闭所有
                cc.audioEngine.stopAll();
                break;
            default:
                break;
        }
    };
    /**
     * 音频资源加载完成
     * @param err     错误信息
     * @param assets  资源加载完成
     */
    LoadScene.prototype._audioSuccess = function (err, assets) {
        if (err) {
            throw new Error("Assets Error");
        }
        if (assets.loaded) {
            EventBus_1.default.$emit("scence", "音频加载完成");
        }
    };
    LoadScene.prototype._audioLoad = function (err, clip) {
        if (!err) {
            cc.audioEngine.play(clip, true, 0.5);
        }
    };
    /**
     *
     * @param url   本地背景音乐地址
     * @param name  开始开始停止,播放音效
     * @param loop   是否循环
     */
    LoadScene.prototype._playBackgroundAudio = function (url, name, loop, num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (name) {
                    case "playMusic": //加载背景音乐
                        cc.loader.loadRes(url, cc.AudioClip, this._audioLoad);
                        break;
                    case "resumeMusic": // 恢复播放背景音乐
                        cc.audioEngine.resumeAll();
                        break;
                    case "stopMusic": // 停止背景音乐
                        cc.audioEngine.stopAll();
                        break;
                    case "pauseMusic": //暂停播放背景音乐
                        cc.audioEngine.pauseMusic();
                        break;
                    case "playEffect": // 播放音效
                        cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                            cc.audioEngine.playEffect(clip, loop);
                        });
                        break;
                    case "pauseAllEffects": // 暂停播放所有音效
                        cc.audioEngine.pauseAllEffects();
                        break;
                    case "resumeAllEffects": // 回复播放所有音效
                        cc.audioEngine.resumeAllEffects();
                        break;
                    default:
                        break;
                }
                this._setAudioVolum(num);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 设置音量
     * @param num 0-1
     */
    LoadScene.prototype._setAudioVolum = function (num) {
        cc.audioEngine.setMusicVolume(num);
    };
    LoadScene = __decorate([
        ccclass
    ], LoadScene);
    return LoadScene;
}(cc.Component));
exports.default = LoadScene;

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
        //# sourceMappingURL=LoadScene.js.map
        