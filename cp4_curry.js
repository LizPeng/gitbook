var add = function(x) {
  return function(y) {
    return x+y
  }
}
var increment = add(1)
var addTen = add(10)
increment(2) // 3
addTen(3) // 12

// 创建一些curry
var curry = require('lodash').curry

var match =curry(function(what, str) {
  return str.match(what)
})

var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement)
})

var filter = curry(function(f, ary) {
  return ary.filter(f)
})

var map = curry(function(f, ary) {
  return ary.map(f)
})

// 使用上面的curry
match(/\s+/g, 'hello world') // [ ' ' ]
match(/\s+/g)("hello world") // [ ' ' ]
var hasSpaces = match(/\s+/g) // function(x) {return x.match(/\s+/g)}
hasSpaces("hello world") // [ ' ' ]
hasSpaces("spaceless") // null

filter(hasSpaces, ["tori_spelling", "tori amos"]) // ["tori amos"]
var findSpaces = filter(hasSpaces)
findSpaces(["tori_spelling", "tori amos"]) // ["tori amos"]

var noVowels = replace(/[aeiou]/ig);// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }
var censored = noVowels("*"); // function(x) { return x.replace(/[aeiou]/ig, "*") }
censored("Chocolate Rain");
// 'Ch*c*l*t* R**n'


// More than a pun 
const getChildren = x => x.childNodes
const allTheChilren = map(getChildren)