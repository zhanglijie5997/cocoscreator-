import eventBus from "../../src/base/EventBus/EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class collision extends cc.Component {


    pool: any = null;

    onLoad() {
        // cc.log(this.node,55)
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    update(dt: number) {
        // cc.log(this.node,9999)
        if (this.node.x > cc.winSize.width / 2) {

           
            this.emitNode(this.node)
            // this.pool.put(this.node);
        }
    }


    reuse(pool: any) {
        this.pool = pool;
    }


    onCollisionEnter(other: any, self: any) {
        // console.log(`碰撞${other}  : ${self}`);
        // console.log(`碰撞结束${other}`);
        
        // let remove = cc.removeSelf();
        
        // self.node.runAction(remove);

        // this.pool.put(this.node)

        this.emitNode(this.node)

    }

    public emitNode(node:cc.Node):void {
        eventBus.$emit("putNode",node)
    }
    
}