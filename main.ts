input.onButtonPressed(Button.A, function () {
    radio.sendString("<")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("^")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "DUCKS") {
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # #
            . . # . .
            `)
    } else {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(">")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Open Door")
})
radio.setGroup(-1e+308)
