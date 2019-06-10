(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/carams/plear.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'af275s7WWNOVKmyHPhUBeDj', 'plear', __filename);
// scripts/carams/plear.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function () {
    function Player() {
        this.name = "zhanglijie";
        this.qq = 1193417780;
        // update (dt) {}
    }
    // onLoad () {}
    Player.prototype.start = function () {
    };
    __decorate([
        property({ displayName: '大掌教' })
    ], Player.prototype, "name", void 0);
    __decorate([
        property({ displayName: '账号' })
    ], Player.prototype, "qq", void 0);
    Player = __decorate([
        ccclass("Player")
    ], Player);
    return Player;
}());
exports.default = Player;

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
        //# sourceMappingURL=plear.js.map
        