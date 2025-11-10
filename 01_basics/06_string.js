// ...existing code...
const name = "hitesh";
const repeatCount = 50;
console.log(name + repeatCount); // removed undefined `value`

console.log(`hello my name is ${name} my repeat count is ${repeatCount}`);

const gameName = new String('avanish');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newString1 = "    hitesh  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.hiteshchoudhary.com/course/javascript";
console.log(url.replace("javascript","js"));
console.log(url.includes("hitesh"));
// ...existing code...


//SPLIT BASED ON DASH
const tags = "java-script,web-dev,programming";
console.log(tags.split(","));
// ...existing code...  