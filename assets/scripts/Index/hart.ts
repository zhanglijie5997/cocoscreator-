const { ccclass, property } = cc._decorator;

@ccclass
export default class hart extends cc.Component {

    // 用户命
    @property(cc.Prefab)
    harts: cc.Prefab = null;

    // 用户命数对象池
    hartNoodPool: any;

    num = 0;
    
    onLoad() {

        this.getHartPool();

    }   
    
    // start() {}
    // update() {}
    onDestroy() { }

    // 创建对象池
    private createHartPool() {

        this.hartNoodPool = new cc.NodePool();

        for (var i = 0; i < 5; i++) {

            let temp = cc.instantiate(this.harts);

            temp.x = -cc.find("Canvas/harts").width / 2 + 50 * (i + 1);

            temp.y = (cc.find("Canvas/harts").height / 2) - 120;

            this.hartNoodPool.put(temp);

        }
    }

    // 添加进节点
    private getHartPool() {

        this.createHartPool();

        for (var i = 0; i < 5; i++) {

            let node = this.hartNoodPool.get();

            node.parent = cc.find("Canvas/harts");

        }
    }

    // 开启碰撞检测
    /* private openCollision() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }
 */


}