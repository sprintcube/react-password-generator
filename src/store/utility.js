//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffleArr(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
}

export const generatePassword = (length, symbols, numbers) => {
    let upLength = Math.floor((length * 30) / 100);
    let symLength = 0;
    let numLength = 0;

    if (symbols) {
        symLength = Math.floor((length * 35) / 100);
    } else {
        upLength = Math.floor((length * 40) / 100);
    }

    if (numbers) {
        numLength = Math.floor((length * 30) / 100);
    } else {
        upLength = Math.floor((length * 40) / 100);
    }

    const lowLength = length - (upLength + symLength + numLength);
    const charString = "abcdefghijklmnopqrstuvwxyz";
    const numString = "0123456789";
    const symString = "!@#$<>%^&|*:()-+?";
    
    let lowStr = "";
    for (let i = 0; i < lowLength; i++) {
        lowStr += charString.charAt(Math.floor(Math.random() * charString.length));
    }

    let upStr = "";
    for (let i = 0; i < upLength; i++) {
        upStr += charString.charAt(Math.floor(Math.random() * charString.length));
    }

    let symStr = "";
    for (let i = 0; i < symLength; i++) {
        symStr += symString.charAt(Math.floor(Math.random() * symString.length));
    }

    let numStr = "";
    for (let i = 0; i < numLength; i++) {
        numStr += numString.charAt(Math.floor(Math.random() * numString.length));
    }

    let pwdString = lowStr + symStr + upStr.toUpperCase() + numStr;
    const pwdArr = pwdString.split("");
    const pwdStringArr = shuffleArr(pwdArr);
    pwdString = pwdStringArr.join("");
    pwdString = pwdString.replace(/</g, '&lt;');

    return pwdString;
}