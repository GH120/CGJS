export default esfera = `
  struct Esfera{
    vec3 centro;
    float raio;
  };

  struct Ponto{
    vec3  pos;
    vec3  normal;
    float distancia;
  };

  Ponto maisProximo(Ponto a, Ponto b){
    if(a.distancia > 0.0 && (b.distancia < 0.0 || b.distancia > a.distancia)){
      return a;
    }
    return b;
  }

  bool acertou(vec3 w, vec3 dr, float raio){

    float a = dot(dr,dr);
    float b = dot(w,dr) * 4.0;
    float c = dot(w,w) - raio*raio;

    return b*b > a*c;
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

    t1 = (float(bool(max(0.0, t1)))*1024.0 - 1023.0) * t1;
    
    return min(t1,t2);
  }

  Ponto colisao(Esfera esfera, vec3 p0, vec3 dr){

    float raio = esfera.raio;
    vec3 centro = esfera.centro;

    vec3 w = p0 - centro;
    
    float a = dot(dr,dr);
    float b = dot(w,dr) * 2.0;
    float c = dot(w,w) - raio*raio;

    float distancia = intersecaoRaio(a,b,c,p0,dr);

    vec3 posicao = p0 + dr * distancia;
    vec3 normal  = posicao - centro;

    return Ponto(posicao, normal, distancia);
  }
  `;