$(function(){

    // Factory Pattern ---------------------------------------
    var personFactory = function(name, age, job) {

        var temp = {}; // Or var temp = new Object();

        // Properties
        temp.name = name;
        temp.age = age;
        temp.job = job;

        //Methods
        temp.printPerson = function(){
            console.log(this);
            $("#FactoryPattern").append("<div> The person is: "+ this.name + " with age " + this.age + " and job title as " + this.job + "</div>");
        }

        //return the object
        return temp;
    }

    var person1 = personFactory("Dharmender", 42, "Java Developer"); // no new keyword
    person1.printPerson();

    var person2 = new personFactory("Gurupreet", 35, "Clerk"); // no new keyword
    person2.printPerson();


    // Constructor Pattern ----------------------------------

    var vehicleConstructor = function(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;

        this.printVehicle = function(){
            console.log(this);
            $("#ConstructorPattern").append("<div> The Vehicle detail:  Make: "+ this.make + ", model: " + this.model + ", price: " + this.price + " lacs </div>");
        }
    }

    var vechicle1 = new vehicleConstructor("Maruti", "Brezza", "8.97");
    vechicle1.printVehicle();

    var vechicle2 = new vehicleConstructor("Toyota", "Yaris", "12.85"); //not working without 'new'
    vechicle2.printVehicle();


    // Prototype Pattern ----------------------------------
    var PizzaProto = function(){}; //nothing inside it
    PizzaProto.prototype.name ="unknow pizza";
    PizzaProto.prototype.type ="unknow type";
    PizzaProto.prototype.price =0.0;
    PizzaProto.prototype.printPizza = function(){ 
        console.log(this);
        console.log("Has own property name: ", this.hasOwnProperty('name'));
        $("#PrototypePattern").append("<div> Pizza detail:  name: "+ this.name + ", type: " + this.type + ", price: " + this.price + "</div>");
    }

    var vegLoaded = new PizzaProto();
    vegLoaded.name = "Veg Loaded";
    vegLoaded.type="Vegeterian";
    vegLoaded.price=119;
    vegLoaded.printPizza();


    var unknowPizza = new PizzaProto();
    unknowPizza.printPizza();

    var halfPizza = new PizzaProto();
    halfPizza.name = "Non-Tasty Pizza"; //only few props are changed
    halfPizza.printPizza();

    // Dynamic Prototype Pattern ----------------------------------
    var Mobile = function(mfger, model, price){
        this.manufacturer = mfger;
        this.model = model;
        this.price = price;

        if(typeof  this.printMobile !== 'function') { // If we don't find a function named printMoile, create it
            console.log("function printMobile not found!");
            console.log(typeof this.printMobile); //undefined
            Mobile.prototype.printMobile = function(){ 
                console.log(this);
              
                
                //console.log("Has own property name: ", this.hasOwnProperty('name'));
                $("#DynamicPrototypePattern").append("<div> Mobile detail:  name: "+ this.manufacturer + ", type: " + this.model + ", price: " + this.price + "</div>");
            };
        } else {
            console.log("function printMobile already found!");
            console.log(typeof this.printMobile); //function 
        }  
    };

    var mobile1 = new Mobile("Samsung", "S8", 57500);
    mobile1.printMobile();

    var mobile2 = new Mobile("Apple", "iPhone 7", 85000);
    mobile2.printMobile();

    


});
