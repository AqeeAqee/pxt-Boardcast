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
    //% block="when I receive $msg"
    export function onEventWithArgs(msg: string, handler: () => void) {
        if (broadcastHandlers == null)
            broadcastHandlers = [];
        broadcastHandlers.push({ msg: msg, handler: handler });
    }

    /**
     * Send out Broadcast with Message String
     */
    //% block="broadcast %msg"
    export function broadcast(msg: string) {
        broadcastHandlers
            .filter(h => h.msg == msg)
            .forEach(h => h.handler());

    }

}
