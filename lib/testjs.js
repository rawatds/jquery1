/* OBJECT CREATION - DIFFERENT WAYS */


// 1. Direct using Object()  ---------------------------------
var myCar = new Object();

myCar.maxSpeed = 70;
myCar.driver = "Dharmender";
myCar.drive = function(){
    console.log("My car is driving at the max speed of ", this.maxSpeed, " by ", myCar.driver ); //can work with myCar rather this
    //myCar2.drive(); // cannot call other object's property or method, the objected created after this object
};

myCar.drive();


// 2. Shorthand notation for object ------------------------------
var myCar2 = {
    maxSpeed: 100,
    driver: "Anil",
    drive: function(){
        console.log("My car2 is driving at the max speed of ", this.maxSpeed, " by ", myCar2.driver );//wont work without this
        console.log(this.driver, " is a friend of ", myCar.driver); // can call other object's property or method
        console.log("From myCar2 ..."); // can call other object's property or method
        myCar.drive();
    },
    distanceTravelled: function(speed, hrs){
        console.log("Total distance travelled is ", (speed*hrs), " miles.");
    },
    logThis: function(){
        console.log(this);
    }

};

myCar2.drive();
myCar2.distanceTravelled(100, 2);
myCar2.distanceTravelled(); // output - NaN
myCar2.distanceTravelled(myCar2.maxSpeed); // NaN
myCar2.distanceTravelled(myCar2.maxSpeed, 3); // OK

console.log(this); //window
console.log(myCar2.logThis); //method definition
console.log(myCar2.logThis()); //method call



// 3. Using  consturctor --------------------------------
// Consturctor is a function used to create an object.
// e.g. var name = new String();
//      var array = new Array(); and so on.

var Car = function(speed, driver) {
    this.maxSpeed = speed;
    this.driver = driver;
    this.drive = function(){
        console.log(this.driver,  " is driving my car at a speed of ", this.maxSpeed);
    };
}

var car1 = new Car(120, "Gurupreet");
car1.drive();

// Other built-in objects
//----------------------- DATE object -----------------------------------

var myDate = new Date();
console.log(myDate);

var myDOB = new Date(1974, 10, 18); // month is 1 less
console.log(myDOB);

var myFuture = new Date(2025, 10, 18, 22, 00, 00);
console.log(myFuture);

