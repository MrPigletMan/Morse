input.onButtonPressed(Button.A, function () {
    TYPED = "" + TYPED + "."
})
function CheckLetter () {
    if (TYPED == "._") {
        TEXT = "" + TEXT + "a"
        TYPED = ""
    } else if (TYPED == "_...") {
        TEXT = "" + TEXT + "b"
        TYPED = ""
    } else if (TYPED == "_._.") {
        TEXT = "" + TEXT + "c"
        TYPED = ""
    } else if (TYPED == "_..") {
        TEXT = "" + TEXT + "d"
        TYPED = ""
    } else if (TYPED == ".") {
        TEXT = "" + TEXT + "e"
        TYPED = ""
    } else if (TYPED == ".._.") {
        TEXT = "" + TEXT + "f"
        TYPED = ""
    } else if (TYPED == "__.") {
        TEXT = "" + TEXT + "g"
        TYPED = ""
    } else if (TYPED == "._") {
        TEXT = "" + TEXT + "a"
        TYPED = ""
    } else if (TYPED == "....") {
        TEXT = "" + TEXT + "h"
        TYPED = ""
    } else if (TYPED == "..") {
        TEXT = "" + TEXT + "i"
        TYPED = ""
    } else if (TYPED == ".___") {
        TEXT = "" + TEXT + "j"
        TYPED = ""
    } else if (TYPED == "_._") {
        TEXT = "" + TEXT + "k"
        TYPED = ""
    } else if (TYPED == "._..") {
        TEXT = "" + TEXT + "l"
        TYPED = ""
    } else if (TYPED == "__") {
        TEXT = "" + TEXT + "m"
        TYPED = ""
    } else if (TYPED == "_.") {
        TEXT = "" + TEXT + "n"
        TYPED = ""
    } else if (TYPED == "___") {
        TEXT = "" + TEXT + "o"
        TYPED = ""
    } else if (TYPED == ".__.") {
        TEXT = "" + TEXT + "p"
        TYPED = ""
    } else if (TYPED == "__._") {
        TEXT = "" + TEXT + "q"
        TYPED = ""
    } else if (TYPED == "._.") {
        TEXT = "" + TEXT + "r"
        TYPED = ""
    } else if (TYPED == "...") {
        TEXT = "" + TEXT + "s"
        TYPED = ""
    } else if (TYPED == "_") {
        TEXT = "" + TEXT + "t"
        TYPED = ""
    } else if (TYPED == ".._") {
        TEXT = "" + TEXT + "u"
        TYPED = ""
    } else if (TYPED == "..._") {
        TEXT = "" + TEXT + "v"
        TYPED = ""
    } else if (TYPED == ".__") {
        TEXT = "" + TEXT + "w"
        TYPED = ""
    } else if (TYPED == "_.._") {
        TEXT = "" + TEXT + "x"
        TYPED = ""
    } else if (TYPED == "_.__") {
        TEXT = "" + TEXT + "y"
        TYPED = ""
    } else if (TYPED == "__..") {
        TEXT = "" + TEXT + "z"
        TYPED = ""
    } else if (TYPED == ".____") {
        TEXT = "" + TEXT + "1"
        TYPED = ""
    } else if (TYPED == "..___") {
        TEXT = "" + TEXT + "2"
        TYPED = ""
    } else if (TYPED == "...__") {
        TEXT = "" + TEXT + "3"
        TYPED = ""
    } else if (TYPED == "...._") {
        TEXT = "" + TEXT + "4"
        TYPED = ""
    } else if (TYPED == ".....") {
        TEXT = "" + TEXT + "5"
        TYPED = ""
    } else if (TYPED == "_....") {
        TEXT = "" + TEXT + "6"
        TYPED = ""
    } else if (TYPED == "__...") {
        TEXT = "" + TEXT + "7"
        TYPED = ""
    } else if (TYPED == "___..") {
        TEXT = "" + TEXT + "8"
        TYPED = ""
    } else if (TYPED == "____.") {
        TEXT = "" + TEXT + "9"
        TYPED = ""
    } else if (TYPED == "_____") {
        TEXT = "" + TEXT + "0"
        TYPED = ""
    } else if (TYPED == "..__..") {
        TEXT = "" + TEXT + "?"
        TYPED = ""
    } else if (TYPED == "_._.__") {
        TEXT = "" + TEXT + "!"
        TYPED = ""
    } else if (TYPED == "._._._") {
        TEXT = "" + TEXT + "."
        TYPED = ""
    } else if (TYPED == "__..__") {
        TEXT = "" + TEXT + ","
        TYPED = ""
    } else if (TYPED == "_._._.") {
        TEXT = "" + TEXT + ";"
        TYPED = ""
    } else if (TYPED == "___...") {
        TEXT = "" + TEXT + ":"
        TYPED = ""
    } else if (TYPED == "._._.") {
        TEXT = "" + TEXT + "+"
        TYPED = ""
    } else if (TYPED == "_...._") {
        TEXT = "" + TEXT + "-"
        TYPED = ""
    } else if (TYPED == "_.._.") {
        TEXT = "" + TEXT + "/"
        TYPED = ""
    } else if (TYPED == "_..._") {
        TEXT = "" + TEXT + "="
        TYPED = ""
    } else if (TYPED == "") {
        TEXT = "" + TEXT + " "
        TYPED = ""
    } else {
        TYPED = ""
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    TYPED = ""
})
input.onButtonPressed(Button.AB, function () {
    CheckLetter()
})
radio.onReceivedString(function (receivedString) {
    SHOW_MESSAGE = 1
    basic.clearScreen()
    basic.showString(receivedString)
    SHOW_MESSAGE = 0
})
input.onButtonPressed(Button.B, function () {
    TYPED = "" + TYPED + "_"
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    TEXT = ""
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(TEXT)
})
let TEXT = ""
let TYPED = ""
let SHOW_MESSAGE = 0
SHOW_MESSAGE = 0
let Output = ""
let Indicator = "|"
basic.clearScreen()
TYPED = ""
TEXT = ""
radio.setGroup(69)
basic.forever(function () {
    if (SHOW_MESSAGE == 0) {
        basic.showString("" + TYPED + Indicator)
    }
})
basic.forever(function () {
    Indicator = "|"
    control.waitMicros(250000)
    Indicator = ""
    control.waitMicros(250000)
})
