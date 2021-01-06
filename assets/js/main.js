function meuEscopo() {
  const dataString = document.querySelector('.dataString');
  const data = criarStringData(new Date());

  dataString.innerHTML = data;
}

function criarStringData(data) {
  const numeroDiaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const numeroDiaMes = data.getDate();
  const numeroAno = data.getFullYear()
  const horas = data.getHours();
  const segundos = data.getSeconds();;

  const diaSemana = definirDiaSemanaString(numeroDiaSemana);
  const mesNome = definirMesNomeString(numeroMes);

  

  
  const dataString = `${diaSemana}, ${numeroDiaMes} de ${mesNome} de ${numeroAno} <br> ${horas}:${segundos}`;
  return dataString;
}

function definirDiaSemanaString(numeroDiaSemana) {
  let diaSemana;
  switch (numeroDiaSemana) {
    case 0:
      diaSemana = 'domingo';
      break;
    case 1:
      diaSemana = 'segunda-feira';
      break;
    case 2:
      diaSemana = 'terça-feira';
      break;
    case 3:
      diaSemana = 'quarta-feira';
      break;
    case 4:
      diaSemana = 'quinta-feira';
      break;
    case 5:
      diaSemana = 'sexta-feira';
      break;
    case 6:
      diaSemana = 'sábado';
      break;
  }

  return diaSemana;

}

function definirMesNomeString(numeroMes) {
  let mesNome;
  switch (numeroMes) {
    case 0:
      mesNome = 'janeiro';
      break;
    case 1:
      mesNome = 'fevereiro';
      break;
    case 2:
      mesNome = 'março';
      break;
    case 3:
      mesNome = 'abril';
      break;
    case 4:
      mesNome = 'maio';
      break;
    case 5:
      mesNome = 'junho';
      break;
    case 6:
      mesNome = 'julho';
      break;
    case 7:
      mesNome = 'agosto';
      break;
    case 8:
      mesNome = 'setembro';
      break;
    case 9:
      mesNome = 'outubro';
      break;
    case 10:
      mesNome = 'novembro';
      break;
    case 11:
      mesNome = 'dezembro';
      break;
  }

  return mesNome;

}

meuEscopo();
