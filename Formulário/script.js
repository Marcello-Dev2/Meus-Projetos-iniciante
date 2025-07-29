const form = document.querySelector("form");

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;


    console.log("nome: ", nome);
    console.log("email: ", email);
    console.log("senha: ", senha);
});
    