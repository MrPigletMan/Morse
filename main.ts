input.onButtonPressed(Button.A, function () {
    TYPED = "" + TYPED + "."
})
input.onButtonPressed(Button.AB, function () {
    TYPED = "" + TYPED + " "
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    TYPED = "" + TYPED + "_"
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    TYPED = ""
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(TYPED)
})
let TYPED = ""
basic.clearScreen()
TYPED = ""
radio.setGroup(69)
basic.forever(function () {
    basic.showString("" + TYPED + "|")
})
