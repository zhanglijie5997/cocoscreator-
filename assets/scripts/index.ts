// import animation from "../base/animate/animation";
import Move from "../src/base/move/Move";
import baseScence from "../src/base/load/baseScence";
import eventBus from "../src/base/EventBus/EventBus";



const { ccclass, property } = cc._decorator;

@ccclass
export default class index extends baseScence {
    // 运动函数
    
    move: Move = new Move();

    // 人物
    @property(cc.Prefab)
    people: cc.Prefab = null;

    // 子弹
    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    // 对象池
    bulletsPool: any = null;

    @property(cc.Node)
    bullets: cc.Node = null;

    // x 位置
    x: number = 0;

    // y轴位置
    y: number = 0;

    // 人物宽度
    peopleWidth: number = 0;

    // 速度
    speed: number = 200;

    // 背景图
    @property(cc.Node)
    bg1: cc.Node = null;

    @property(cc.Node)
    bg2: cc.Node = null;

    bgSpeed: number = 10;

    // 跳起按钮
    @property(cc.Node)
    btn: cc.Node = null;

    // 碰撞体
    @property(cc.Prefab)
    collisionBody: cc.Prefab = null;

    // 碰撞体对象池
    collisionBodyNoodPool: any;

    onLoad() {
        this.createPeople();

        this.createBullets();

        this.putNoodPol()
    }

    start() {

    }

    update(dt: number) {
        this.bgMove()
    }

    onDestroy() {
        this._offPutNoodPol()
    }
    // 扔回对象池
    public putNoodPol():void {
        eventBus.$on("putNode",this._putNoodPol.bind(this))
        // cc.log(this)
    }

    private _putNoodPol(msg:cc.Node):void {

        this.bulletsPool.put(msg);
        // cc.log(this.bulletsPool,888)
    }


    private _offPutNoodPol():void {
        eventBus.$off("putNode",this._putNoodPol.bind(this))
    }
    // 创建人物
    private createPeople() {

        let people = cc.instantiate(this.people);

        people.parent = cc.find("Canvas");

        this.x = people.x;

        this.y = people.y;

        this.peopleWidth = people.children[0].width;

        let animation = people.children[0].getComponent(cc.Animation);


        // cc.log(animation);

        this.peolpleJump(people, people.x, people.y);

        cc.log(cc.find("Canvas").children, 666)

        this.schedule(() => {

            this.getBullet(people.x, people.y);

            // this.impact();

        }, 0.05)

        this.schedule(()=>{

            this.impact();

        },0.3)
    }



    // 创建子弹
    private createBullets() {

        if(!this.bulletsPool) this.bulletsPool = new cc.NodePool("bullet")
        
        for (var i = 0; i < 100; i++) {
            let temp = cc.instantiate(this.bullet);
            this.bulletsPool.put(temp)
        }
    }

    // 每1秒取出一个子弹
    private getBullet(peopleX: number, peopleY: number) {

        let self = this;

        let oneBullet;
        for(var i = 0;i<5;i++) {
            oneBullet = this.bulletsPool.get();
        }
        

        oneBullet.x = peopleX - this.peopleWidth;

        oneBullet.y = peopleY;

        oneBullet.parent = this.bullets;

        let y = oneBullet.y;

        let x = oneBullet.x + this.peopleWidth;

        this.move._moveTo(3, cc.winSize.width, y, oneBullet);



        this.scheduleOnce(() => {
            let remove = cc.removeSelf();
            oneBullet.runAction(remove);
            oneBullet.destroy();
        }, 3)

        if (this.bulletsPool.size() < 5) {

            this.createBullets()

        }

    };

    // 背景图移动
    private bgMove() {
        // cc.log(this.bg1.x)
        this.bg1.x = this.bg1.x - this.bgSpeed;
        this.bg2.x = this.bg2.x - this.bgSpeed;
        if (this.bg1.x < -this.bg1.width) {
            this.bg1.x = this.bg1.x + 2 * this.bg1.width;
        }
        if (this.bg2.x < -this.bg1.width) {
            this.bg2.x = this.bg2.x + 2 * this.bg2.width;
        }
    }

    // 监听角色跳起
    private peolpleJump(node: cc.Node, x: number, y: number) {

        this.btn.on("touchstart", () => {

            let animate = node.children[0].getComponent(cc.Animation);

            animate.pause("people")

            animate.play("peopleJump");

            // 角色做位移
            this.move._moveBy(0.3, x, y + 200, x, y - 200, node, true)

            this.scheduleOnce(() => {
                animate.play("people")
            }, 0.3)


        }, this)
    }

    // 制作随机碰撞体
    private impact() {

        this.collisionBodyPool();

        let moves = new Move();

        let getCOllision;

        if (this.collisionBodyNoodPool.size() > 0) {

            getCOllision  = this.collisionBodyNoodPool.get();

        }else {
            this.collisionBodyPool();
        }

        // x 轴出现位置
        getCOllision.x = cc.winSize.width;

        // y 轴位置随机
        let y = Math.random() * 150;

        if (y > cc.winSize.height) {

            y = Math.random() * 150;

        }

        // y轴出现位置
        getCOllision.y = y;

        getCOllision.parent = cc.find("Canvas/collisiton");

        moves._moveTo(4, -cc.winSize.width / 2 - 43, y, getCOllision);

        this.scheduleOnce(() => {
            let remove = cc.removeSelf();
            getCOllision.runAction(remove)
        }, 4)

       
        if (this.collisionBodyNoodPool.size() < 10) {

            this.collisionBodyPool();

        }


    }

    // 碰撞体对象池
    private collisionBodyPool() {

        this.collisionBodyNoodPool = new cc.NodePool("collisionBody")

        for (var i = 0; i < 100; i++) {

            let temp = cc.instantiate(this.collisionBody);

            this.collisionBodyNoodPool.put(temp);

        }
    }
}
