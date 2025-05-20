// vigenere.js
export function generateTable() {
    const table = [];
    for (let i = 0; i < 26; i++) {
      const row = [];
      for (let j = 0; j < 26; j++) {
        row.push(String.fromCharCode(((i + j) % 26) + 65));
      }
      table.push(row);
    }
    return table;
  }
  
  export function generateFullKey(message, key) {
    let fullKey = '';
    const keyLen = key.length;
    for (let i = 0; i < message.length; i++) {
      fullKey += key[i % keyLen];
    }
    return fullKey;
  }
  
  export function encrypt(message, key, table) {
    message = message.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase();
    const fullKey = generateFullKey(message, key);
    let cipherText = '';
    for (let i = 0; i < message.length; i++) {
      const row = fullKey.charCodeAt(i) - 65;
      const col = message.charCodeAt(i) - 65;
      cipherText += table[row][col];
    }
    return cipherText;
  }
  
  export function decrypt(cipherText, key, table) {
    key = key.toUpperCase();
    const fullKey = generateFullKey(cipherText, key);
    let plainText = '';
    for (let i = 0; i < cipherText.length; i++) {
      const row = fullKey.charCodeAt(i) - 65;
      const col = table[row].indexOf(cipherText[i]);
      plainText += String.fromCharCode(col + 65);
    }
    return plainText;
  }
  