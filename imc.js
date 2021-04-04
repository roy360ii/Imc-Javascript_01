const calcular = document.getElementById("calcular")

function imc(){
const nome = document.getElementById('nome').value
const altura = document.getElementById('altura').value
const peso = document.getElementById('peso').value
const resultado = document.getElementById("resultado")
   
if (nome !== '' && altura !==''  && peso !=='' ) {
       const valorIMC = (peso / (altura * altura)).toFixed(1);
       let classificacao='';
       if(valorIMC <18.5){
           classificacao='abaixo do peso';
       } else if(valorIMC < 25){
        cassificacao = 'com peso ideal. PARABÉNS !!!';
           
       } else if(valorIMC <30) {
           classificacao= 'Levemente a cima do peso . ';
           

       }else if(valorIMC < 35 ){
           classificacao = 'Com obesidade grau  I '

       }else if (valorIMC < 40){
           classificacao = 'Obesidade Grau II '
           
    }else {
        classificacao = 'Obesidade Grau III CUIDADO ! '
        
 }

       resultado.textContent=`${nome} Seu IMC É ${valorIMC} ${classificacao}`;
    }else {
        resultado.textContent = 'preencha todos os Campos!!!'
        
    }
}


addEventListener('click' , imc)

