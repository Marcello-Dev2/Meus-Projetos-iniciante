
const txt = document.querySelector('input');
const contador = document.getElementById('num');

txt.addEventListener("keyup", function() {
    const quantidade = txt.value.length;
    contador.textContent = "Você Digitou: " + quantidade + "caracteres";
});