function getShaderCode(objeto){

    let code = "";
  
    let vec3 = (vetor) => `vec3(${vetor[0]},${vetor[1]},${vetor[2]})`;

    let triangulo = (objeto) => `Triangulo(${vec3(objeto.p1)}, ${vec3(objeto.p2)}, ${vec3(objeto.p3)})`
  
    if(objeto.fronteira){
  
      const esfera = objeto.fronteira;
  
      code = code.concat(`if(!colisao(Esfera( ${vec3(esfera.centro)} , ${esfera.raio}), p0, dr).nulo){
      `);
    }
  
    if(objeto.componentes){
  
      for(const componente of objeto.componentes){
        code = code.concat("  " + getShaderCode(componente));
      }
  
    }
    else{
      code = code.concat(`ponto = maisProximo(ponto, colisao(${triangulo(objeto)},p0,dr));
    `);
    }
  
    if(objeto.fronteira)
        code = code.concat(`
        }
    `);
  
    return code;
  }
  
  console.log(getShaderCode({
"fronteira":
{
"centro":[20.0, 20.0, 20.0],
"raio":35.0
},
"componentes": [
{
"p1":[40.0, 40.0, 40.0],
"p2":[40.0, 0.0, 40.0],
"p3":[40.0, 40.0, 0.0]
},
{
"p1":[40.0, 0.0, 40.0],
"p2":[40.0, 0.0, 0.0],
"p3":[40.0, 40.0, 0.0]
},
{
"p1":[0.0, 40.0, 0.0],
"p2":[0.0, 40.0, 40.0],
"p3":[40.0, 40.0, 0.0]
},
{
"p1":[0.0, 40.0, 40.0],
"p2":[40.0, 40.0, 40.0],
"p3":[40.0, 40.0, 0.0]
},
{
"p1":[0.0, 40.0, 40.0],
"p2":[40.0, 0.0, 40.0],
"p3":[40.0, 40.0, 40.0]
},
{
"p1":[0.0, 0.0, 40.0],
"p2":[40.0, 0.0, 40.0],
"p3":[0.0, 40.0, 40.0]
},
{
"p1":[0.0, 40.0, 0.0],
"p2":[0.0, 0.0, 40.0],
"p3":[0.0, 40.0, 40.0]
},
{
"p1":[0.0, 0.0, 0.0],
"p2":[0.0, 0.0, 40.0],
"p3":[0.0, 40.0, 0.0]
},
{
"p1":[0.0, 0.0, 40.0],
"p2":[40.0, 0.0, 0.0],
"p3":[40.0, 0.0, 40.0]
},
{
"p1":[40.0, 0.0, 0.0],
"p2":[0.0, 0.0, 40.0],
"p3":[0.0, 0.0, 0.0]
},
{
"p1":[40.0, 0.0, 0.0],
"p2":[0.0, 40.0, 0.0],
"p3":[40.0, 40.0, 0.0]
},
{
"p1":[0.0, 0.0, 0.0],
"p2":[0.0, 40.0, 0.0],
"p3":[40.0, 0.0, 0.0]
}
]
}
))