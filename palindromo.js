
function palindromo(palabra) {
    const limpiarPalabra = palabra.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Elimina los caracteres especiales y los espacios
    const invertir = limpiarPalabra.split('').reverse().join(''); // Invierte la palabra
    if (limpiarPalabra === invertir) { // Compara si la palabra original es igual a la palabra invertida
        console.log(true);
    } else {
        console.log(false);
    }
};

palindromo('A man, a plan, a canal, Panama!');
