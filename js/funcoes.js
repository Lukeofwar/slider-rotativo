/** 
* Feito por Lucas developer
* Simples slide responsivo
*/ 

var intervalo = 2500;

function slide1() {
    document.getElementById("slide").src = "_imagens/img-2.jpg";
 setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById("slide").src = "_imagens/img-3.jpg";
    setTimeout("slide3()",intervalo);

}
function slide3() {
    document.getElementById("slide").src = "_imagens/img-5.jpg";
    setTimeout("slide1()",intervalo);

}


      var name =prompt("qual é o seu nome ?"); 
        alert('bem vindo' + name);
      

      var idade =prompt("qual é a sua idade ?"); 
        alert(idade > 18)

        if(idade > 18){
alert("acesso permitido")
        }
        else {
          alert("acesso negado")
        }