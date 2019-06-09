class userPhone {

    // 网络状态
    private online:boolean;
    /**
     * 读取接口值
     */
    get _online(): boolean {
        return this.online
    }

    /**
     * @param newOnline 设置网络
     */
    set _online(newOnline:boolean) {
        this.online = newOnline;
    }
    constructor(_online:boolean) {
        this.online = _online;
    }

    /**
     * 获取用户网络状态
     */
    _getUserOnline() {
        this.online = navigator.onLine;
    }

    /**
     * 防抖函数
     * @param fn   回调
     * @param wait 时间
     * @example
     *  preventShake(this.handle,1000)
     */
    public preventShake(fn:Function,wait:number):Function {
       let timer = null;
       return function() {
           if(timer) clearTimeout(timer);
            timer = setTimeout(fn,wait)
       }
    }

    /**
     * 函数节流
     * @param fn     执行函数
     * @param delay  节流时间
     * @example 
     *      this.savingFlow(this.handle,1000)
     */
    public savingFlow(fn:Function,delay:number):Function {
        // 获取执行时间戳
        let oldNow = Date.now();
        return function() {
            var content = this;
            var args = arguments;
            var now = Date.now();
            if(now - oldNow >= delay) {
                fn.apply(content,args);
                oldNow = now;
            }
        }

    }
}