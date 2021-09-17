/* 
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
C = (F - 32) * 5/9 
F = C * 9/5 + 32
*/

function transformToFahrenheit(celsius){
  temperatureInFahrenheit = celsius * 9/5 + 32
  return temperatureInFahrenheit + 'F'
}

function transformToCelsius(fahrenheit){
  temperatureInCelsius = (fahrenheit - 32) * 5/9
  return temperatureInCelsius + 'C'
}

function transformDegree(degree){
  const regex = /(^[0-9]*[CF])/i
  const checkFormat = regex.test(degree);

  if(!checkFormat){
    throw new Error('Grau não identificado')
  }

  const itsCelsius = degree.toUpperCase().includes('C')

  let UpdatedDegree

  if(itsCelsius){
    UpdatedDegree = Number(degree.toUpperCase().replace("C", ""))
    temperature = transformToFahrenheit(UpdatedDegree)
  }
  else{
    UpdatedDegree = Number(degree.toUpperCase().replace("F", ""))
    temperature = transformToCelsius(UpdatedDegree)
  }

  console.log(temperature);

}

try{
  transformDegree('50F')
  transformDegree('50C')
  transformDegree('50EC')
  // transformDegree('50E')
}
catch(error){
  console.log(error.message);
}