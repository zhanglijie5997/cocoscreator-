const { ccclass, property } = cc._decorator;

@ccclass
export default class Collision extends cc.Component {
    onLoad() {

    }

    /**
     * 碰撞回调
     * @param fn   碰撞回调函数
     * @param open 是否开起碰撞盒子模型[默认不开启]
     * @example
     *       this.initCollision(this.handle,true) //开启碰撞盒子模型
     *       this.initCollision(this.handle)      //不开启碰撞盒子模型
     */
    public initCollision(fn: Function, open: boolean): Function {
        this._openCollision(open)
        return fn;
    }


    /**
     * 开启碰撞检测
     * @param box 是否开启碰撞盒子
     */
    private _openCollision(box: boolean = false): void {
        const collision = cc.director.getCollisionManager();
        collision.enabled = true;
        // 开启盒子模型
        if (box) {
            collision.enabledDrawBoundingBox = true;
            collision.enabledDebugDraw = true;
        }
    }

    onCollisionEnter(other: any, self: any) {
        this.initCollision
    }
}