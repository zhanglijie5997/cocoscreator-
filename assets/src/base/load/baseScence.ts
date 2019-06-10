const {ccclass,property} = cc._decorator;

@ccclass
export default class baseScence extends cc.Component{
    
    onLoad() {}
    // start() {}
    // update(dt:number) {}
    onDestroy() {}

    /**
     * 屏幕适配解决方案,适配竖屏
     * @param arr       需要适配的数组选项
     * @param widthSize 设计图尺寸
     */
    public _baseScence(arr:string[],widthSize:number):void {
        cc.log(cc.director, cc.director.getWinSize().width )
        // 获取视图大小宽高，根据设计图比例做适配
        if (cc.director.getWinSize().height / cc.director.getWinSize().width - 16 / 9 > 0.1) {

            for(var i = 0;i<arr.length;i++) {
                cc.find(arr[i]).scaleX = cc.director.getWinSize().width / widthSize;
            }
        }

    }

    /**
     * 竖屏适配方案二
     */
    public init():void {
        let frameSize = cc.view.getFrameSize();
        let bFitWidth = (frameSize.width / frameSize.height) < (750 / 1334);
        cc.Canvas.instance.fitWidth = bFitWidth;
        cc.Canvas.instance.fitHeight = !bFitWidth;·
    }

}