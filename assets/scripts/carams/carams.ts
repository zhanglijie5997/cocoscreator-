const { ccclass, property } = cc._decorator;
import Player from './plear';



@ccclass
export default class Carams extends cc.Component {

    @property({
        type: cc.Label, displayName: "选择文字", tooltip: "选择文字", 
    })
    text: cc.Label = null;

    @property(Player)
    player: Player = new Player();

    onLoad() {
        
     }
    start() { }
    // update(){}
    onDestroy() { }
    notify(plevalue: any): void {
        if (CC_EDITOR) return; this.upshow()
    }

    upshow(): void {

    }
}