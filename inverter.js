function inverterString(string) {
    return string.split('').reverse().join('');
}

// Exemplo de uso
const stringOriginal = "Hello, world!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
