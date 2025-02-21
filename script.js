function validateForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const occupation = document.getElementById('occupation').value;
    const phone = document.getElementById('number').value;
    const email = document.getElementById ('email').value;
    

//Name validation
    if (name === "") {
        alert ('Name is required');
        return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/; //Regex to allow only letters
    if (!nameRegex.test(name)) {
        alert('Name can only contain letters and spaces');
        return false; //Prevent form submission
    }

//Surname Validation
    if (surname === "") {
        alert ('Surname is required');
        return false;
    }

    const surnameRegex = /^[A-Za-z\s]+$/; //Regex to allow only letters
    if (!surnameRegex.test(surname)) {
        alert('Name can only contain letters and spaces');
        return false; //Prevent form submission
    }


//Occupation validation
if (occupation === "") {
    alert ('Occupation is required');
    return false;
}

const occupationRegex = /^[A-Za-z\s]+$/; //Regex to allow only letters
if (!occupationRegex.test(occupation)) {
    alert('Name can only contain letters and spaces');
    return false; //Prevent form submission
}

//Phone Number Validation 
if (!/^\d{10}$/.test(phone)) {
    alert ('phone number is required');
    return false;
}

//Email Validation
if (!email.includes('@')) {
    alert('invalid email address');
    return false;
}

//Form submission
alert('Form submitted successfully');
return true;

}