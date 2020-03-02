module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let open_brackets = [];
    let close_brackets = [];

    for (let i = 0; i < bracketsConfig.length; i += 1) {
        open_brackets[i] = bracketsConfig[i][0];
        close_brackets[i] = bracketsConfig[i][1];
    }

    for (let i = 0; i < str.length; i += 1) {

        if (open_brackets.includes(str[i]) === true
            && close_brackets.includes(str[i]) === false) {
            stack.push(str[i]);

        } else if (open_brackets.includes(str[i]) === false
            && close_brackets.includes(str[i]) === true
            && stack[stack.length - 1] === open_brackets[close_brackets.indexOf(str[i])]) {
            stack.pop();

        } else if (open_brackets.indexOf(str[i]) === close_brackets.indexOf(str[i])
            && stack[stack.length - 1] !== str[i]) {
            stack.push(str[i]);

        } else if (open_brackets.indexOf(str[i]) === close_brackets.indexOf(str[i])
            && stack[stack.length - 1] === str[i]) {
            stack.pop();

        } else return false;
    };

    return (stack.length === 0) ? true : false;
}
