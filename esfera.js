export default esfera = `
  struct Esfera{
    vec3 centro;
    float raio;
  };

  vec3 intersecaoRaio(float a, float b, float c, vec3 p0, vec3 dr){
    
    float delta = b*b - 4.0*a*c;
    
    // //Raiz imaginária
    if (delta < 0.0) return vec3(0,0,3857);

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
    //Se não existir raiz positiva
    if(t < 0.0) return vec3(0,0,3867);

    return p0 + dr*t;
  }

  vec3 colisao(Esfera esfera, vec3 p0, vec3 dr){

    float raio = esfera.raio;
    vec3 centro = esfera.centro;

    vec3 w = p0 - centro;
    
    float a = dot(dr,dr);
    float b = dot(w,dr) * 2.0;
    float c = dot(w,w) - raio*raio;

    vec3 ponto  = intersecaoRaio(a,b,c,p0,dr);
    vec3 normal = ponto - centro;

    if(ponto.z == 3857.0) return vec3(0,0,0);

    return luz(ponto, normal, dr);
  }`;