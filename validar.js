
function validtel(){
    let numero = document.getElementById("telemovel").value

    if (isNaN(numero)){   
        alert("Não é um numero");
        destac("telemovel", "red") ; 
        return false;    
    } else  if (numero.length!=9 ){ 
        alert("O número de telemóvel deverá conter 9 dígitos."); 
        destac("telemovel", "red") ;        
        return false;       
    } else if(!numero.startsWith(9)) { 
        alert("Telemóvel não começa com 9.");  
        destac("telemovel", "red") ; 
        return false;        
    } else {
        destac("telemovel", "green") ;
        return true;
    }

    
}  

function validida(){
    let idade = document.getElementById("idade").value

    if (isNaN(idade)){   
        alert("Somente número.");   
        destac("idade", "red") ;
        return false; 
    } else if (idade<18){ 
        alert("Para preencher este formulário deverá ter mais do que 18 anos");
        destac("idade", "red") ;   
        return false; 
    } else {
        destac("idade", "green") ;
        return true;
    }

    
} 

function validmail(){
    let email= document.getElementById("email").value
    const escrito = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!escrito.test(String(email).toLowerCase())) { 
        alert("Email inválido");
        destac("email", "red") ;   
        return false; 
    } else {
        destac("email", "green") ;
        return true;
    }
}

// CASO CLICK SEJA DIRETO NO ENVIAR
function validdados(){
    let nome = document.getElementById("nome").value;
    let telemovel = document.getElementById("telemovel").value;
    let idade = document.getElementById("idade").value
    let email= document.getElementById("email").value

    const dados = [nome,telemovel, idade, email]

    if (nome == "" && telemovel == "" && idade == "" && email == ""){
        alert("Campos não preenchidos");
        destac("nome", "red") ;   
        destac("telemovel", "red") ;   
        destac("idade", "red") ;   
        destac("email", "red") ;   
        return false;
    } else {
        alert("Dados enviados com sucesso!"); 
        return true; 
    }
  
     
}

// FUNCAO GLOBAL
function destac(x, cor){
    let enti = document.getElementById(x);
    if(cor=="red"){
        enti.style.border = "2px solid red";
    } else {
        enti.style.border = "2px solid green";
    }
}
















