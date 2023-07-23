export default esfera = `
  struct Esfera{
    vec3 centro;
    float raio;
  };

  struct Ponto{
    vec3  pos;
    vec3  normal;
    float distancia;
    bool  nulo;
  };

  Ponto maisProximo(Ponto a, Ponto b){
    if(a.nulo) return b;
    if(b.nulo) return a;
    if(a.distancia < b.distancia) return a;
    return b;
  }

  float intersecaoRaio(float a, float b, float c, vec3 p0, vec3 dr){
    
    float delta = b*b - 4.0*a*c;
    
    // //Raiz imaginária
    if (delta < 0.0) return -1.0;

    delta = sqrt(delta);
    
    float t1 = (-b-delta)/(2.0*a);
    
    float t2 = (-b+delta)/(2.0*a);

    // Pega a menor raiz positiva 
    // float t = (t1 < t2)? 
                            // (t1 > 0)? t1 : t2 :
                            // (t2 > 0)? t2 : t1;

    float t = t1;

    if(t < t2){
        if(t1 < 0.0){
            t = t2;
        }
    }
    else{
        t = t2;
        if(t2 < 0.0){
            t = t1;
        }
    }
    
    return t;
  }

  Ponto colisao(Esfera esfera, vec3 p0, vec3 dr){

    float raio = esfera.raio;
    vec3 centro = esfera.centro;

    vec3 w = p0 - centro;
    
    float a = dot(dr,dr);
    float b = dot(w,dr) * 2.0;
    float c = dot(w,w) - raio*raio;

    float distancia = intersecaoRaio(a,b,c,p0,dr);

    if(distancia < 0.0) return Ponto(p0,dr,-1.0,true);

    vec3 posicao = p0 + dr * distancia;
    vec3 normal  = posicao - centro;

    return Ponto(posicao, normal, distancia, false);
  }
  `;