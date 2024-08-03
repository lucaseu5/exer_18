document.addEventListener('DOMContentLoaded', function(evento) {
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        alert(numeroAleatorio);
    })
})