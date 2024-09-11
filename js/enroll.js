

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const teacherData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        sex: document.getElementById('sex').value,
        class: document.getElementById('class').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        country: document.getElementById('country').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        lessonStart: document.getElementById('lessonStart').value,
        howHear: document.getElementById('howHear').value,
        aboutYou: document.getElementById('aboutYou').value
    };

  
    localStorage.setItem('teacherData', JSON.stringify(teacherData));

    alert(`Thank you, ${firstName} ${lastName}, for enrolling! We will reach out to you at ${email}.`);
    alert("Teacher data saved successfully!");

    const button = document.getElementById("autoClickButton");

    function simulateClick() {
        button.click();
    }
    
    simulateClick();

    
    
});
