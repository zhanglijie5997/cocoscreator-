const {ccclass,property} = cc._decorator;

@ccclass
export default class Interval extends cc.Component{

    /**
     * 定时器
     * @param callback 执行的回调函数
     * @param wait     等待时间
     * @param repeat   重复次数
     * @param delay    延迟时间
     * @param clear    清楚定时器条件
     * @example
     *      this.initInterval(this.interval,1); // 执行一个一秒的定时器
     *      this.initInterval(this.interval,1,1,1); // 执行一个一秒的定时器,重复1次,延迟1秒的定时器
     */
    public async initInterval(callback: Function, wait: number, repeat: number = 1, delay: number = 0): Promise<any> {
        return await this.schedule(()=>{
             callback;
        },wait,repeat,delay)
    }

    /**
     * 
     * @param callback 执行的回调函数
     * @param wait     执行时间
     * @example
     *    this.oneceInterval(this.interval,1)
     */
    public async oneceInterval(callback: Function, wait: number): Promise<any> {
        return await this.scheduleOnce(()=>{
            callback
        }, wait)
    }
    
    /**
     * 清楚定时器
     * @param callback 清楚的回调函数
     * @param type     类型 1: 清楚当前定时器 其他:清除所有 默认为清除当前
     * @example
     *     this.clearInterval(this.interval,1) // 清除当前定时器
     *     this.clearInterval(-1) //清除所有
     */
    public async clearInterval(callback: Function = null, type: number = 1): Promise<any> {
        if(type === 1) {
           return await this.unschedule(callback)
        }else {
            return await this.unscheduleAllCallbacks()
        }
        
    }
}