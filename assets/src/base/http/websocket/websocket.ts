class webSocket {
    static instance: webSocket = new webSocket();
    private ws:any = null;
    private socket() {
         this.ws = new WebSocket("ws://47.107.62.161:8282");
        //  this.ws.onMessage = 

    }
}
export default webSocket;