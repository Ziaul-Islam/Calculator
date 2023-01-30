function extract(str) {
    //console.log(str);
    let num = '', arr = [], op = [];
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
            (num !== '') && arr.push(num); 
            op.push(ch);
            num = ''
        }
        else {
            num += ch;
        }
    }
    (num !== '') && arr.push(num);
    //console.log(arr);
    //console.log(op);
    return { 'num': arr, 'op': op };
}

function equal(map) {
    var num = map['num'];
    var op = map['op'];

    //console.log(num);
    //console.log(op);

    var math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y }
        //'/': function (x, y) { return (y != 0 ? x/y : 'error')}
    };

    var sum = 0;
    //console.log(num, op);
    //console.log(num.length-1, op.length);
    if ((num.length - 1) === op.length) {
        for (let i = 0; i < num.length; i++) {
            if (op[i - 1] === undefined) {
                //console.log(sum,' ',num[i]);
                sum = math_it_up['+'](sum, parseFloat(num[i]));
            }
            else {
                //console.log(sum,' ',num[i]);
                sum = math_it_up[op[i - 1]](sum, parseFloat(num[i]));
                //return if found division error
                if (sum === Infinity) return 'error'
                //console.log(sum,' ',num[i]);
            }
        }
        //
        return sum;
    }
    else {
        //console.log('I am here incorrect input');
        return 'error';
    }

}

//var map = extract("123+456/34*767");
//console.log(equal(getNumber('123+456/34*767')));
//console.log(map);

module.exports = {
    equal,
    extract
};