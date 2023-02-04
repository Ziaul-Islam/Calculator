function clearScreen() {
    document.getElementById("result").innerText = "";
}

// This function display values
function display(value) {
    document.getElementById("result").innerText += value;
}

function backspace(){
    document.getElementById("result").innerText = document.getElementById("result").innerText.slice(0, -1)
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
    var param = document.getElementById("result").innerText;
    console.log(param);
    var query = param.replace(/\+/g,'%2B');
    const url = 'https://us-central1-calculatorapp-d415f.cloudfunctions.net/app/equals?num='+query;
    //console.log(url);
    try{
        const result = await userAction(url);
        //console.log('Result in cal '+ JSON.stringify(result));
        document.getElementById("result").innerText = result['result'];
    }
    catch (err) {
        document.getElementById("result").innerText = 'Invalid Input';
        console.log(err.message);
    }

}