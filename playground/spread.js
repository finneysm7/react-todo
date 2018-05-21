// function add (a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));
//
// var groupA = ['Sean', 'Travis'];
// var groupB = ['Lupita', 'Vic'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);


var person = ['Sean', 27];
var person2 = ['Lupita', 25];
//Hi Sean you are 27
function challenge(name, age) {
  return "hi " + name + " you are " + age;
}
console.log(challenge(...person));
console.log(challenge(...person2));
var names = ['Cool', 'BUTT'];

var final = [...names, 'AHHHHHH'];
// Hi Cool
function challenge2(arr) {
  arr.forEach(function(element) {
    console.log('hi ' + element);
  });
}

challenge2(final);
