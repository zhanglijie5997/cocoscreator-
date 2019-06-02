
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // 敌人
    @property(cc.Prefab)
    enemy: cc.Prefab = null;

    // 敌人对象池
    enemyPool:cc.NodePool = new cc.NodePool("enemy");
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        
        // 每0.5s创建一个敌人
        this.schedule(()=>{
            this._scheduleFn();
            
            // cc.log(`定时器取消`)
        },0.8)

        if (this.enemyPool.size() < 95) {
            this.unschedule(this._scheduleFn)
        }
    }

    start () {

    }

    // update (dt) {}

    // 定时器回调
    private _scheduleFn():void {
        
            this.getEnemy();
        
    }

    // 创建敌人
    private createEnemy(): void {
        for(var i = 0;i<100;i++) {
            let temp = cc.instantiate(this.enemy);
            this.enemyPool.put(temp)
        }
    }

    // 从对象池取出敌人
    private getEnemy(): void {

        this.createEnemy()

        let newEnemy = this.enemyPool.get();

        newEnemy.parent = cc.find("Canvas/header");
    }
}
