export default fontes = `

  struct Fonte{
    vec3 If;
    vec3 posicao;
  };

  vec3 especular(vec3 n, vec3 l, vec3 v){

    vec3 If = vec3(0.5,0,0.7);

    vec3 r = normalize(n * (2.0 *  dot(l,n)) - l);

    float fe = dot(v,r);

    if(fe < 0.0) return vec3(0,0,0);

    return If * fe;
  }

  vec3 luz(Ponto ponto, vec3 dr){

    if(ponto.distancia < 0.0) return vec3(0,0,0);

    vec3 If = vec3(0.5,0.6,0.7);

    // vec3 Kd = vec3(0.5,0.6,0.7);

    vec3 posicao = vec3(9,9,0.7);

    vec3 n = normalize(ponto.normal);
    
    vec3 l = normalize(ponto.pos - posicao);

    if(dot(l,n) > 0.0) return vec3(0,0,0);

    return If*(-dot(l,n)) + especular(n,l,dr);
  }`