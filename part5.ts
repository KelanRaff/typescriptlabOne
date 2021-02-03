function str_len(value:string):number{
    let num : number = value.length;
    return num;
}

function str_len_nospaces(value:string):number{
    let num : number = value.replace(/\+/,"").length;
    return num;
}

function str_num_len_both(value:string, spaces?:boolean):number{
    let num:number;
    if(spaces)
    {
        num = value.length;
    }else{
        num = value.replace(/\+/,"").length;
    }
    return num;
}

console.log(str_len('test 1'));
console.log(str_len_nospaces('test1'));
console.log(str_num_len_both('test1'));
