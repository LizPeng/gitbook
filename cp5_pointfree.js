//非pointfree，因为提到了数据：word
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_')
}