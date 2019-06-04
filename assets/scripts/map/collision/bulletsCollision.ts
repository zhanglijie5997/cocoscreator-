import Move from "../../../src/base/move/Move";
import eventBus from "../../../src/base/EventBus/EventBus";
import peopleCollision from "./peopleCollision";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bulletsCollision extends Move {

    // 创建子弹
    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    // 怪
    @property(cc.Prefab)
    people: cc.Prefab = null;

    data: any[] = [];

    peopleCollision: peopleCollision = new peopleCollision();

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        // cc.log(cc.find("Canvas").children,55)
    }

    private _getPeopleSize(): void {
        eventBus.$on("peopleSize", this._peopleMsg.bind(this))
    }

    private _peopleMsg(msg: object) {
        // cc.log(msg)
        // this.x = msg.x;
    }

    async onCollisionEnter(other: any, self: any): Promise<any> {


        // cc.log(other, '555555555')




        if (other) {

            this.data.push(other)
            // let collision = 

            let temp = cc.instantiate(this.bullet);

            temp.parent = this.node;

            let x, y;

            if (this.data[0].node) {
                
                x = this.data[0].node.x;

                y = this.data[0].node.y;
                
            }



            // cc.log(this.data[0].node, x, y, 55222)

            await this._moveTo(1, temp.x + x + this.peopleCollision.x / 2, temp.y + y + this.peopleCollision.y / 2, temp);

            this.scheduleOnce(() => {

                temp.destroy();

            }, 1)

            this.schedule(() => {
                this.onCollisionEnter(other, self);
                // cc.log(111)
            }, 1)
        } else {
            this.unschedule(() => {
                this.onCollisionEnter(other, self);
                // cc.log(111)
            })
        }


        // cc.log(other,11)

        // let move = cc.removeSelf();

        // this.node.runAction(move)

        // let x = this.node.x;

        // let y = this.node.y;

        // this._moveTo(1, x + 100, y - 100, this.node);
    }

    onCollisionExit(other: any, self: any) {
        // cc.log(other,444)
    }
    start() { }
    update(dt: number) {

    }
    onDestroy() {


    }



}

