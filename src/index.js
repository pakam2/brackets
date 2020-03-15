module.exports = function check(str, bracketsConfig) {
  let i = 0;
  let flag = false;
  let configLen = bracketsConfig.length;
  while (i < configLen) {
    flag = false;
    let bracketsJoin = bracketsConfig[i].join('');
    if (str.includes(bracketsJoin)) {
      str = str.replace(bracketsJoin, '')
      flag = true;
    }
    if (flag) {
      i = 0;
    } else {
      i++;
    }
  }
  if (str.length) {
    return false;
  }

  return true;

}