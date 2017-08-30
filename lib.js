'use stirct';

exports.normalizePort = function(val) {
  var port = parseInt(val, 10);
  if(isNaN(val)) return val;
  if(port >= 0) return port;
  return false;
};
