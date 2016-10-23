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
