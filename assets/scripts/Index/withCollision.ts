const { ccclass, property } = cc._decorator;
@ccclass
export default class withCollision extends cc.Component {

    // 生命值-1
    @property(cc.Label)
    text: cc.Label = null;

    num: number = 0;

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        let newNum = (Math.random() * 10).toFixed(0);
        if (+newNum < 0) {
            newNum = (Math.random() * 10).toFixed(0);
        }
        this.num = +(newNum);
        this.text.string = this.num + '';
    }
    onCollisionEnter(other: any, self: any) {
        // console.log(`碰撞${other}  : ${self}`)
        // cc.log(`物体碰撞123`);
        this.num -= 1;
        this.text.string = this.num + '';
        if (this.num <= 0) {
            this.node.destroy()
        }
    }

}