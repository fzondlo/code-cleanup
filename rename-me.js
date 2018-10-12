function renameMe(x) {
  var r = {};
  var i = x.length;

  count = function(c, s) {
    var result = 0, i = 0;
    for(i;i<s.length;i++)if(s[i]==c)result++;
    return result;
  }

  while (i--) {
    if(!isNaN(x.charAt(i))) {
      r[x.charAt(i)] = count(x.charAt(i), x)
    }
  }

  return r;
}

module.exports = renameMe;
