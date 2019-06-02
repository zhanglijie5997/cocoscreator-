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
     */
    public _blink(duration:number,blink:number,node:cc.Node) {
        var action = cc.blink(2, 10);
        node.runAction(action)
    }
    
    /**
     * 渐显渐隐
     * @param time     运动时间
     * @param opacity  运动透明度
     * @param node     运动节点
     */
    public _toggle(time:number,opacity:number,node:cc.Node) {
        var start = cc.fadeTo(time, opacity);
        var end = cc.fadeOut(opacity);

        node.runAction(cc.repeatForever(cc.sequence(start,end))) 
    }

    
}