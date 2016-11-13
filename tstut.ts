/*
 * variables and how to define them and convert theme
 */

// var myName: string = "anik";
// var myAge: number = 30;
// var canVote :boolean = true;
// var anything : any = "dog";
// 	anything = 2;

// document.getElementById("tsStuff").innerHTML = "My name is "+ myName;

// document.write("myname is a "+ typeof(myName) + "<br />");
// document.write( "myAge is a " + typeof(myAge) +"<br/>");
// document.write( "canVote is a " + typeof(canVote) +"<br/>");
// document.write( "any is a " + typeof(anything) +"<br/>");

// var strToNum : number = parseInt("5");
// var numToStr : number = 5;

// document.write("strToNum is a " + typeof(strToNum) + "<br />")
// document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");

// const PT = 3.1416;
// document.write("PT is a " + typeof(PT) + "<br />");

// /*
// * Interface
// */

// interface superHero{
// 	realName:string;
// 	sputerName:string;	
// }

// var superman : superHero = {
// 	realName:"Clark Kent",
// 	superName:"Superman"
// }

// document.write(superman.realName + " is " + superman.superName);

// var superHeroes : superHero[] = [];

// superHeroes.push({
// 	realName : 'Bruce Wayne',
// 	superName : 'Batman'
// });

// document.write(superHeroes[0].realName + " is " + superHeroes[0].superName);

// document.write("5 + 4 = " + (5+4) + "<br />");
// document.write("5 - 4 = " + (5-4) + "<br />");
// document.write("5 * 4 = " + (5*4) + "<br />");
// document.write("5 / 4 = " + (5/4) + "<br />");
// document.write("5 % 4 = " + (5%4) + "<br />");

/* 
*	If a number is added with wtring that number will be considered string as well.
*	here is an example
*/

// document.write("5 + string 4 = " + (5+'4') + "<br />");

// var random : number = 1;

// document.write("random++ = " + random++ + "<br />" );
// document.write("++random = " + ++random + "<br />" );
// document.write("random-- = " + random-- + "<br />" );
// document.write("--random = " + --random + "<br />" );

/* let vs var in TS */
// let sampLet = 123;

// if(true) {
// 	let sampLet = 456;
// 	document.write("sampLet inside scope = " +sampLet +"<br />");
// }

// document.write("sampLet = " + sampLet + "<br />" );

// var sampLet = 123;

// if(true) {
// 	var sampLet = 456;
// }

// document.write("sampLet = " + sampLet + "<br />" );

/* array maping or arry printing what so ever */

// var randArray = [5,6,7,8];

// for(var val in randArray){
// 	document.write(val + "<br />");
// }

// var strArray = randArray.map(String);

// for(var val of strArray){
// 	document.write(val + "<br />");
// }

/* Functions */

// var getSum = function (num1: number, num2: number): number {
// 	return num1 + num2;
// }
// var theSum1: number getSum(5,7);

// document.write("5 + 2 = " + theSum1+"<br />");

// var getDiff = function (num1: number, num2: number = 2, num3? : number): number {
	
// 	if(typeof num3 !== 'undefined') {
// 		return num1 - num2 - num3;	
// 	}
// 	return num1 - num2;
// }
// document.write("5 - 2 = " + getDiff(5, 2) +"<br />");
// document.write("5 - 6 - 3 = " + getDiff(5, 6, 3) +"<br />");

// var sumAll = function (...nums: number[]):void {
// 	var sum = nums.reduce((a,b) => a + b, 0);
// 	document.write("sum :" + sum + "<br />");
// }
// sumAll(1,2,3,4,5);

// var addOne = (x)=>x+1;
// document.write("1 + 1 = " + addOne(1)+"<br./>");

// /* Class */

// class Animal {
// 	public fevFood: string;
// 	static numOfAnimals : number = 0;
// 	constructor(private name: string, private owner: string){
// 		Animal.numOfAnimals++;
// 	}

// 	ownerInfo(){
// 		document.write(this.name + "is owned by " + this.owner +"<br />");
// 	}

// 	static howManyAnimals(): number{
// 		return Animal.numOfAnimals;
// 	}

// 	private _weight: number;

// 	get weight(weight: number){
// 		return this._weight;
// 	}

// 	set weight(weight: number){
// 		return this._weight = weight;
// 	}

// }

// var spot = new Animal("spot", "Doug");

// spot.ownerInfo();
// spot.weight = 100;
// document.write("Spots weight is "+ spot.weight +"<br />");
// document.write("Number of Animals: "+ Animal.howManyAnimals() +"<br />");

// class Dog extends Animal {
	
// 	constructor(name: string, owner: string) {
// 		super(name, owner);
// 		Dog.numOfAnimals++;
// 	}
// }


// var grover = new Dog("Grover", "Kimy");

// document.write("Number of Animals: "+ Animal.howManyAnimals() +"<br />");
// document.write("Is a dog an Animal: "+ (grover instanceof Animal) +"<br />");
// document.write("Does grover has a name: " + ('name' in grover) + "<br />");

/* Interfaces */

// interface Vehicle{
// 	drive():any;
// }

// class Car implements Vehicle {
// 	constructor(private wheels: number) {}
// 	drive():void{
// 		document.write("The car drives with"+ this.wheels + "wheels <br />");
// 	}
// }

// class Bicycle implements Vehicle {
// 	constructor(private wheels: number) {}
// 	drive():void{
// 		document.write("The Bicycle drives with"+ this.wheels + "wheels <br />");
// 	}
// }

// var car = new Car(4);
// var bike = new Bicycle(2)

// car.drive();
// bike.drive();

/* generic funtions */

// for multiple data types same way

function GetType<T>(val:T):string{
	return typeof(val);
}

var aStr = "A string";
var aNum = 20;

document.write(GetType(aStr) + "<br/>");
document.write(GetType(aNum) + "<br/>");