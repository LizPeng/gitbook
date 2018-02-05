// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html
const compose = (f, g) => x => f(g(x))
var toUpperCase = function (x) {
  return x.toUpperCase()
}

var exclaim = function (x) {
  return x + '!'
}
var head = function (x) {
  return x[0]
}
// 有问题，只能compose两个
var loudLastUpper = compose(exclaim, toUpperCase, head)

loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);