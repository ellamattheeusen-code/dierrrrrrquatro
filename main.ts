input.onButtonPressed(Button.A, function () {
    leven += 5
})
input.onButtonPressed(Button.B, function () {
    leven += 5
})
let leven = 20
loops.everyInterval(1000, function () {
    leven += -1
})
basic.forever(function () {
    if (leven > 10) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (leven < 10 && leven > 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
    } else if (leven < 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (leven < 1 && input.buttonIsPressed(Button.A)) {
        leven += 0
    }
})
basic.forever(function () {
    if (leven < 1 && input.buttonIsPressed(Button.B)) {
        leven += 0
    }
})
