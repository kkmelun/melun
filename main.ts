NTCSenor.set(NTC_B.B3380)
basic.forever(function () {
    basic.showNumber(NTCSenor.Temperature(pins.analogReadPin(AnalogPin.P0)))
})
