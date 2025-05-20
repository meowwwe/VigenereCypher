// ascii_table.js
export function asciiEncrypt(message, key) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
      const m = message.charCodeAt(i) - 32;
      const k = key.charCodeAt(i % key.length) - 32;
      result += String.fromCharCode(((m + k) % 95) + 32);
    }
    return result;
  }
  
  export function asciiDecrypt(cipher, key) {
    let result = '';
    for (let i = 0; i < cipher.length; i++) {
      const c = cipher.charCodeAt(i) - 32;
      const k = key.charCodeAt(i % key.length) - 32;
      result += String.fromCharCode(((c - k + 95) % 95) + 32);
    }
    return result;
  }
  