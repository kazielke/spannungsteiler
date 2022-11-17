let TeilSpannung = 0
basic.forever(function () {
    TeilSpannung = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(TeilSpannung)
})
