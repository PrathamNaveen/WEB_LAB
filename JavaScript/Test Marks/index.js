// Also write Java script compute the average of two best tests on click of button
// and print average marks using alert. isValidate all the fields using JavaScript.

function getAverage() {
    var regNo = document.getElementById('regno').value;
    var subCode = document.getElementById('subcode').value;
    var test1 = parseFloat(document.getElementById('test1').value);
    var test2 = parseFloat(document.getElementById('test2').value);
    var test3 = parseFloat(document.getElementById('test3').value);

    var isValid = true;

    if (regNo === "") {
        alert('Enter valid Register Number');
        isValid = false;
    }
    if (subCode === ""){
        alert('Enter valid Subject Code');
        isValid = false;
    }
    if (isNaN(test1) || isNaN(test2) || isNaN(test3)){
        alert('Enter all three test marks');
        isValid = false;
    } else if (test1 < 0 || test1 > 20 || test2 < 0 || test2 > 20 || test3 < 0 || test3 > 20){
        alert('Marks should be in the range of 0 - 20');
        isValid = false;
    }

    if (isValid){
        var max1 = Math.max(test1, test2, test3);
        var min = Math.min(test1, test2, test3);
        var max2 = test1 + test2 + test3 - max1 - min;
        var avg = (max1 + max2) / 2;
        alert("Average marks : " + avg);
    } else {
        alert("Error in filling the form");
    }
}
