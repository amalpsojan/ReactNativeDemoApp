const generateToken = (max: number = 25): string => {
  var s = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var n = s.length - 1;
  var token = '';
  for (var i = 0; i < max; i++) {
    token += s.charAt(Math.floor(Math.random() * n));
  }
  return token;
};

export {generateToken};
