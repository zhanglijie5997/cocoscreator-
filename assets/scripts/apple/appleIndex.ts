const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // 用户钱数
    @property(cc.Label)
    money: cc.Label = null;

    // 投币
    @property(cc.Node)
    addConintBtn: cc.Node = null;

    // 退币
    @property(cc.Node)
    backConintBtn: cc.Node = null;

    // 刷新积分按钮
    @property(cc.Node)
    refreshMoney: cc.Node = null;

    // 积分
    @property(cc.Label)
    integral: cc.Label = null;

    // 初始化用户拥有钱数
    userMoney: number = 100;

    // 下注
    addMoney: number = 0;

    // 给转动的节点添加背景色
    @property(cc.Prefab)
    addBg: cc.Prefab = null;

    // 每次转一个节点
    num: number = 0;

    // 转动速度
    speed: number = 0.02;

    // 转动圈数
    turns: number = 0;

    // 反函数k值
    k: number = 2;

    // 中奖号码
    winnerNum: number = 10;

    // 速度递减开启
    speedCurd: boolean = false;

    // 遮罩，开始游戏后不可点击
    @property(cc.Node)
    mask: cc.Node = null;

    onLoad() {

        this._addCoint();

    }

    start() {

    }

    // update (dt) {}
    onDestroy() {
        this._offAddCoint()
    }

    // 投币 or 退币 or 刷新积分
    private _addCoint(): void {

        // 加币
        let node: cc.Node = cc.find("Canvas/allNode/center/centerMsg");

        // 投币
        this.addConintBtn.on("touchstart", this._getMoney, this);

        // 退币
        this.backConintBtn.on("touchstart", this._getBackCoint, this);

        // 刷新积分
        this.refreshMoney.on("touchstart", this._reFresh, this);

        // 点击减一积分
        let curd: cc.Node = node.getChildByName("alt2");

        curd.on("touchstart", this._curdCoint, this);

        // 点击积分加一
        let add: cc.Node = node.getChildByName("alt3");

        add.on("touchstart", this._addCoints, this);

        // 1-6倍随机
        let oneToSix: cc.Node = node.getChildByName("alt4");

        oneToSix.on("touchstart", this._getOneToSixMoney, this)

        // 8-13倍随机
        let eightToThirteen: cc.Node = node.getChildByName("alt5");

        eightToThirteen.on("touchstart", this._eight, this);

        //  开始游戏
        let playGame: cc.Node = node.getChildByName("start");

        playGame.on("touchstart", this._beginGame, this);

    }

    // 注销所有监听事件
    private _offAddCoint(): void {
        // 加币
        let node: cc.Node = cc.find("Canvas/allNode/center/centerMsg");

        // 投币
        this.addConintBtn.off("touchstart", this._getMoney, this);

        // 退币
        this.backConintBtn.off("touchstart", this._getBackCoint, this);

        // 刷新积分
        this.refreshMoney.off("touchstart", this._reFresh, this);

        // 点击减一积分
        let curd: cc.Node = node.getChildByName("alt2");

        curd.on("touchstart", this._curdCoint, this);

        // 点击积分加一
        let add: cc.Node = node.getChildByName("alt3");

        add.on("touchstart", this._addCoints, this);

        // 1-6倍随机
        let oneToSix: cc.Node = node.getChildByName("alt4");

        oneToSix.off("touchstart", this._getOneToSixMoney, this)

        // 8-13倍随机
        let eightToThirteen: cc.Node = node.getChildByName("alt5");

        eightToThirteen.off("touchstart", this._eight, this);

        //  开始游戏
        let playGame: cc.Node = node.getChildByName("start");

        playGame.off("touchstart", this._beginGame, this);
    }

    // 点击减一积分
    private _curdCoint(): void {

        this._userMoneyAdd(1, 1, false)

    }

    // 点击积分加一
    private _addCoints(): void {

        this._userMoneyAdd(1, 1, true)

    }

    // 1-6倍随机
    private _getOneToSixMoney(): void {

        let num = +(Math.random() * 10 - 4).toFixed(0);

        if (num < 0) {

            this._getOneToSixMoney();

            return

        }

        this._userMoneyAdd(num, num, true)

    }

    // 8-13倍随机
    private _eight(): void {

        let num1 = +(Math.random() * 20).toFixed(0);

        if (num1 > 13 || num1 < 8) {

            this._eight();

            return;

        }

        this._userMoneyAdd(num1, num1, true)

    }

    // 开始游戏
    private _beginGame(): void | boolean {

        if (this.addMoney <= 0) {
            alert(`请先兑换积分`)
            return false;
        }



        // 开始游戏父节点
        let node: cc.Node = cc.find("Canvas/allNode/center/allApple/right");

        // 添加背景色
        let temp: cc.Node = cc.instantiate(this.addBg);

        // 第一个节点
        let satrt: cc.Node = node.children[0];

        temp.parent = satrt;

        this.schedule(this._scheduleFn, this.speed);

        this.mask.active = true;

    }

    // 倒计时回调函数
    private _scheduleFn(): void {

        // 开始游戏父节点
        let node: cc.Node = cc.find("Canvas/allNode/center/allApple/right");

        // 添加背景色
        let temp: cc.Node = cc.instantiate(this.addBg);

        temp.parent = node.children[this.num];

        // 遍历查询将转过的从节点上删除 ， 给符合的添加背景色
        for (let j = 0; j < node.children.length; j++) {

            if (j === this.num) {

                temp.parent = node.children[this.num];

            } else {

                if (node.children[j].getChildByName("addSprite")) {

                    let child = node.children[j].getChildByName("addSprite");

                    child.destroy()

                }


            }

        }

        this.num++;

        if(this.speedCurd) {

            this._remainingNum()

        }

        if (this.speedCurd && this.num === this.winnerNum)  {

            this.unschedule(this._scheduleFn);

            this.mask.active = false;

            // 初始化所有数据
            this.num = 0;

            this.turns = 0;

            this.speed = 0.02;

            this.speedCurd = false;
        }

        if (this.num > 23) {

            this.num = 0;

            this.turns += 1;

            // 转4圈之后速度减小
            if (this.turns == 4) {

                // this.turns = 0;

                this.unschedule(this._scheduleFn);

                this.speedCurd = true;

                this.speed = 0.2;

                // 重新执行一个新的定时器
                this.schedule(this._scheduleFn, this.speed)

            }
        }
    }

    // 计算还有多少个完成，给一个函数，用来做减速
    private _remainingNum(): void {

        this.speed = this.k / (this.winnerNum - this.num);

        cc.log(this.speed,555)

        this.unschedule(this._scheduleFn)

        // cc.log()
        this.schedule(this._scheduleFn, this.speed)

        cc.log('123', this.turns, this.speed, this.num, this.winnerNum)

        /* if (this.num === this.winnerNum) {
           
            this.unschedule(this._scheduleFn);
        } */

    }

    // 投币
    private _getMoney(): void {

        if (this.userMoney > 0) {

            this.userMoney -= 10;

            this.money.string = this.userMoney + '';

            this.addMoney += 10;

            this.integral.string = this.addMoney + '';

            return
        }

        if (this.userMoney == 10) {

            alert("余额不足");

            this.userMoney = 0;

            this.money.string = this.userMoney + '';

        }


    }

    // 退币
    private _getBackCoint(): void {

        cc.log(`退币`)

    }

    // 刷新积分
    private _reFresh(): void {

        this.integral.string = 0 + 0 + "";

        this.money.string = this.userMoney + this.addMoney + '';

    }


    /**
     * 
     * @param oldMoney 用户钱数减少
     * @param newMoney 积分增加
     * @param addOrCurd true => 积分增加，钱数减少 false => 积分减少，钱数增加
     */
    private _userMoneyAdd(oldMoney: number, newMoney: number, addOrCurd: boolean): void {

        if (addOrCurd) {

            if (this.userMoney > 0 && this.userMoney > oldMoney) {

                this.userMoney -= oldMoney;

                this.money.string = this.userMoney + '';

                this.addMoney += newMoney;

                this.integral.string = this.addMoney + '';

            }

        } else {

            if (this.userMoney > 0 && this.addMoney > 0) {

                this.userMoney += oldMoney;

                this.money.string = this.userMoney + '';

                this.addMoney -= newMoney;

                this.integral.string = this.addMoney + '';

            }



        }


    }
}