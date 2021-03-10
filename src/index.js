 module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let map = new Map();
  let newArr = str.split('');
  for (i = 0; i < newArr.length; i++) {
    bracket = newArr[i];

    for (configIndex = 0; configIndex < bracketsConfig.length; configIndex++) {
      configValue = bracketsConfig[configIndex];

      if (configValue[0] == configValue[1] && bracket == configValue[0]) {
        if (!map.has(bracket)) {
          map.set(bracket, 0);
        }  
        count = map.get(bracket);
        map.set(bracket, ++count);

        if (map.get(bracket)%2!=0) {
          stack.push(bracket);
          break; 
        } else {
          if (stack.pop() != configValue[0]) {
            return false;
          }
          break;          
        }
      }
      if(bracket == configValue[0]) {
        stack.push(bracket);
        break;
      }
      if (bracket == configValue[1]) {
        if (stack.pop() != configValue[0]) {
          return false;
        }
        break;
      }
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
