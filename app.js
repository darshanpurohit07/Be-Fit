let loginpage =(e)=> {
    e.preventDefault()
    let user = e.target[0]
    let pswd = e.target[1]

    if(user.value === "admin" &&
        pswd.value === "admin") (
            window.location = './Home.html'
        )
    else {
        let err = "border:solid 2px red";
        user.style.cssText = err;
        pswd.style.cssText = err;
    }
}

document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();


    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);


    const bmi = weight / (height * height);


    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    
    bmiValue.textContent = bmi.toFixed(2);


    if (bmi < 18.5) {
        bmiCategory.textContent = 'Underweight';
        bmiCategory.style.color = 'RED';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory.textContent = 'Normal weight';
        bmiCategory.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory.textContent = 'Overweight';
        bmiCategory.style.color = 'orange';
    } else {
        bmiCategory.textContent = 'Obese';
        bmiCategory.style.color = 'black';
    }
});
