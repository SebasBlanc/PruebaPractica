
function palindromo(palabra) {
    const limpiarPalabra = palabra.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const invertir = limpiarPalabra.split('').reverse().join('');
    if (limpiarPalabra === invertir) {
        console.log(true);
    } else {
        console.log(false);
    }
};

palindromo('A man, a plan, a canal, Panama!');