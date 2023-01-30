// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

const userAction = async (url) => {

    try{
        //console.log('In user Action');
        //console.log(url);
        const response = await fetch(url);
        const myJson = await response.json();
        console.log('response '+JSON.stringify(response));
        console.log("myJson : "+JSON.stringify(myJson));
        return myJson;
    }
    catch (err) {
        console.log(err.message);
    }
    
}

// This function evaluates the expression and returns result
const calculate = async () => {

    
    //document.getElementById("result").value = "";
    var param = document.getElementById("result").value;
    console.log(param);
    var query = param.replace('+','%2B');
    const url = 'http://localhost:3000/equals?num='+query;
    //console.log(url);
    try{
        const result = await userAction(url);
        //console.log('Result in cal '+ JSON.stringify(result));
        document.getElementById("result").value = result['result'];
    }
    catch (err) {
        document.getElementById("result").value = 'Invalid Input';
        console.log(err.message);
    }

}