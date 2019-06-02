const {ccclass,property} = cc._decorator;
@ccclass
export default class collision extends cc.Component{
    num = 0;

    pool:any = null;

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    update(dt:number) {
        // cc.log(this.node,9999)
        
    }

    reuse(pool:any) {
       
    }



    onCollisionEnter(other: any,self:any) {
        
        // console.log(`碰撞${other}  : ${self}`);
       
        let hart = cc.find("Canvas/harts").children;
        if (hart.length >= 0) {
            this.num++;
            hart.splice(-1);
        }
        cc.log(this.num, 777)
        if (this.num > 5) {
            // console.log(`gameover`)
        }
        
    }
    
}