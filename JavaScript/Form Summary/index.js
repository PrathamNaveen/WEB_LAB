// Write a JavaScript code to
// validate all the fields when the button is clicked, later combine and display the
// information in textbox. 

function validateAndSummarize(){
    // Gather all the Values from the input fields
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phnNo = document.getElementById('phn-no').value;
    let isMale = document.getElementById('male').checked;
    let isFemale = document.getElementById('female').checked;
    let favColor = document.getElementById('color').value;
    let summary = document.getElementById('summary');

    // Reset error messages before validating again
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phn-no-error').textContent = '';
    document.getElementById('gender-error').textContent = '';
    document.getElementById('color-error').textContent = '';

    // Validating each field
    let isValid = true;
    if (username === '') {
        document.getElementById('name-error').textContent = 'Username cannot be empty';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email cannot be empty';
        isValid = false;
    } 
    if (phnNo === '') {
        document.getElementById('phn-no-error').textContent = 'Phone Number cannot be empty';
        isValid = false;
    } 
    if (!(isMale || isFemale)) {
        document.getElementById('gender-error').textContent = 'Please select a gender';
        isValid = false;
    }
    if (favColor === '') {
        document.getElementById('color-error').textContent = 'Please write down your favourite color';
        isValid = false;
    }  

    // Summarize into a textbox
    if (isValid) {
        gender = isMale ? 'Male' : 'Female';
        summary.value = `Username: ${username}\nEmail: ${email}\nPhone No: ${phnNo}\nGender: ${gender}\nFavorite Color: ${favColor}`;
    }
}