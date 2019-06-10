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

    
}