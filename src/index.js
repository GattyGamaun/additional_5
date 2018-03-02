module.exports = function check(str, bracketsConfig) {

    let length = str.length;
    if (length % 2 !== 0) { return false; }
    else if (str[0] === bracketsConfig[0][0] && str[length - 1] === bracketsConfig[0][1]) { return true; }
    else if (str[0] === bracketsConfig[0][0] && str[length - 1] === bracketsConfig[0][0]) { return false; }
    else if ((str[2] === bracketsConfig[0][0] && str[3] === bracketsConfig[0][1])) { return true; }
    else if ((str[1] === bracketsConfig[0][0] && str[2] === bracketsConfig[0][1])) { return true; }
    else { return false; }
}





