

const {ccclass, property} = cc._decorator;

@ccclass
export default class apple extends cc.Component {

    num:number = 0;

    onLoad () {
        this.btnClick()
    }

    start () {

    }
    
    // update (dt) {}

    onDestroy() {}

    /**
     * 下排按钮按下事件
     */

    private btnClick():void {
        this.node.on("touchstart",this._appleBtnClick,this);

        this.node.on("touchstart",()=>{},this);

        this.node.on("touchstart",()=>{},this)
    }

    private _appleBtnClick():void {

        // 对应选择只能压的倍数
        let addMultiple:number = +this.node.parent.getChildByName("multipleNumber").children[0].getComponent(cc.Label).string;

        this.num += addMultiple;

        if(this.num < addMultiple * 5) {

            this.node.parent.getChildByName("alt1").getComponent(cc.Label).string = this.num + "";

            return
        }

        alert(`倍数已经最大`)

    }
}
