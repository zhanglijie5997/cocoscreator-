"use strict";
cc._RF.push(module, '93451Vk4ktP3Y6nUdfhRIXf', 'Home');
// src/scripts/Home.ts

Object.defineProperty(exports, "__esModule", { value: true });
var HTTPClient_1 = require("../base/http/HTTPClient");
var EventBus_1 = require("../base/EventBus/EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HTTPClient_1.default._data()];
                    case 1:
                        data = _a.sent();
                        console.log(data, '55');
                        EventBus_1.default.$emit("change", { data: 1234 });
                        EventBus_1.default.$emit("change1", { data: 12345 });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();