"use strict";
cc._RF.push(module, 'c68adOtIoxMbazh5UN87AjY', 'EventBus');
// src/base/EventBus/EventBus.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.events = null;
        this.events = this.events || new Object();
    }
    EventBus.prototype.$emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var e;
        e = this.events[type];
        // 查看这个type的event有多少个回调函数，如果有多个需要依次调用。
        if (Array.isArray(e)) {
            for (var i = 0; i < e.length; i++) {
                // cc.log(e[i], 'hhh')
                e[i].apply(this, args);
            }
        }
        else {
            e[0].apply(this, args);
        }
    };
    EventBus.prototype.$on = function (type, fun) {
        var e = this.events[type];
        if (!e) { //如果从未注册过监听函数，则将函数放入数组存入对应的键名下
            this.events[type] = [fun];
        }
        else { //如果注册过，则直接放入
            e.push(fun);
        }
    };
    EventBus.prototype.$off = function (type, fun) {
        var e = this.events[type];
        var KEY = Object.keys(this.events);
        var slice1;
        for (var i = 0; i < KEY.length; i++) {
            if (KEY[i] === type) {
                cc.log(KEY[i], '5555');
                slice1 = KEY[i];
            }
        }
        delete (this.events[slice1]);
    };
    return EventBus;
}());
var eventBus = new EventBus();
exports.default = eventBus;

cc._RF.pop();