// confusion.js
// Apply a Caesar shift +3 to the key (A-Z only) for confusion
export function confuseKey(key) {
    key = key.toUpperCase();
    let result = '';
    for (const ch of key) {
      if (ch >= 'A' && ch <= 'Z') {
        const shifted = ((ch.charCodeAt(0) - 65 + 3) % 26) + 65;
        result += String.fromCharCode(shifted);
      } else {
        result += ch;
      }
    }
    return result;
  }
  
  export function deconfuseKey(key) {
    key = key.toUpperCase();
    let result = '';
    for (const ch of key) {
      if (ch >= 'A' && ch <= 'Z') {
        const shifted = ((ch.charCodeAt(0) - 65 - 3 + 26) % 26) + 65;
        result += String.fromCharCode(shifted);
      } else {
        result += ch;
      }
    }
    return result;
  }
  