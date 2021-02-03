function str_len(value) {
    var num = value.length;
    return num;
}
function str_len_nospaces(value) {
    var num = value.replace(/\+/, "").length;
    return num;
}
function str_num_len_both(value, spaces) {
    var num;
    if (spaces) {
        num = value.length;
    }
    else {
        num = value.replace(/\+/, "").length;
    }
    return num;
}
console.log(str_len('test 1'));
console.log(str_len_nospaces('test1'));
console.log(str_num_len_both('test1'));
