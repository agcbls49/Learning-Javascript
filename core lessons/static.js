// Static - keyword that defines properties or methods that belong to a class itself
// rather than the objects created from that class (class owns anything static, 
// not the objects)

// Example 1
// class MathUtil {
//     static PI = 3.14159;

//     // static functions
//     static getDiameter(radius)
//     {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// Example 2
class User {
    static userCount = 0;

    // constructor
    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    // static method
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    // non static method
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);

// non static method call
user1.sayHello();
user2.sayHello();
user3.sayHello();

// because user count variable is static
console.log(User.userCount);

// call the static method
User.getUserCount();