function convert()
{
    var temp=parseFloat(document.getElementById("inputTemperature").value);
    var unit=document.getElementById("inputUnit").value;
    var result;
    if(isNaN(temp))
    {
        document.getElementById("result").innerHTML="Please enter a valid number.";
        return;
    }
    if(unit=="Celsius")
    {
        result=(temp*9/5)+32;
        document.getElementById("result").innerHTML="Celsius to Fahrenheit: " + result.toFixed(2) + " °F";
    }
    else if(unit=="Fahrenheit"){
        result=(temp-32)*5/9;
        document.getElementById("result").innerHTML="Fahrenheit to Celsius: " + result.toFixed(2) + " °C";
    }
    else if(unit=="Kelvin"){
        result=temp-273.15;
        document.getElementById("result").innerHTML=result.toFixed(2)+" °C";
    }
}
function clearResults() {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("result").innerHTML = "";
}