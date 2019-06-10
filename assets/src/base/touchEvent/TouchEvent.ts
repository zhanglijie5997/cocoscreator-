<<<<<<< HEAD
const {ccclass,property} = cc._decorator;
import { TouchEnmu } from './enum/TouchEnmu'
@ccclass
export default class TouchEvent extends cc.Component{
    onLoad() {}
    // start() {}
    // update(dt:number) {}
    onDestroy(){}


    /**
     * 点击事件封装
     * @param event 点击事件按钮名称
     */

    public touch(event:string) {
        const map = new Map([
            ["start",()=>{
                cc.log(TouchEnmu.touchend) 
            }],
            ["move",()=>{

            }],
            ["end",()=>{}],
        ])

        map.get(event)()
        
    }

    
=======
const {ccclass,property} = cc._decorator;

@ccclass
export default class TouchEvent extends cc.Component{

    /**
     * 点击事件封装
     * @param event      点击事件按钮名称
     * @param node       触发事件的节点
     * @param callback   执行的回调函数
     * @param addListren 监听还是移除监听[true:监听,false:移除监听]
     * @example 
     *      this.touch("touchstart",this.node,this.fn)       // 监听事件
     *      this.touch("touchstart",this.node,this.fn,false) // 移除监听
     */

    public touch(event: string, node: cc.Node, callback: Function,addListren:boolean = true):Function{
        const map:Map<string,Function> = new Map([
            [event, () => { this._touchFn(event, callback, node, addListren)}]
        ])
       return map.get(event)()
    }

    /**
     * 
     * @param type 点击事件类型
     * @param fn   回调函数
     * @param node 执行的node节点
     */
    private _touchFn(type:string,fn:Function,node:cc.Node,addListren:boolean):any {
        return addListren ? (node.on(type, fn, this)) : (node.off(type,fn,this))
    }
>>>>>>> 262f68e6f1a1245ca59dcbf233870b35c7ee1ba7
}