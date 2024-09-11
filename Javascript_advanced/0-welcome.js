function welcome(firstName, lastName){
    let fullName = firstName + " " + lastName // or const if the variable is immutable 
    function displayFullName() {
        alert("Welcome " + fullName + "!")
    }
    displayFullName()
}