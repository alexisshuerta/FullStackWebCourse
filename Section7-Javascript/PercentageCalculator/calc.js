var  numField1 = document.getElementById('numField1');
var  numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

//adding event listener to form
var form = document.getElementById('xisWhatPercentOfY')
form.addEventListener('submit', function() {

    //if this is null or undefined
    if(!numField1.value || !numField2.value)
    {
        alert("Please enter values in the fields")
    }

    //parsing the string into a float value
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    alert(x + y);
});