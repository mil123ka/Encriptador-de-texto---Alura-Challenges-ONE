// Función para encriptar
function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

// Función para desencriptar
function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

document.getElementById('process-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const action = document.querySelector('input[name="action"]:checked').value;
    let result;

    if (action === 'encrypt') {
        result = encrypt(inputText);
    } else {
        result = decrypt(inputText);
    }

    document.getElementById('output-text').value = result;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
});
