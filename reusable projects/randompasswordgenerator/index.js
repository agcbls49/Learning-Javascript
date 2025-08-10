function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=";

    let allowedChars = "";
    let password = "";

    // Make sure password length is valid
    if (!passwordLength || passwordLength <= 0) {
        return "(Password length must be at least 1)";
    }

    // Build allowed characters based on settings
    if (includeLowercase) allowedChars += lowercaseChar;
    if (includeUppercase) allowedChars += uppercaseChar;
    if (includeNumbers)   allowedChars += numberChars;
    if (includeSymbols)   allowedChars += symbolChars;

    // Make sure at least 1 set is chosen
    if (allowedChars.length === 0) {
        return "(At least 1 set of characters needs to be selected)";
    }

    // Generate password
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Settings
const passwordLength = 12; // Make sure this is > 0
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// Generate
const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);