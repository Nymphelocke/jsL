"use strict";

// ES6 Standard
// class

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(50, 150);
const square_two = new Rectangle(60, 110);

console.log(square.calcArea())
console.log(square_two.calcArea())

// Hierarchy

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает параметры родителя. В скобках указать конкретные св-ва которые необходимы
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`)
    }
}

const newRect = new ColoredRectangleWithText(50, 50, 'Hello', 'red')

newRect.showMyProps()
console.log(newRect.calcArea())
