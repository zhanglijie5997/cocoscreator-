import LoadScene from "../../src/base/load/LoadScene";
import eventBus from "../../src/base/EventBus/EventBus";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends LoadScene {
    // 敌人
    @property(cc.Prefab)
    enemy: cc.Prefab = null;

    // 敌人对象池
    enemyPool:cc.NodePool = new cc.NodePool("enemy");
    // LIFE-CYCLE CALLBACKS:
    time:any = null;

    onLoad () {

        // 初始化对象池
        this.createEnemy()
        // 每0.5s创建一个敌人
       
        this.schedule(this._scheduleFn,0.8);

        

        this._init("audio/background.mp3")


        this._init("index");

        this.preloadCallback()

        

        // this._preLoadScence("resoures/audio/background.mp3")
    }

    start () {
        // this.unschedule(this._scheduleFn)
    }

    // update (dt) {}

    onDestroy() {
        this._offPreloadCallback()
    }
    // 预加载资源回调
    private preloadCallback():void {
        eventBus.$on("scence",this._success.bind(this))
    }

    private _success(msg:any):void {
        cc.log(msg)
    }

    private _offPreloadCallback():void {
        eventBus.$off("scence",this._success.bind(this))
    }

    // 定时器回调
    private _scheduleFn():void {
            let self = this;
            this.getEnemy()
            cc.log(this.enemyPool.size() ,777)
            if(this.enemyPool.size() <= 98) {
               
                this.unscheduleAllCallbacks()
            }

    }

    // 创建敌人
    private createEnemy(): void {

        for(var i = 0;i<100;i++) {

            let temp = cc.instantiate(this.enemy);

            temp.name = i + '';

            // cc.log(temp)

            this.enemyPool.put(temp)

        }
    }

    // 从对象池取出敌人
    private getEnemy(): void {

        let newEnemy = this.enemyPool.get();

        newEnemy.parent = this.node
    }

    
}
