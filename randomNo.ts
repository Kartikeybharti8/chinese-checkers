export const generate = (): string => {
    let code  = "";
    const str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for(let i = 0; i <= 6; i++)
    code += str.charAt(Math.floor(Math.random()*str.length));
    return code;
  }