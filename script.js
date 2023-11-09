/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

const distance = 25000;
const time = 710;
const gender = "male";
const pushUps = 40;
const abs = 35;
/////////////////////////////////////////////////////////////////////////////
function verificaGender(gender){
   if(gender === 'male'){
    return true;
   }
   return false;
   }
  console.log(verificaGender('male'))
////////////////////////////////////////////////////////////////////////////
function verificaDistance(distance){
  if(distance >=24000){
    return true;
  }
  return false;
}
console.log(verificaDistance(distance))
///////////////////////////////////////////////////////////////////////////
function verificaTime(time){
  if(time <=720){
    return true;
  }
  return false;
}
console.log(verificaTime(time))
//////////////////////////////////////////////////////////////////////////
function verificaPushupsAbs(pushUps, abs){
  if(pushUps >=30){
    if(abs >=35){
    return true;
  }
  return false;
}
}
console.log(verificaPushupsAbs(pushUps, abs))
///////////////////////////////////////////////////////////////////////////
function apuracaoGender(gender){
  if(gender === 'female'){
    return true;
  }
  return false;
}
console.log(apuracaoGender('female'))
////////////////////////////////////////////////////////////////////////////
function apuracaoDistance(distance){
  if(distance >=24000){
    return true;
  }
  return false;
}
console.log(apuracaoDistance(distance))
/////////////////////////////////////////////////////////////////////////////
function apuracaoTime(time){
  if(time <=840){
    return true;
  }
  return false;
}
console.log(apuracaoTime(time))
////////////////////////////////////////////////////////////////////////////
function apuracaoPushupsAbs(pushUps, abs){
  if(pushUps >=20){
    if(abs >=30){
      return true;
    }
    return false;
  }
}
console.log(apuracaoPushupsAbs(pushUps, abs))





  function testTAF(distance, time, gender, pushUps, abs){
    passed = false;


   if(verificaGender(gender) && verificaDistance(distance) && verificaTime(time) && 
    verificaPushupsAbs(pushUps, abs) && apuracaoGender(gender) && apuracaoDistance(distance) && apuracaoTime(time)
    && apuracaoPushupsAbs(pushUps, abs)){

    const message = 'O atleta passou no teste!'
     return message.toUpperCase()
   }
    const message = 'O atleta não passou no teste!'
     return message.toUpperCase()

  
  
  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;

  }
  


//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
