function generateRandomPass(
    passwordLength,
    includelowerCase,
    includeupperCase,
    includenumber,
    includeSymbol
  ) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*-=_+";
  
    let allowedCharacters = "";
    let passWord = "";
  
    allowedCharacters += includelowerCase ? lowerCase : "";
    allowedCharacters += includeupperCase ? upperCase : "";
    allowedCharacters += includenumber ? number : "";
    allowedCharacters += includeSymbol ? symbol : "";
  
    if (passwordLength < 0 || allowedCharacters.length === 0) {
      console.log("Password length should be positive, and at least one character type should be included.");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        let randIndex = Math.floor(Math.random() * allowedCharacters.length);
        passWord += allowedCharacters[randIndex];
      }
      return passWord;
    }
  }
  
  const passwordLength = 15;
  const includelowerCase = true;
  const includeupperCase = true;
  const includenumber = true;
  const includeSymbol = true;
  
  const password = generateRandomPass(
    passwordLength,
    includelowerCase,
    includeupperCase,
    includenumber,
    includeSymbol
  );
  
  console.log(password);
  