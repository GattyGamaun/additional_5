module.exports = function check(str, bracketsConfig) {

    let length = str.length;

    if (str[0] === bracketsConfig[0][0] && (str[length - 1] === bracketsConfig[0][0 + 1] || str[0 + 1] === bracketsConfig[0][0 + 1])) {
        return true;
    } else {
        return false;
    }
}


