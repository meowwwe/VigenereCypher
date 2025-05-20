// diffusion.js
export function diffuse(text) {
    let arr = text.split('');
    for (let i = 0; i < arr.length - 1; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr.join('');
  }
  
  export function undiffuse(text) {
    // diffusion is reversible by same operation
    return diffuse(text);
  }
  