//by Denys Pysmennyi

function perform() {
  var result = [].pop.call(arguments).apply(this, arguments)

  this.then = function (cb) {
    result = cb(result)
    return this
  }

  return this
}

perform(null, function(value) { // value === null
	var param = 1;
	console.log(param); // 1
	return param;
})
.then(function(param) { // param === 1
	console.log(++param); // 2
	return param;
})
.then(function(param) { // param === 2
	console.log(++param); // 3
	return param;
});
