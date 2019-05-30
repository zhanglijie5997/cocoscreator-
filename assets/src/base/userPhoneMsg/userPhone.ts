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

    
}