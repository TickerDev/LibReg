export class EasyRegex {

    /**
     * @explaination Validates e-mail address
     * @example emailValidator("example@example.com") // Output: true
     * @example emailValidator("test") // Output: false
     */
    emailValidator(email: string): boolean {
        if (typeof email !=="string") throw new TypeError("Email has to be a string.")
        let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        return emailRegex.test(email)
    }
    /**
     * @explaination Password must have at least 8 characters, must contain at least one uppercase letter, one lowercase letter, and one number. Can contain special characters
     * @example strongPasswordValidator("Testing193!") // Output: true
     * @example strongPasswordValidator("test123") // Output: false
     */
    strongPasswordValidator(pass: string): boolean {
        if (typeof pass !== "string") throw new TypeError("Password has to be a string.");
        let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        return passRegex.test(pass)
    }
    /**
     * @explaination Checks for a valid IPv4-Adresses from 0.0.0.0 - 255.255.255.255
     * @example IPv4Validator("my_IP_address_lmao") // Output: false
     * @example IPv4Validator("127.0.0.1") // Output: true
     */
    IPv4Validator(IP: string): boolean {
        if (typeof IP !== "string") throw new TypeError("IP has to be a string.");
        let IPv4Regex = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig;
        return IPv4Regex.test(IP)
    }
    /**
     * @explaination Validates that string is a URL (including http/https)
     * @example URL_Validator("5318008") // Output: false
     * @example URL_Validator("www.google.com") // Output: true
     */
    URL_Validator(URL: string): boolean {
        if (typeof URL !== "string") throw new TypeError("URL must be a string.");
        let URLregex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        return URLregex.test(URL);
    }
    /**
     * @explaination Validates that string is a HEX Code 
     * @example HEXCodeValidator("518731278g") // Output: false
     * @example HEXCodeValidator("#fffff") // Output: true
     */
    HEXCodeValidator(code: string): boolean {
        if (typeof code !== "string") throw new TypeError("HEX must be a string.");
        let HexRegex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g
        return HexRegex.test(code);

    }
       /**
     * @explaination Validates that string is a phone number 
     * @example phoneNumberValidator("Phone number go BRRR") // Output: false
     * @example phoneNumberValidator("000-000-0000") // Output: true
     */
    phoneNumberValidator(number: string): boolean {
        if (typeof number !== "string") throw new TypeError("Number must be a string.");
        let NumberRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
        return NumberRegex.test(number);

    }
}