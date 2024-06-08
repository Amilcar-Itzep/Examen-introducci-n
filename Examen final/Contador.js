let contador = 0;

document.getElementById('incrementar').addEventListener('click', function() {
    contador++;
    actualizarContador();
});

document.getElementById('disminuir').addEventListener('click', function() {
    contador--;
    actualizarContador();
});

function actualizarContador() {
    document.getElementById('contador').textContent = contador;
}
