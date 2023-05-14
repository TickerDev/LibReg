const er = require("../dist/index");
const _reg = new er.EasyRegex();
console.log(`
E-Mail test:
    e-mail: test@testing.net: returns: ${_reg.emailValidator("test@testing.net")}
    e-mail: email: returns: ${_reg.emailValidator("email")}
Strong Pasword test:
    pass: Testing193!: returns: ${_reg.strongPasswordValidator("Testing193!")}
    pass: test123: returns: ${_reg.strongPasswordValidator("test123")}
IPv4 test:
    address: my_ip: returns: ${_reg.IPv4Validator("my_IP")}
    address: 127.0.0.1: returns: ${_reg.IPv4Validator("127.0.0.1")}
URL test:
    URL: 5318008: returns: ${_reg.URL_Validator("5318008")}
    URL: https://www.google.com: returns: ${_reg.URL_Validator("https://www.google.com")}
HEX test:
    code: 518731278g: returns: ${_reg.HEXCodeValidator("518731278g")}
    code: #fffff: returns: ${_reg.HEXCodeValidator("#fffff")}
Phone Number test:
    number: Phone number go BRRR: returns: ${_reg.phoneNumberValidator("Phone number go BRRR")}
    number: 000-000-0000: returns: ${_reg.phoneNumberValidator("000-000-0000")}

`)