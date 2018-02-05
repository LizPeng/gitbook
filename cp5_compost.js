// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html
var compose = function (f, g) {
  return function (x) {
    return f(g(x))
  }
}
var toUpperCase = function (x) {
  return x.toUpperCase()
}
var exclaim = function (x) {
  return x + '!'
}
var head = function (x) {
  return x[0]
}
var reverse = reduce(function (acc, x) {
  return [x].concat(acc)
}, [])


var loudLastUpper = compose(exclaim, toUpperCase, head, reverse)

loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);