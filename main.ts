input.onButtonPressed(Button.A, function () {
    radio.sendValue("Dot", 0)
    TYPED = "" + TYPED + "."
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Space", 2)
    TYPED = "" + TYPED + " "
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Dash", 1)
    TYPED = "" + TYPED + "_"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("RESET", 4)
})
let TYPED = ""
basic.clearScreen()
TYPED = ""
radio.setGroup(69)
basic.forever(function () {
    if (!("" == TYPED)) {
        basic.showString(TYPED)
    }
})
