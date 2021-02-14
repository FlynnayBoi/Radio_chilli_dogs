input.onButtonPressed(Button.A, function () {
    radio.sendString("CHILLI DOGS")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1e+308)
