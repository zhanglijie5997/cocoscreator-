import eventBus from "../../../src/base/EventBus/EventBus";

const { ccclass, property } = cc._decorator;
@ccclass
export default class peopleCollision extends cc.Component {

    // 人物hp
    hp: number = 1;

    peopleSwich:boolean = true;

    x:number = 0;

    y:number = 0;

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.x = this.node.width;
        this.y = this.node.height;
       
    }

    // 碰撞检测
    onCollisionEnter(other: any, self: any) {


        // cc.log(`${other} ${self}   peng`)

        this.hp -= 1;



        /* this.node.getChildByName("New Node").getComponent(cc.Label).string = this.hp + '';


        if(this.hp <= 0) {

            let move = cc.removeSelf();

            this.node.runAction(move)

        } */
    }
    start() { }
    // update(dt:number) {}
    onDestroy() { }



}