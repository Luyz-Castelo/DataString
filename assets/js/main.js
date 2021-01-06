function main() {
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
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  const diaSemana = definirDiaSemanaString(numeroDiaSemana);
  const mesNome = definirMesNomeString(numeroMes);
  
  const dataString = `${diaSemana}, ${numeroDiaMes} de ${mesNome} de ${numeroAno} <br> ${horas}:${minutos}:${segundos}`;
  return dataString;
}

function definirDiaSemanaString(numeroDiaSemana) {
  const diaDasSemanas = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  
  const diaSemana = diaDasSemanas[numeroDiaSemana];
  return diaSemana;
}

function definirMesNomeString(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',];
  
  const mesNome = meses[numeroMes];
  return mesNome;
}

main();
