// Add your code here
//% color="#eeaaaa"
namespace broadcast {

    export interface BroadcastHandler {
        msg: string;
        handler: () => void;
    }

    let broadcastHandlers: BroadcastHandler[];


    /**
     * Run following code, when received the same Message String
     */
    //% blockId="receiveBroadcast" block="when I receive $msg"
    //% blockAllowMultiple=1
    export function onReceiveBroadcast(msg: string, handler: () => void) {
        if (broadcastHandlers == null)
            broadcastHandlers = [];
        broadcastHandlers.push({ msg: msg, handler: handler });
    }

    /**
     * Send out Broadcast with Message String
     */
    //% blockId="broadcast" block="broadcast %msg"
    export function broadcast(msg: string) {
        broadcastHandlers
            .filter(h => h.msg == msg)
            .forEach(h => control.runInParallel(h.handler));
    }
}

