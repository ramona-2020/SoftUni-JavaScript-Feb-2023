
function passwordValidator(password) {
    /**
     *     • The length should be 6 - 10 characters (inclusive)
     *     • It should consist only of letters and digits
     *     • It should have at least 2 digits
     * */
    const regexOne = /^([a-zA-Z0-9]+)$/;
    const regexTwo = /^([a-zA-Z]+[0-9]{2,})$/;
    const onlyLettersAndDigits = password.match(regexOne);
    const atLeastTwoDigits = password.match(regexTwo);

    let isPasswordValid = true;

    if (password.length < 6 || password.length >10) {
        isPasswordValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!onlyLettersAndDigits) {
        isPasswordValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!atLeastTwoDigits) {
        isPasswordValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isPasswordValid) {
        console.log("Password is valid");
    }
}

// Tests:
passwordValidator('Pa$s$s');
