module.exports = {
  sum: function(arr) {
     return arr.reduce(function(prev, cur){
      return prev + cur;
    })
  },
  multiply: function(arr) {
    return arr.reduce(function(prev, cur){
      return prev * cur;
    })
  },
  scramble: function(arr) {
    return arr.reduce(function(prev, cur) {
      return prev + cur - prev + cur * prev - cur - cur - cur;
    })
  }
}
