import Move from "../../src/base/move/Move";
import LoadScene from "../../src/base/load/LoadScene";
import eventBus from "../../src/base/EventBus/EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class homt extends Move {

    // 子弹
    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    // 子弹对象池
    bulletsPool: cc.NodePool = new cc.NodePool("bullets");

    // 人物节点
    @property(cc.Prefab)
    peopleColl:cc.Prefab = null;

    loadMoreRes:LoadScene = new LoadScene();

    async onLoad() {

        this._getBullets();

        this.createTower()
        
       
        this._lookLoadSuccess()
        // cc.log(await this.loadMoreRes.loadMoreRes("audio"),55)

    }
    start() { }
    // update(dt:number) {}
    onDestroy() {

    }

    // 查看资源是否批量加载完成
    private _lookLoadSuccess():void {

        this.loadMoreRes.loadMoreRes("audio",this._loadCallback);
    }

    // 加载资源回调
    private _loadCallback(err:any,assets:any,urls:any):void {

        if(err) throw err;

        cc.log(assets,99999)

    }


    // 创建塔防
    private createTower():void {
        let peopleTower = cc.instantiate(this.peopleColl);
        peopleTower.parent = cc.find("Canvas");
    }

    // 创建子弹
    private _createBullets(): void {

        for (var i = 0; i < 100; i++) {

            let temp = cc.instantiate(this.bullet);

            this.bulletsPool.put(temp);
        }
    }

    // 取出子弹
    private _getBullets(): void {

        this._createBullets();

        let temp = this.bulletsPool.get();

        /*  temp.x = 0;
 
         temp.y = 0; */

        // temp.parent = cc.find('Canvas/fort');

        let x = temp.x, y = temp.y;

    }
}