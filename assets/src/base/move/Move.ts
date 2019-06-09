const {ccclass,property } = cc._decorator;

@ccclass
export default class Move extends cc.Component{
    onLoad() {
        
    }
    start() {}
    // update(dt:number) {}
    onDestroy() {}


    /**
     * 单向移动
     * @param time 运动时间
     * @param x    移动的x轴
     * @param y    移动的y轴
     * @param node 移动节点
     * 
     * @example
     * 
     *     this._moveTo(1,100,200,this.node)
     */
    public _moveTo(time:number,x:number,y:number,node:cc.Node) {
        let move =  cc.moveTo(time,cc.v2(x,y));
        node.runAction(move)
    }

  /**
   * 
   * @param time 时间
   * @param x    初始x坐标
   * @param y    初始y坐标
   * @param x1   移动x1坐标
   * @param y1   移动x2坐标
   * @param node 移动节点
   * @param repeat 是否重复一次，true =>重复一次  false => 无限重复
   * @param num  重复次数
   * 
   *  @example
   * 
   *        重复运动5次
   * 
   *        this._moveBy(2,100,100,-100,-100,this.node,false,5)
   * 
   *        无限运动
   * 
   *        this._moveBy(2,100,100,-100,-100,this.node,false)
   */
    public _moveBy(time:number,x:number,y:number,x1:number,y1:number,node:cc.Node,repeat:boolean,num:number = 1) {
        let start = cc.moveBy(time,x,y);
        let end =  cc.moveBy(time,x1,y1);
        let seq = cc.sequence(start,end);
        if(repeat) {
            let nodeRepeat = cc.repeat(seq, num)
            node.runAction(nodeRepeat)
        }else {
            node.runAction(cc.repeatForever(seq))
        }
        
    }

    /**
     * 闪烁
     * @param duration 时间
     * @param blink    闪烁透明度
     * @param node     闪烁节点
     * 
     *  @example
     * 
     *      this._blink(2,5,this.node) 
     */
    public _blink(duration:number,blink:number,node:cc.Node) {
        var action = cc.blink(duration, blink);
        node.runAction(action)
    }
    
    /**
     * 渐显渐隐
     * @param time     运动时间
     * @param opacity  运动透明度
     * @param node     运动节点
     * @param callback 回调执行其他动作，例如加分减分
     *  @example
     * 
     *      this._toogle(2,0.5,this.node)
     */
    public _toggle(time:number,opacity:number,node:cc.Node,callback:any) {
        var start = cc.fadeTo(time, opacity);
        var end = cc.fadeOut(opacity);
        let seq = cc.sequence(start,end,callback);
        node.runAction(cc.repeatForever(seq)) 
    }

    /**
     * 追踪目标节点
     * @param node 目标节点
     * @param cc.rect  创建一个矩形
     * 
     * @example
     * 
     *      this.followAction(this.node)
     */
    public followAction(node:cc.Node) {
        const followAction = cc.follow(node,cc.rect(0,0,100,100));
        node.runAction(followAction)
    }

    /**
     * 
     * @param time     延迟时间
     * @param position 初始位置
     * @param y        跳起高度
     * @param node     跳起节点
     * @param repeat   是否无限
     * 
     * @example
     *    this.jump(1,cc.v2(100,100),100,this.node)      // 不重复跳动，跳动到指定位置
     *    this.jump(1,cc.v2(100,100),100,this.node,true) // 重复跳动，来回反复
     */
    public jump(time:number,position:cc.Vec2,y:number,node:cc.Node,repeat:boolean = false):void {
        let jump:cc.ActionInterval;
        if(repeat) {
            // 跳动一次
            jump = cc.jumpTo(time,position,y);
        }else {
            // 重复
            jump = cc.jumpBy(time,position,y);
        }
        
        node.runAction(jump)
    }
    
}