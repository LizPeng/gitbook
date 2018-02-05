//非pointfree，因为提到了数据：word
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_')
}

// pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase)