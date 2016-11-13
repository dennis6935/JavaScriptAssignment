function computeSquaresAndCubes() {
    
    var numbers = "Numbers\tSquares\t\tCubes";
    
    for (var i = 5; i < 16; i++) {
        numbers += "\n" + i.toString() + "\t\t" + (i*i).toString() + "\t\t\t" + (i*i*i).toString();
    }
    
    alert(numbers);
    
}

function getFibonacci() {
    
    var answer = prompt("Enter the desired position:");
    
    if (answer == null) {
        alert("Canceled."); 
        return;
    }
    
    if (answer == "") {
        alert("Nothing was input."); 
        return;
    }
    
    if (parseFloat(answer) == 1) {
        alert("1");
    }
    
    else if (parseFloat(answer) == 2) {
        alert("1, 1");
    }
    
    else if (parseFloat(answer) > 2) {
        var results = "1, 1";

        var pos1 = 1;
        var pos2 = 1;

        for (var i = 3; i <= parseFloat(answer); i++) {
            var sum = pos1 + pos2;
            results += ", " + sum.toString();

            var temp = sum;
            pos1 = pos2;
            pos2 = temp;
        }
        
        alert(results);
    }
    
    else 
        alert("Invalid Input");
    
    
}

function getLargestNumber() {
    var numbers = prompt("Enter numbers separated by commas: ");
    
    if (numbers == null) {
        alert("Canceled."); 
        return;
    }
    
    if (numbers == "") {
        alert("Nothing was input."); 
        return;
    }
    
    var n = numbers.split(",");
    
    var max = parseFloat(n[0]);
    
    for (var i = 1; i < n.length; i++) {
        if (max < parseFloat(n[i])) {
            max = parseFloat(n[i]);
        }
    }
    
    alert("The largest number is: " + max);
    
}

function validName() {
    var name = prompt("Enter your last name, name, and initial:");
    
    if (name == null) {
        alert("Canceled."); 
        return;
    }
    
    if (name == "") {
        alert("Nothing was input."); 
        return;
    }
    
    var format = /[A-Z]{1}[a-z]{1,15}\, ?[A-Z]{1}[a-z]{1,15}\, ?[A-z]{1}/;  
    
   if(name.match(format)) {
       var n = name.split(",");
       alert("Valid name.\nThanks " + n[1] + " " + n[2] + " " + n[0]);
   }
    
   else 
       alert("Enter your name in the correct format");
   
}

function validPhoneNumber() {
    var phone = prompt("Enter your phone number (###-###-#### ):");
    
    if (phone == null) {
        alert("Canceled."); 
        return;
    }
    
    if (phone == "") {
        alert("Nothing was input."); 
        return;
    }
    
    var format = /^\(?[0-9]{3}\)?\-[0-9]{3}\-[0-9]{4}$/;  
    
   if(phone.match(format)) {
       alert("Valid Phone Number.\n"+phone);
   }
    
   else 
       alert("Invalid Phone Number.");
    
}

function alphabetic() {
    
    var answer = prompt("Enter any word you like: ");
    
    if (answer == null) {
        alert("Canceled");
        return;
    }
    
    var ch = answer.toUpperCase().split('');
    
    ch.sort();
    
    alert("" + ch);
    
}

document.getElementById("word").value;

function first_vowel(answer) {
    var answer = document.getElementById("word").value;
    
    if (answer == null) {
        alert("canceled.");
        return;
    }
        
    if (answer == "") {
        alert("Nothing was input.");
        return;
    }
    
    var ch = answer.split('');
    
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o','O','u', 'U'];
    
    for (var i=0;i<ch.length;i++) {
        for (var k=0;k<vowels.length;k++) {
            if (ch[i] == vowels[k]) {
                alert("The leftmost vowel is: " + ch[i]);
                return;
            }
        }
    }
    
    alert("The word doesn't have vowels.");
}
