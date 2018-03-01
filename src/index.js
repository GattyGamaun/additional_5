module.exports = function check(str, bracketsConfig) {

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    if (stack[0] === bracketsConfig[0][0] && stack[1] === bracketsConfig[0][1]) {
        return true;
    } else {
        return false;
    }
}



