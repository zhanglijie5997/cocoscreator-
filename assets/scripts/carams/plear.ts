

const {ccclass, property} = cc._decorator;

@ccclass("Player")
export default class Player {

    @property({displayName:'大掌教'})
    name:string = "zhanglijie"
    @property({displayName:'账号'})
    qq:number = 1193417780
    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
