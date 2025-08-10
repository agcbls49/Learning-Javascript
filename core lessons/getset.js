// Getter = special method that makes a property readable
// Setter = special method that makes a property writable

// validate and modify a value when reading / writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // set width, check if user input is greater than 0
    set width(newWidth){
        if(newWidth > 0) {
            // underscore means it is a private poperty
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    // display the inputted information in the console
    get width() {
        return `${this._width.toFixed(1)} cm`;
    }

    get height() {
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);