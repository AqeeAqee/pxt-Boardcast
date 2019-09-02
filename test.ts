// tests go here; this will not be compiled when this package is used as a library
broadcast.onReceiveBroadcast("消息", function () {
    effects.confetti.startScreenEffect(100)
})
broadcast.onReceiveBroadcast("消息", function () {
    while (true) {
        pause(2000)
    }
})
broadcast.onReceiveBroadcast("消息", function () {
    scene.setBackgroundColor(Math.randomRange(1, 15))
})
game.onUpdateInterval(2000, function () {
    broadcast.broadcast("消息")
})
