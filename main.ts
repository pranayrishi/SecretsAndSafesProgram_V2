input.onButtonPressed(Button.A, function () {
	
})
let password = 1234
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("Enter Password", 0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(4)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(7)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("*")
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(2)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(5)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(8)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(0)
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(3)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(6)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(9)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("#")
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("A")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("B")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString("C")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("D")
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
})
