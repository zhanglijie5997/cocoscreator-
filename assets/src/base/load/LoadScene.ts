import eventBus from "../EventBus/EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadScene extends cc.Component {
    onLoad() {

    }
    start() { }
    // update(dt:number) {}
    onDestroy() {

    }

    private _loadSuccess(err: any, assets: any) {
        if (err) {
            throw new Error(`Assets error`)
        }
        if (assets.loaded) {
            // cc.log(`场景预加载完成`);
            eventBus.$emit("scence", "场景预加载完成")
        }
    }

    /**
     * 资源预加载
     * @param scene 资源名
     */
    public _preLoadScence(scene: string) {
        /**
         * Home and PlayGame 是场景，否则是资源
         */
        if (scene === "index" || scene === "home") {
            return cc.director.preloadScene(scene, this._load, this._loadSuccess)
        } else {
            return cc.loader.loadRes(scene, this._load, this._audioSuccess)
        }


    }

    /**
     * 批量加载资源
     * @param load 批量加载资源路径
     * @param fn   回调函数
     */
    public async loadMoreRes(load: string,fn:any): Promise<any> {
       
        await cc.loader.loadResDir(load,cc.AudioClip,fn)

    }

    private _load() {
        // cc.log(`场景预加载中`)
    }
    /**
     * 
     * @param scene 预加载场景，进入就调用.场景名称
     */
    public _init(scene: string) {
        this._preLoadScence(scene);
    }


    private _loadScence(scence: string) {
        return cc.director.loadScene(scence)
    }


    /**
     * 跳转场景
     * @param scence 场景名字
     */
    public _nextScence(scence: string) {
        return this._loadScence(scence)
    }

    /**
     * 预加载一个音频
     * @param path 加载路径
     */
    public _getPreLoadAudio(path: string) {
        cc.audioEngine.preload(path);
    }


    private _loadAudio(audio: cc.AudioClip, play: boolean, ) {
        cc.audioEngine.play(audio, play, 1)
    }

    /**
     * 
     * @param status 状态
     * @param audio  音频名字
     */
    public _audioStatus(status: string, audio: cc.AudioClip) {
        switch (status) {
            case "pauseAll": // 停止所有
                cc.audioEngine.pauseAll();
                break;
            case "resumeAll": // 回复所有
                cc.audioEngine.resumeAll();
                break;
            case "stopAll": // 关闭所有
                cc.audioEngine.stopAll();
                break;
            default:
                break;
        }
    }

    /**
     * 音频资源加载完成
     * @param err     错误信息f
     * @param assets  资源加载完成
     */
    private _audioSuccess(err: any, assets: any) {
        if (err) {
            throw err;
        }
        if (assets.loaded) {
            eventBus.$emit("scence", "音频加载完成")
        }
    }

    private _audioLoad(err, clip) {
        if (!err) {
            cc.audioEngine.play(clip, true, 0.5);
        }

    }

    /**
     * 
     * @param url   本地背景音乐地址
     * @param name  开始开始停止,播放音效
     * @param loop   是否循环
     */
    public async _playBackgroundAudio(url: string, name: string, loop: boolean, num: number) {
        switch (name) {

            case "playMusic":   //加载背景音乐
                cc.loader.loadRes(url, cc.AudioClip, this._audioLoad);
                break;
            case "resumeMusic": // 恢复播放背景音乐
                cc.audioEngine.resumeAll();
                break;
            case "stopMusic": // 停止背景音乐

                cc.audioEngine.stopAll();
                break;
            case "pauseMusic": //暂停播放背景音乐
                cc.audioEngine.pauseMusic();
                break;
            case "playEffect": // 播放音效
                cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                    cc.audioEngine.playEffect(clip, loop);
                });
                break;
            case "pauseAllEffects": // 暂停播放所有音效
                cc.audioEngine.pauseAllEffects();
                break;
            case "resumeAllEffects": // 回复播放所有音效
                cc.audioEngine.resumeAllEffects();
                break;
            default:
                break;
        }
        this._setAudioVolum(num)
    }

    /**
     * 设置音量
     * @param num 0-1
     */
    public _setAudioVolum(num: number) {
        cc.audioEngine.setMusicVolume(num);
    }
}