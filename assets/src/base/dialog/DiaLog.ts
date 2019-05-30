

const {ccclass, property} = cc._decorator;

@ccclass
export default class DiaLog extends cc.Component {

    @property(cc.Prefab)
    loading: cc.Prefab = null;

   
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._animation()
    }

    start () {

    }

    update (dt:number) {
        
    }

    public _animation():void {
        var node = cc.instantiate(this.loading)
        let Animation = this.node.getComponent(cc.Animation);
        Animation.play("login");
        
    }

    
}
