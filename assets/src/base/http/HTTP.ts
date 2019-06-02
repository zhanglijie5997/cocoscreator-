class HTTP {
    static instance: HTTP = new HTTP();
    /**
     * 超时处理
     */
    private TimeOut(fecthPromise: () => void, time: number = 5000): object {
        let abort = null;
        let abortPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                abort = () => {
                    return reject({
                        code: 504,
                        message: "请求超时！"
                    });
                };
            }, time)

        });


        // 最快出结果的promise 作为结果
        let resultPromise = Promise.race([fecthPromise, abortPromise]);

        return resultPromise.then(res => {
            console.log(res, '_______________________');
            return res;
        });
    }

    /**
     * fetch 请求
     */
    private Fetch(url: string, type: string = "GET", { ...data }): any {
        /**
         * data 数据 处理
         */
        let Url = 'http://localhost:8091/api/'
        let formData = new FormData();
        let KEY = Object.keys(data);
        let VAL = <any>Object.values(data);

        for (var i = 0; i < KEY.length; i++) {
            formData.append(KEY[i], VAL[i]);
        }


        return fetch(Url + url, {
            method: type,
            body: formData
        }).then(res => res.json())

    }

    /**
     * 网络请求调用此接口
     * @param url      地址
     * @param type     类型
     * @param param2   数据
     */
    public Ajax(url: string, type: string, { ...data }): any {


        return this.TimeOut(this.Fetch(url, type, {
            ...data
        }))

    }

}
export default HTTP.instance;