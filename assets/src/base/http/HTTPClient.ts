import HTTP from "./HTTP";

class HTTPClient {
    static instance: HTTPClient = new HTTPClient();

    /**
     * eg:支付—获取支付数据
     * 
     */
    public async _data() {
        
       let data =  await HTTP.Ajax("Gamerole/index", "POST", { page: 1 })
            .then(res => {
                console.log(res,'tttt')
                return res;
            })

            return data;
    }
}

export default HTTPClient.instance;