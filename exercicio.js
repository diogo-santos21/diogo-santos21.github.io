function armazenarValor(){

var userInput = document.getElementById("userInput").value;

if(userInput<=0){
    
    document.getElementById("valorInserido").innerText = "Idade inválida!!!";

} else if(userInput<18)
{ 
    document.getElementById("valorInserido").innerText = "Sua idade é: " + userInput + ", não pode se registrar nesse site!!!";
    
} else if (userInput>=18) {
    
    document.getElementById("valorInserido").innerText = "Redicionando para página de cadastro...";
}

}