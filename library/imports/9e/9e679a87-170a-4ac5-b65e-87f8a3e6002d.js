"use strict";
cc._RF.push(module, '9e679qHFwpKxbZeh/ij5gAt', 'LoadeImg');
// src/base/load/LoadeImg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadeImg = /** @class */ (function (_super) {
    __extends(LoadeImg, _super);
    function LoadeImg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param path        路径
     * @param spriteFrame 替换的图集名称
     * @param type        如果加载为网络资源不带后缀，需传入图片类型
     * @example
     *       this.loadImg("https://www.baidu.com",img) // 本地图片
     *       this.loadImg("https://www.baidu.com",img) // 网络带后缀
     *       this.loadImg("https://www.baidu.com",img,"png ") // 网络不带后缀
     */
    LoadeImg.prototype.loadImg = function (path, spriteFrame, type) {
        if (type === void 0) { type = 'png'; }
        var reg = /\.png$/g;
        var loadReg = /resources/g;
        if (loadReg.test(path)) {
            // 加载本地文件
            this._loadeResFn(path, spriteFrame, 1);
        }
        else {
            // 加载网络图片
            if (reg.test(path)) {
                // 带png的
                this._loadeResFn(path, spriteFrame, 2);
            }
            else {
                // 不带后缀的
                this._loadeResFn(path, spriteFrame, 2, type);
            }
        }
    };
    /**
     *
     * @param path  路径
     * @param type  释放资源类型
     * @example
     *    this.destoryLoad("assets/src/images",cc.SpriteFrame)
     */
    LoadeImg.prototype.destoryLoad = function (path, type) {
        cc.loader.releaseRes(path, type);
        cc.loader.releaseRes(path);
    };
    /**
     *
     * @param path         路径
     * @param spriteFrame  替换图集名称
     * @param type         类型 （1本地 or 2网络带.png or 3网络不带.png）
     * @param imgType      图片类型
     */
    LoadeImg.prototype._loadeResFn = function (path, _spriteFrame, type, imgType) {
        if (type === void 0) { type = 1; }
        if (imgType === void 0) { imgType = 'png'; }
        if (type === 1) {
            // 加载本地图片
            cc.loader.loadRes(path, function (err, textTrue) {
                if (err)
                    throw err;
                var newSpriteFrame = new cc.SpriteFrame(textTrue);
                _spriteFrame = newSpriteFrame;
            });
        }
        else if (type === 2) {
            // 加载远程带png 图片
            cc.loader.load(path, function (err, textTrue) {
                if (err)
                    throw err;
                var newSpriteFrame = new cc.SpriteFrame(textTrue);
                _spriteFrame = newSpriteFrame;
            });
        }
        else if (type === 3) {
            // 加载远程不带png图片
            cc.loader.load({ url: path, type: imgType }, function (err, textTrue) {
                if (err)
                    throw err;
                var newSpriteFrame = new cc.SpriteFrame(textTrue);
                _spriteFrame = newSpriteFrame;
            });
        }
    };
    LoadeImg = __decorate([
        ccclass
    ], LoadeImg);
    return LoadeImg;
}(cc.Component));
exports.default = LoadeImg;

cc._RF.pop();