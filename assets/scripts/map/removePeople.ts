const { ccclass,property  } = cc._decorator;
@ccclass

export default class removePeople extends cc.Component {
    pool:cc.NodePool;
    onLoad() {
        this._removeSelf()
    }
    start() {}
    // update(dt:number) {}
    onDestroy() {}

    private _removeSelf() {
        let animation = this.node.getComponent(cc.Animation);
        // animation.
        // cc.log(animation);
        animation.on("finished",() => {
            // cc.log(`动画结束`);
            // this.pool.put(this.node)
            this.node.removeSelf()
        },this)
        
    }
}