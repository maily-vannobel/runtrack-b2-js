function myUpperCase(string) {
// initialisation de result   
    let result = "";
    // boucle chaque caractere et recup l'actuel
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        // 'si le caract est entre a et z'
        if (char >= 'a' && char <= 'z') {
            // ajuste code ASCII pour mettre en maj
            result += String.fromCharCode(char.charCodeAt(0) - 32);
        } else {
            result += char;
        }
    }
    return result;
}

let message = "Hello World !";
console.log(myUpperCase(message)); 
