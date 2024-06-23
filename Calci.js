function changeColor() {
    var button = document.querySelector('.color-change-button');
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
}
{
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var message;
    if (currentHour < 12) {
        message = "GOOD MORNING!";
    } else if (currentHour < 18) {
        message = "GOOD AFTERNOON!";
    } else {
        message = "GOOD EVENING!"
    }
alert(message)
var messageElement = document.getElementById('message');
messageElement.textContent = message;
}

function addnum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num1').value);
    var sum = num1+num2;

    document.getElementById('result').textContent = "Result: "+ sum;
}
